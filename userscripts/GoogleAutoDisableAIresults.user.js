// ==UserScript==
// @name         # Google Auto Disable AI results
// @namespace    spsGoogleAutoDisableAIresults
// @description  Screw AI tech bro babble
// @version      1.0.2
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://*.google.tld/search?*
// @exclude      *://developers.google.tld/search*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
var url = window.location.href;
if (url.indexOf("udm=") == -1) {//don't run if other udm values are present 2, 7, 14, 18, 36, 39
    url = url + "&udm=14";
    window.location = url;
}
