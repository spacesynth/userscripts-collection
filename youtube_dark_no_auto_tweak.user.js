// ==UserScript==
// @name         YouTube Dark Theme + No Autoplay Tweak
// @namespace    vw9YouTubeDarkThemeNoAutoplayTweak
// @version      1.2.0
// @description  Dark theme with no autoplay
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_auto_tweak.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_auto_tweak.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/waitForKeyElements.js
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

'use strict';
var fired = 0,
    fired2 = 0,
    nameP = 'PREF',
    enableUS = '&gl=US',
    enableDark = '&f6=400',
    disableAutoplay = '&f5=30000',
    isDark = false,
    noAutoplay = false,
    isEnglish = false; //do not edit

function gensokyo() {
    document.cookie = 'CONSENT=YES+yt.416848408.en+FX+243;  path=/; domain=.youtube.com';
    var matchA = document.cookie.match(new RegExp('(^| )' + nameP + '=([^;]+)'));
    if (matchA[2].includes('f5=20000') === true) {
        var newstr = matchA[2].replace(/f5=20000/, "f5=30000");
        document.cookie = 'PREF=' + newstr + ';  path=/; domain=.youtube.com';
    } else if (matchA[2].includes('f5=30000') == false) {
        document.cookie = 'PREF=' + matchA[2] + disableAutoplay + ';  path=/; domain=.youtube.com';
    } else {
        isDark = true; //only set if cookie 1 change worked
    }
    var matchB = document.cookie.match(new RegExp('(^| )' + nameP + '=([^;]+)'));
    if (matchB[2].includes('f6=80000') === true) {
        var newstr2 = matchB[2].replace(/f6=80000/, "f6=400");
        document.cookie = 'PREF=' + newstr2 + ';  path=/; domain=.youtube.com';
    } else if (matchB[2].includes('f6=400') === false) {
        document.cookie = 'PREF=' + matchB[2] + enableDark + ';  path=/; domain=.youtube.com';
    } else {
        noAutoplay = true; //only set if cookie 2 change worked
    }
    var matchC = document.cookie.match(new RegExp('(^| )' + nameP + '=([^;]+)'));
    if (matchC[2].includes('gl=US') == false) {
        document.cookie = 'PREF=' + matchC[2] + enableUS + ';  path=/; domain=.youtube.com';
    } else {
        isEnglish = true; //only set if cookie 3 change worked
    }
    if (isDark === true && noAutoplay === true && isEnglish == true) {
        console.log(isDark, noAutoplay, isEnglish, "S ALL GOOD MAN!")
        clearInterval(refreshIntervalId);
    } else {
        location.reload();
        console.log("reloading!");
    }
};

function gensokyo2() {
    var player = document.getElementById("movie_player")
    if (player != null) {
        if (document.visibilityState === 'visible' && fired < 1) {
            if (player.getPlayerState() == 1) {
                fired += 1;
                clearInterval(refreshIntervalId2);
                console.log("fired!");
            } else if (player.getPlayerState() != 1) {
                player.playVideo();
            }
        }
    }
};

function gensokyo3() {
    var element1 = document.querySelectorAll("[aria-label^='Cancel autoplay']");
    var player = document.getElementById("movie_player")
    if (player != null) {
        if (player.getPlayerState() == 0 && fired2 < 1) {
            if (element1[0] != undefined) {
                if (element1[0].getAttribute("style") != "display: none;") {
                    fired2 += 1;
                    element1[0].click();
                }
            }
        }
    }
    return true;
}

function gensokyo4() {
    var elms = document.getElementsByClassName("ytp-autonav-toggle-button");
    if (elms[0] != undefined) {
        if (elms[0].getAttribute("aria-checked") == "true") {
            elms[0].setAttribute("aria-checked", false);
        }
    }
}
waitForKeyElements("[aria-label^='Cancel autoplay']", gensokyo3);
var refreshIntervalId = setInterval(gensokyo, 1000);
var refreshIntervalId2 = setInterval(gensokyo2, 100);
var refreshIntervalId3 = setInterval(gensokyo4, 1000);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);
