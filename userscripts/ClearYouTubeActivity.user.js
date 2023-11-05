// ==UserScript==
// @name         # YouTube Clear Activity
// @namespace    spsClearYouTubeActivity
// @description  Stop logging my activity
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://myactivity.google.com/*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo() {
    var element1 = document.querySelectorAll("[aria-label^='Delete activity item']");
    if (element1 != undefined) {
        element1[0].click();
    }
    return true;
}
//waitForKeyElements("[aria-label^='Delete activity item']", gensokyo);
var refreshIntervalId = setInterval(gensokyo, 3000);
