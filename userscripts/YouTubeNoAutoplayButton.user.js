// ==UserScript==
// @name         # YouTube No Autoplay (Button)
// @namespace    spsYouTubeNoAutoplayButton
// @description  No autoplay for button
// @version      1.0.0
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
