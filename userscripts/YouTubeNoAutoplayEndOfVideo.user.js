// ==UserScript==
// @name         # YouTube No Autoplay (End of Video)
// @namespace    spsYouTubeNoAutoplayEndOfVideo
// @description  Check if the autoplay crap sneaked back in
// @version      1.0.1
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @license      WTFPL
// @match        *://*.youtube.com/watch*
// @run-at       document-idle
// @noframes
// ==/UserScript==

'use strict';
var refreshIntervalId4;
function force_reject_all() {
    var element1 = document.querySelector('button[class^="ytp-autonav-endscreen-upnext-button"]');
    if ($(element1).is(':visible') == true) {
        setTimeout(function(){
        element1 && element1.click();
        }, 1000);
    }
    return true;
}
waitForKeyElements('button[class^="ytp-autonav-endscreen-upnext-button"]', refreshIntervalId4 = setInterval(force_reject_all, 1000));
