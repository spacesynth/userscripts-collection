// ==UserScript==
// @name         # Google Links Open in new tab
// @namespace    spsGoogleLinksOpenInNewTab
// @description  Needed for Temporary Container exclusion
// @version      1.0.0
// @author       spacesynth
// @match        https://www.google.com/*
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-end
// @noframes
// ==/UserScript==

$(document).ready(function() {
    var i;
    var a = document.querySelectorAll('a[href^="/goto"]');
    for (i=0;i<a.length;i++) {
        a[i].target="_blank"
    }
});
