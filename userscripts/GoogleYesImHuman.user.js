// ==UserScript==
// @name         # Google Yes I'm Human
// @namespace    spsGoogleYesImHuman
// @description  Fix for issues with Temporary Containers
// @version      1.0.1
// @author       spacesynth
// @match        https://www.google.com/?hl=en&nfpr=1&safe=off
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @grant        GM_addStyle
// @run-at       document-end
// @noframes
// ==/UserScript==

/* This needs a custom search engine defined
it needs needs my other scripts installed for bypass cookie
when the cookie is set it will read from anchor and hit send */

(function() {
    'use strict';
    if (window.location.hash.substr(1).length != 0) {
        var my_query = decodeURI(window.location.hash.substr(1)).replace("+", " ");
        document.getElementsByTagName("textarea")[0].value = my_query;
        setTimeout(function() {
            document.querySelectorAll('input[aria-label="Google Search"]')[1].click();
        }, 1000);
    }
})();
