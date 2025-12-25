// ==UserScript==
// @name         # YouTube No Autoplay (Channel)
// @namespace    spsYouTubeNoAutoplayChannel
// @description  No autoplay on channels
// @version      1.0.6
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo6() {
    if (/https\:\/\/www\.youtube\.com\/watch.*/.test(window.location.href) !== true) {
        var player1 = document.querySelector('ytd-browse video');
        var player2 = document.querySelector('ytd-player').getPlayer();
        if (player1 != undefined) {
            player1.pause();
        }
        if (player2 != undefined) {
            player2.pauseVideo();
        }
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
