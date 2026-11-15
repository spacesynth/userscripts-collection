// ==UserScript==
// @name         # HN filter top 20%
// @namespace    spsHNfilterTop20percent
// @description  Clicks the filter button
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://hckrnews.com/
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
var myRuns = 0;
var myStr = 'a[class="filtertop by20"]';
function clicker() {
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
clicker();
