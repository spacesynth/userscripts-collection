// ==UserScript==
// @name         No Youtube Autoplay - Next video button disable / disabled
// @namespace    YoutubeNoAutoplay
// @version      4.0.2
// @description  Automatically switch off the autoplay next video button on Youtube
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_no_autoplay.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_no_autoplay.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

function gensokyo() {
var name = 'PREF'
var disableAutoplay = '&f5=30000'
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match === null) {
        document.cookie = 'PREF=' + disableAutoplay + ';  path=/; domain=.youtube.com';
        location.reload();
    } else if (match[2].includes('f5=20000') == true && match !== null) {
        var newstr = match[2].replace(/f5=20000/, "f5=30000");
        document.cookie = 'PREF=' + newstr + ';  path=/; domain=.youtube.com';
        location.reload();
    } else if (match[2].includes('f5=30000') == false && match !== null) {
        document.cookie = 'PREF=' + match[2] + disableAutoplay + ';  path=/; domain=.youtube.com';
        location.reload();
    } else if (match !== null) {
        clearInterval(refreshIntervalId);
        console.log("Yeah it worked!")
    }
}

var refreshIntervalId = setInterval(gensokyo, 1000);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);
