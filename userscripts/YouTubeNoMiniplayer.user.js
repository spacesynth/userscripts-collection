// ==UserScript==
// @name         # YouTube No Miniplayer + Cookie refuser
// @namespace    spsYouTubeNoMiniplayer
// @description  No miniplayer on YouTube
// @version      1.0.6
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
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
var myRuns = 0;
function gensokyo() {
    myRuns++;
    if (myRuns < 4) {
        var element1 = document.querySelector('button[aria-label="Reject the use of cookies and other data for the purposes described"]');
        if (element1 != undefined) {
            element1.click();
        }
        return true;
    }
}
waitForKeyElements('button[aria-label="Reject the use of cookies and other data for the purposes described"]', gensokyo);
var refreshIntervalId4 = setInterval(clicker, 400);
