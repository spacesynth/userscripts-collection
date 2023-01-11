// ==UserScript==
// @name         Youtube No-Autoplay 2
// @namespace    vw9YouTubeNoAutoplay2
// @version      1.0.0
// @description  No autoplay revised
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_no_autoplay2.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_no_autoplay2.user.js
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
function gensokyo4(){
    let a = window.document.querySelector("button.ytp-button[data-tooltip-target-id='ytp-autonav-toggle-button']");
    if (a.getAttribute( "aria-label") == "Autoplay is on"){
        a.click( );
    }
    if (a.getAttribute( "aria-label" ) == "Autoplay is off"){
        //clearInterval(refreshIntervalId4);
    }
}

var refreshIntervalId4 = setInterval(gensokyo4, 1234);
window.addEventListener("yt-navigate-finish", gensokyo4);
window.addEventListener("spfdone", gensokyo4);
