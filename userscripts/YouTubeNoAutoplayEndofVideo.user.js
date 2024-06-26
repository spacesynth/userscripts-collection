// ==UserScript==
// @name         # YouTube No Autoplay (End of Video)
// @namespace    spsYouTubeNoAutoplayEndofVideo
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
function gensokyo4() {
    var element1 = document.querySelectorAll("[aria-label^='Cancel']");
    var player = document.getElementById("movie_player")
    if (player != null) {
        if (player.getPlayerState() == 0) {
            if (element1[0] != undefined) {
                if (element1[0].getAttribute("style") != "display: none;") {
                    element1[0].click();
                    //clearInterval(refreshIntervalId4);
                    gensokyo3();
                }
            }
        }
    }
}
function gensokyo3() {
    if (/https:\/\/www\.youtube\.com\/watch.*/.test(window.location.href) === true) {
        var elms = document.getElementsByClassName("ytp-autonav-toggle-button");
        if (elms[0] != undefined) {
            if (elms[0].getAttribute("aria-checked") == "true") {
                elms[0].click();
                //elms[0].setAttribute("aria-checked", false);
            }
        }
    }
}
var refreshIntervalId4 = setInterval(gensokyo4, 400);
