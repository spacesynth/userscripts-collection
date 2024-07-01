// ==UserScript==
// @name         # Manual Cookie Blocker
// @namespace    spsManualCookieBlocker
// @description  Lot's of sites missing in Firefox's native blocker and I still don't care about cookies
// @version      1.0.3
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
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
var myRuns = 0;
function clicker(myStr) {
    myRuns++;
    console.log("Cookie clicker active:", myRuns)
    var button = document.querySelectorAll(myStr);
    if (typeof button[0] !== 'undefined') {
        button[0].click();
    }
    if (myRuns < 4) {
        setTimeout(() => {
            clicker(myStr);
        }, 400);
    }
}
if (/https:\/\/www\.amazon\.[a-z]{2,3}\/.*/.test(window.location.href) == true) {
    clicker('button[id="sp-cc-rejectall-link"]');
}
if (/https:\/\/hackaday\.com\/.*/.test(window.location.href) == true) {
    clicker('button[class="accept cookie-notifications-btn"]');
}
if (/https:\/\/www\.edeka\.de\/.*/.test(window.location.href) == true) {
    clicker('button[id="popin_tc_privacy_button_2"]');
}
if (/https:\/\/rule34\.xxx\/.*/.test(window.location.href) == true) {
    clicker('a[onclick="declineAnalytics();"]');
}
if (/https:\/\/rule34\.paheal\.net\/.*/.test(window.location.href) == true) {
    clicker('a[onclick="tnc_agree();"]');
}
if (/https:\/\/xbooru\.com\/.*/.test(window.location.href) == true) {
    clicker('a[onclick="declineAnalytics();"]');
}
if (/https:\/\/.*\.fandom\.com\/.*/.test(window.location.href) == true) {
    clicker('div[data-tracking-opt-in-accept="true"]');
}
if (/https:\/\/www\.imdb\.com\/.*/.test(window.location.href) == true) {
    clicker('button[data-testid="reject-button"]');
}
if (/https:\/\/www\.berrybase\.de\/.*/.test(window.location.href) == true) {
    clicker('a[class="cookie-permission--accept-button btn is--primary is--large is--center"]');
}
if (/https:\/\/clonezilla\.org\/.*/.test(window.location.href) == true) {
    clicker('a[class="cc-btn cc-dismiss"]');
}
