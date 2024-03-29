// ==UserScript==
// @name         # Twitter Unhider
// @namespace    spsTwitterUnhider
// @description  Unhide adult Twitter posts
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://twitter.com/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function shikigami(selector) {
    return Array.from(document.querySelectorAll('[role="button"]')).find(el => el.textContent === selector);
}

function shikigamiRegExp(selector) {
    return Array.from(document.querySelectorAll('[role="button"]')).find(el => el.textContent.match(selector));
}

function yukari() {

    var ran = shikigami('View');
    var fox = shikigami('Show'); //offensive content test
    var chen = shikigami('Yes, view profile');
    var kitsune = shikigamiRegExp(/[1-2] more repl/); //control reply amount
    var nekomata = shikigami('Show more replies');
    var youkai = shikigami('Show replies');

    if (typeof ran !== 'undefined') {
        ran.click();
    }
    if (typeof fox !== 'undefined') {
        fox.click();
    } //offensive content test
    if (typeof chen !== 'undefined') {
        chen.click();
    }
    if (typeof kitsune !== 'undefined') {
        kitsune.click();
    }
    if (typeof nekomata !== 'undefined') {
        nekomata.click();
    }
    if (typeof youkai !== 'undefined') {
        youkai.click();
    }
}
var refreshIntervalId = setInterval(yukari, 400);
