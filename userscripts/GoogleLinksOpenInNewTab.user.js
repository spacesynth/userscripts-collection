// ==UserScript==
// @name         # Google Links Open in new tab
// @namespace    spsGoogleLinksOpenInNewTab
// @description  Needed for Temporary Container exclusion
// @version      1.0.1
// @author       spacesynth
// @match        https://www.google.com/*
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-end
// @noframes
// ==/UserScript==

function skip_redirection_warning() {
    if (/https\:\/\/www\.google\.com\/url\?.*/.test(window.location.href) == true) {
        setTimeout(function() {
            document.querySelectorAll('a[href^="/goto"]')[0].click();
        }, 1000);
    }
}

$(document).ready(function() {
    if (/https\:\/\/www\.google\.com\/url\?.*/.test(window.location.href) == false) {
        var i;
        var a = document.querySelectorAll('a[href^="/goto"]');
        for (i = 0; i < a.length; i++) {
            a[i].target = "_blank"
        }

    }
    skip_redirection_warning();
});
