// ==UserScript==
// @name         YouTube Dark Theme + No Autoplay Tweak
// @namespace    NoAutoplayDarkThemeTweak
// @version      1.1.5
// @description  Dark theme with no autoplay
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_auto_tweak.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_auto_tweak.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

var fired = 0,
    nameP = 'PREF',
    enableUS = '&gl=US',
    enableDark = '&f6=400',
    enablePhoenix = '&tz=America.Phoenix',
    disableAutoplay = '&f5=30000',
    isDark = false,
    noAutoplay = false,
    isEnglish = false,
    isPhoenix = false; //do not edit

function gensokyo() {
    document.cookie = 'CONSENT=YES+yt.416317000.en+FX+363;  path=/; domain=.youtube.com';
    if (document.cookie.match(/^(.*;)?\s*PREF\s*=\s*[^;]+(.*)?$/) === null) {
        document.cookie = 'PREF=tz=America.Phoenix&gl=US&f5=30000&f6=400;  path=/; domain=.youtube.com';
    }
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
    var matchD = document.cookie.match(new RegExp('(^| )' + nameP + '=([^;]+)'));
    if (matchD[2].includes('tz=Europe.Berlin') === true) {
        var newstr3 = matchD[2].replace(/tz=Europe\.Berlin/, "tz=America.Phoenix");
        document.cookie = 'PREF=' + newstr3 + ';  path=/; domain=.youtube.com';
    } else if (matchD[2].includes('tz=America.Phoenix') == false) {
        document.cookie = 'PREF=' + matchD[2] + enablePhoenix + ';  path=/; domain=.youtube.com';
    } else {
        isPhoenix = true; //only set if cookie 4 change worked
    }
    if (isDark === true && noAutoplay === true && isEnglish == true) {
        console.log(isDark, noAutoplay, isEnglish, isPhoenix, "S ALL GOOD MAN!")
        clearInterval(refreshIntervalId);
    } else {
        location.reload();
        console.log("reloading!");
    }
};

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible' && fired < 2) {
        console.log("fired!");
        fired = 2;
        var player = document.getElementById("movie_player")
        player.playVideo();
    }
});

var refreshIntervalId = setInterval(gensokyo, 1000);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);
