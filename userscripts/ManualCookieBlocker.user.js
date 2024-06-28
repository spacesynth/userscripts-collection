// ==UserScript==
// @name         # Manual Cookie Blocker
// @namespace    spsManualCookieBlocker
// @description  Lot's of sites missing in Firefox's native blocker and I still don't care about cookies
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      https://www.amazon.tld/*
// @match        https://hackaday.com/*
// @match        https://www.edeka.de/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo1() {
    var button = document.getElementById("sp-cc-rejectall-link");
    if (button != null) {
        clearInterval(gensokyo1);
        button.click();
    }
}
if (/https:\/\/www\.amazon\.[a-z]{2,3}\/.*/.test(window.location.href) == true) {
    var refreshIntervalId1 = setInterval(gensokyo1, 200);
}
function gensokyo2() {
    var button = document.getElementsByClassName("close cookie-notifications-btn")[0];
    if (button != null) {
        clearInterval(gensokyo2);
        button.click();
    }
}
if (/https:\/\/hackaday.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId2 = setInterval(gensokyo2, 200);
}
function gensokyo3() {
    var button = document.getElementById("popin_tc_privacy_button_2");
    if (button != null) {
        clearInterval(gensokyo3);
        button.click();
    }
}
if (/https:\/\/www.edeka.de\/.*/.test(window.location.href) == true) {
    var refreshIntervalId3 = setInterval(gensokyo3, 200);
}
