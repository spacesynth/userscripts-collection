// ==UserScript==
// @name         # YouTube No Autoplay (Channel)
// @namespace    spsYouTubeNoAutoplayChannel
// @description  No autoplay on channels
// @version      1.0.2
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.youtube.com/channel*
// @match        *://*.youtube.com/@*
// @exclude      *://*.youtube.com/watch*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo6() {
    var element1 = document.querySelector('ytd-player').getPlayer();
    var alternative1 = document.querySelector('ytd-browse video');
    if (element1 != undefined) {
        element1.pauseVideo();
    }
    if (alternative1 != undefined) {
        alternative1.pause();
    }
}
function gensokyo4() {
    if (/https\:\/\/www\.youtube\.com\/channel\/.*/.test(window.location.href) === true) {
        gensokyo6();
    }

    if (/https\:\/\/www\.youtube\.com\/@.*/.test(window.location.href) === true) {
        gensokyo6();
    }
}
var refreshIntervalId4 = setInterval(gensokyo4, 200);
window.addEventListener("yt-navigate-finish", gensokyo4);
window.addEventListener("spfdone", gensokyo4);
