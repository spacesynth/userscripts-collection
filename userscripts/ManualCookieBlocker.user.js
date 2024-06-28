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
// @match        https://rule34.xxx/*
// @match        https://rule34.paheal.net/*
// @match        https://xbooru.com/*
// @match        https://www.imdb.com/*
// @match        https://*.fandom.com/*
// @match        https://www.berrybase.de/*
// @match        https://clonezilla.org/*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo1() {
    var button = document.getElementById("sp-cc-rejectall-link");
    if (button != null) {
        clearInterval(refreshIntervalId1);
        button.click();
        console.log("Cookie clicker should stop now");
    }
}
if (/https:\/\/www\.amazon\.[a-z]{2,3}\/.*/.test(window.location.href) == true) {
    var refreshIntervalId1 = setInterval(gensokyo1, 200);
}
function gensokyo2() {
    var button = document.getElementsByClassName("close cookie-notifications-btn")[0];
    if (button != null) {
        clearInterval(refreshIntervalId2);
        console.log("Cookie clicker should stop now");
        button.click();
    }
}
if (/https:\/\/hackaday.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId2 = setInterval(gensokyo2, 200);
}
function gensokyo3() {
    var button = document.getElementById("popin_tc_privacy_button_2");
    if (button != null) {
        console.log("Cookie clicker should stop now");
        clearInterval(refreshIntervalId3);
        button.click();
    }
}
if (/https:\/\/www.edeka.de\/.*/.test(window.location.href) == true) {
    var refreshIntervalId3 = setInterval(gensokyo3, 200);
}
function gensokyo4() {
    var button = document.querySelectorAll('[onclick="declineAnalytics();"]')[0];
    if (button != null) {
        clearInterval(refreshIntervalId4);
        console.log("Cookie clicker should stop now");
        button.click();
    }
}
if (/https:\/\/rule34.xxx\/.*/.test(window.location.href) == true) {
    var refreshIntervalId4 = setInterval(gensokyo4, 200);
}
function gensokyo5() {
    var button = document.querySelectorAll('[onclick="tnc_agree();"]')[0];
    if (button != null) {
        clearInterval(refreshIntervalId5);
        console.log("Cookie clicker should stop now");
        button.click();
    }
}
if (/https:\/\/rule34.paheal.net\/.*/.test(window.location.href) == true) {
    var refreshIntervalId5 = setInterval(gensokyo5, 200);
}
function gensokyo6() {
    var button = document.querySelectorAll('[onclick="declineAnalytics();"]')[0];
    if (button != null) {
        clearInterval(refreshIntervalId6);
        console.log("Cookie clicker should stop now");
        button.click();
    }
}
if (/https:\/\/xbooru.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId6 = setInterval(gensokyo6, 200);
}
function gensokyo7() {
    var button = document.querySelectorAll('div[data-tracking-opt-in-accept="true"]');
    if (button != null) {
        clearInterval(refreshIntervalId7);
        console.log("Cookie clicker should stop now");
        button[0].click();
    }
}
if (/https:\/\/[a-z]{1,63}.fandom.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId7 = setInterval(gensokyo7, 200);
}
function gensokyo8() {
    var button = document.querySelectorAll('[data-testid="reject-button"]');
    if (button != null) {
        console.log("Cookie clicker should stop now");
        button[0].click();
    }
}
if (/https:\/\/www.imdb.com\/.*/.test(window.location.href) == true) {
    waitForKeyElements('[data-testid="reject-button"]', gensokyo8);
}
function gensokyo9() {
    var button = document.getElementsByClassName('cookie-permission--accept-button btn is--primary is--large is--center');
    if (button != null) {
        clearInterval(refreshIntervalId9);
        console.log("Cookie clicker should stop now");
        button[0].click();
    }
}
if (/https:\/\/www.berrybase.de\/.*/.test(window.location.href) == true) {
    var refreshIntervalId9 = setInterval(gensokyo9, 200);
}
function gensokyo10() {
    var button = document.getElementsByClassName('cc-btn cc-dismiss');
    if (button != null) {
        clearInterval(refreshIntervalId10);
        console.log("Cookie clicker should stop now");
        button[0].click();
    }
}
if (/https:\/\/clonezilla.org\/.*/.test(window.location.href) == true) {
    var refreshIntervalId10 = setInterval(gensokyo10, 200);
}
