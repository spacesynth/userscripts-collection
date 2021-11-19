// ==UserScript==
// @name         YouTube Dark Theme + No Autoplay
// @namespace    RansNoAutoplayDarkTheme
// @version      1.1.5
// @description  Dark theme with no autoplay
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_autoplay.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_dark_no_autoplay.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

var nameP = 'PREF'
var enableDark = '&f6=400'
var disableAutoplay = '&f5=30000'
var isDark = false, noAutoplay = false;//do not edit

function gensokyo(){
    if (document.cookie.match(/^(.*;)?\s*PREF\s*=\s*[^;]+(.*)?$/) === null){
        document.cookie = 'PREF=gl=US&f5=30000&f6=400;  path=/; domain=.youtube.com';
    }
    var matchA = document.cookie.match(new RegExp('(^| )' + nameP + '=([^;]+)'));
    if (matchA[2].includes('f5=20000') === true) {
        var newstr = matchA[2].replace(/f5=20000/, "f5=30000");
        document.cookie = 'PREF=' + newstr + ';  path=/; domain=.youtube.com';
    } else if (matchA[2].includes('f5=30000') == false) {
        document.cookie = 'PREF=' + matchA[2] + disableAutoplay + ';  path=/; domain=.youtube.com';
    } else {
        isDark = true;//only set if cookie 1 change worked
}
    var matchB = document.cookie.match(new RegExp('(^| )' + nameP + '=([^;]+)'));
    if (matchB[2].includes('f6=80000') === true) {
        var newstr2 = matchB[2].replace(/f6=80000/, "f6=400");
        document.cookie = 'PREF=' + newstr2 + ';  path=/; domain=.youtube.com';
    } else if (matchB[2].includes('f6=400') === false) {
        document.cookie = 'PREF=' + matchB[2] + enableDark + ';  path=/; domain=.youtube.com';
    } else {
        noAutoplay = true;//only set if cookie 2 change worked
    }
    if (isDark === true && noAutoplay === true) {
        console.log("S ALL GOOD MAN!")
        clearInterval(refreshIntervalId);
    } else {
        location.reload();
        console.log("reloading!");
    }
};

var refreshIntervalId = setInterval(gensokyo, 1000);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);
