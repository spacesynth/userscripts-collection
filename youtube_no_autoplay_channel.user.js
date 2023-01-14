// ==UserScript==
// @name         Youtube No-Autoplay on Channel
// @namespace    vw9YouTubeNoAutoplayChannel
// @version      1.0.0
// @description  No autoplay on channels
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_no_autoplay_channel.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_no_autoplay_channel.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

'use strict';
function gensokyo4() {
    var player = document.getElementById("movie_player")
    if (/https\:\/\/www\.youtube\.com\/channel\/.*/.test(window.location.href) === true) {
        var element1 = document.querySelector('ytd-player').getPlayer();
        if (element1 != undefined) {
            element1.pauseVideo();
            clearInterval(refreshIntervalId4);
        }
    }

    if (/https\:\/\/www\.youtube\.com\/@.*/.test(window.location.href) === true) {
        var element2 = document.querySelector('ytd-player').getPlayer();
        if (element2 != undefined) {
            element2.pauseVideo();
            clearInterval(refreshIntervalId4);
        }
    }
}

var refreshIntervalId4 = setInterval(gensokyo4, 400);
window.addEventListener("yt-navigate-finish", gensokyo4);
window.addEventListener("spfdone", gensokyo4);
