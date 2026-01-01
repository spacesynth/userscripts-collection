// ==UserScript==
// @name         # YouTube Shorts To Normal Video
// @namespace    spsYouTubeShortsToNormalVideo
// @description  Go away cringe TikTok zoomers
// @version      1.1.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo() {
    var loc = window.top.location.toString();
    if (loc.indexOf("https:\/\/www\.youtube\.com\/shorts\/") != -1) {
        window.open(loc.replace(/https:\/\/www\.youtube\.com\/shorts\//, 'https://www.youtube.com/watch?v='), "_self");
    }
}
gensokyo();
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);
