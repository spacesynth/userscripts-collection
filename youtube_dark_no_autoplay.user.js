// ==UserScript==
// @name         YouTube Dark Theme + No Autoplay on Steroids
// @namespace    vw9YouTubeDarkThemeNoAutoplayRoids
// @version      1.2.8
// @description  Dark theme with no autoplay
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_autoplay.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_autoplay.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://*.youtube.com/*
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
    nameP = 'PREF',
    enableUS = '&gl=US',
    enableDark = '&f6=400',
    disableAutoplay = '&f5=30000',
    isDark = false,
    noAutoplay = false,
    isEnglish = false; //do not edit


function gensokyo4() {
    var element1 = document.querySelectorAll("[aria-label^='Cancel']");
    var player = document.getElementById("movie_player")
    if (player != null) {
        if (player.getPlayerState() == 0) {
            if (element1[0] != undefined) {
                if (element1[0].getAttribute("style") != "display: none;") {
                    element1[0].click();
                    clearInterval(refreshIntervalId4);
                }
            }
        }
    }
}

function gensokyo3() {
    var elms = document.getElementsByClassName("ytp-autonav-toggle-button");
    if (elms[0] != undefined) {
        if (elms[0].getAttribute("aria-checked") == "true") {
            elms[0].click();
            //elms[0].setAttribute("aria-checked", false);
            clearInterval(refreshIntervalId3);
        }
    }
}

function gensokyo2() {
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
    } else {
        if (/https:\/\/www\.youtube\.com\/watch.*/.test(window.location.href) === false) {
            location.reload();
            console.log("reloading!");
        }
        gensokyo3();
    }
}

function gensokyo() {
    var element1 = document.querySelectorAll("[aria-label^='Reject']");
    if (element1 != undefined) {
        if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === true) {
            document.cookie = 'PREF=tz=Europe.Berlin&f5=30000&f6=400&gl=US;  path=/; domain=.youtube.com';
            element1[0].click();
        }
        if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === false) {
            var ragemode = document.querySelector("ytd-app")
            if (ragemode.isAppDarkTheme() === false) {
                ragemode.onDarkModeToggledAction()
            }
            element1[0].click();
            gensokyo2();
        }
    }
    return false;
}

waitForKeyElements("[aria-label^='Reject']", gensokyo);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);
var refreshIntervalId3 = setInterval(gensokyo3, 400);
var refreshIntervalId4 = setInterval(gensokyo4, 400);
