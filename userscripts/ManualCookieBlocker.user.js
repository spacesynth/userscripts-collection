// ==UserScript==
// @name         # Manual Cookie Blocker
// @namespace    spsManualCookieBlocker
// @description  Lot's of sites missing in Firefox's native blocker and I still don't care about cookies
// @version      1.1.5
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      https://www.amazon.tld/*
// @match        https://hackaday.com/*
// @match        https://hackaday.io/*
// @match        https://www.regex-escape.com/*
// @match        https://www.edeka.de/*
// @match        https://rule34.xxx/*
// @match        https://rule34.paheal.net/*
// @match        https://dynv6.com/*
// @match        https://xbooru.com/*
// @match        https://www.imdb.com/*
// @match        https://*.fandom.com/*
// @match        https://*.sparda-hessen.de/*
// @match        https://gtaweb.eu/*
// @match        https://x.com/*
// @match        https://*.bing.com/*
// @match        https://*.google.com/*
// @match        https://*.youtube.com/*
// @match        https://www.berrybase.de/*
// @match        https://www.sciencedirect.com/*
// @match        https://bugzilla.mozilla.org/*
// @match        https://clonezilla.org/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
var myRuns = 0;
function clicker(myStr) {
    myRuns++;
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
var myRunsInner = 0;
function innerClicker(myStrOuter, innerStr) {
    myRunsInner++;
    var buttonInner = Array.from(document.querySelectorAll(myStrOuter)).find(el => el.textContent === innerStr);
    if (typeof buttonInner !== 'undefined') {
        buttonInner.click();
    }
    if (myRunsInner < 4) {
        setTimeout(() => {
            innerClicker(myStrOuter, innerStr);
        }, 400);
    }
}
if (/https\:\/\/www\.amazon\.[a-z]{2,3}\/.*/.test(window.location.href) == true) {
    clicker('button[id="sp-cc-rejectall-link"]');
}
if (/https\:\/\/hackaday\.com\/.*/.test(window.location.href) == true) {
    clicker('button[class="accept cookie-notifications-btn"]');
}
if (/https\:\/\/www\.edeka\.de\/.*/.test(window.location.href) == true) {
    clicker('button[id="popin_tc_privacy_button_2"]');
}
if (/https\:\/\/rule34\.xxx\/.*/.test(window.location.href) == true) {
    clicker('button[onclick="acceptGDPR();"]');
}
if (/https\:\/\/rule34\.paheal\.net\/.*/.test(window.location.href) == true) {
    clicker('a[onclick="tnc_agree();"]');
}
if (/https\:\/\/xbooru\.com\/.*/.test(window.location.href) == true) {
    clicker('a[onclick="declineAnalytics();"]');
}
if (/https\:\/\/[a-z0-9\-]{0,255}\.?fandom\.com\/.*/.test(window.location.href) == true) {
    clicker('div[data-tracking-opt-in-accept="true"]');
}
if (/https\:\/\/www\.imdb\.com\/.*/.test(window.location.href) == true) {
    clicker('button[data-testid="reject-button"]');
}
if (/https\:\/\/www\.berrybase\.de\/.*/.test(window.location.href) == true) {
    clicker('a[class="cookie-permission--accept-button btn is--primary is--large is--center"]');
}
if (/https\:\/\/clonezilla\.org\/.*/.test(window.location.href) == true) {
    clicker('a[class="cc-btn cc-dismiss"]');
}
if (/https\:\/\/hackaday\.io\/.*/.test(window.location.href) == true) {
    clicker('button[class="cookie-banner__button-container_button j-accept-cookies"]');
}
if (/https\:\/\/www\.regex\-escape\.com\/.*/.test(window.location.href) == true) {
    clicker('button[on="tap:consent-element.reject"]');
}
if (/https\:\/\/consent\.youtube\.com\/.*/.test(window.location.href) == true) {
    clicker('button[aria-label="Reject all"]');
}
if (/https\:\/\/www\.google\.com\/.*/.test(window.location.href) == true) {
    clicker('div[class="QS5gu sy4vM"]');
    var fixCursorPos = document.querySelector('textarea[aria-label="Search"]');
    if (typeof fixCursorPos !== 'undefined') {
        fixCursorPos.focus();
    }
}
if (/https\:\/\/www\.youtube\.com\/.*/.test(window.location.href) == true) {
    clicker('button[aria-label="Reject the use of cookies and other data for the purposes described"]');
}
if (/https\:\/\/consent\.google\.com\/.*/.test(window.location.href) == true) {
    clicker('button[aria-label="Reject all"]');
}
if (/https\:\/\/www\.sparda\-hessen\.de\/.*/.test(window.location.href) == true) {
    clicker('button[id="onetrust-reject-all-handler"]');
}
if (/https\:\/\/www\.bing\.com\/.*/.test(window.location.href) == true) {
    clicker('div[id="bnp_btn_reject"]');
}
if (/https\:\/\/gtaweb\.eu\/.*/.test(window.location.href) == true) {
    innerClicker('button[class="ui-button ui-corner-all ui-widget"]', 'ACCEPT ESSENTIAL ONLY');
}
if (/https\:\/\/x\.com\/.*/.test(window.location.href) == true) {
    innerClicker('span[class^="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"]', 'Refuse non-essential cookies');
}
if (/https\:\/\/dynv6\.com\/.*/.test(window.location.href) == true) {
    clicker('button[id="d-cc--confirm"]');
}
if (/https\:\/\/www\.sciencedirect\.com\/.*/.test(window.location.href) == true) {
    clicker('button[id="onetrust-accept-btn-handler"]');
}
if (/https\:\/\/bugzilla\.mozilla\.org\/.*/.test(window.location.href) == true) {
    clicker('button[id="moz-consent-banner-button-reject"]');
}
