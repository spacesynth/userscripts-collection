// ==UserScript==
// @name         # YouTube No Miniplayer
// @namespace    spsYouTubeNoMiniplayer
// @description  No miniplayer on YouTube
// @version      1.0.4
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
function clicker() {
    if (/https\:\/\/www\.youtube\.com\/watch.*/.test(window.location.href) === false) {
        var button = document.querySelectorAll('button[class="ytp-miniplayer-close-button ytp-button"]');
        if (typeof button[0] !== 'undefined') {
            button[0].click();
        }
    }
}
var refreshIntervalId4 = setInterval(clicker, 400);
