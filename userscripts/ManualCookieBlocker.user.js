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
function gensokyo4() {
    var button = document.querySelectorAll('[onclick="declineAnalytics();"]')[0];
    if (button != null) {
        clearInterval(gensokyo4);
        button.click();
    }
}
if (/https:\/\/rule34.xxx\/.*/.test(window.location.href) == true) {
    var refreshIntervalId4 = setInterval(gensokyo4, 200);
}
function gensokyo5() {
    var button = document.querySelectorAll('[onclick="tnc_agree();"]')[0];
    if (button != null) {
        clearInterval(gensokyo5);
        button.click();
    }
}
if (/https:\/\/rule34.paheal.net\/.*/.test(window.location.href) == true) {
    var refreshIntervalId5 = setInterval(gensokyo5, 200);
}
function gensokyo6() {
    var button = document.querySelectorAll('[onclick="declineAnalytics();"]')[0];
    if (button != null) {
        clearInterval(gensokyo6);
        button.click();
    }
}
if (/https:\/\/xbooru.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId6 = setInterval(gensokyo6, 200);
}
function gensokyo7() {
    var button = document.querySelectorAll('div[data-tracking-opt-in-accept="true"]');
    button[0].click();
    if (button != null) {
        clearInterval(gensokyo7);
        button.click();
    }
}
if (/https:\/\/[a-z]{1,63}.fandom.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId7 = setInterval(gensokyo7, 200);
}
function gensokyo8() {
    var button = document.querySelectorAll('[data-testid="reject-button"]');
    button[0].click();
    if (button != null) {
        clearInterval(gensokyo8);
        button.click();
    }
}
if (/https:\/\/www.imdb.com\/.*/.test(window.location.href) == true) {
    var refreshIntervalId8 = setInterval(gensokyo8, 200);
}
function gensokyo9() {
    var button = document.getElementsByClassName('cookie-permission--accept-button btn is--primary is--large is--center');
    button[0].click();
    if (button != null) {
        clearInterval(gensokyo9);
        button.click();
    }
}
if (/https:\/\/www.berrybase.de\/.*/.test(window.location.href) == true) {
    var refreshIntervalId9 = setInterval(gensokyo9, 200);
}
function gensokyo10() {
    var button = document.getElementsByClassName('cc-btn cc-dismiss');
    button[0].click();
    if (button != null) {
        clearInterval(gensokyo10);
        button.click();
    }
}
if (/https:\/\/clonezilla.org\/.*/.test(window.location.href) == true) {
    var refreshIntervalId10 = setInterval(gensokyo10, 200);
}
