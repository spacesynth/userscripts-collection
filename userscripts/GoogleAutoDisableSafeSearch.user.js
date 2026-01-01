// ==UserScript==
// @name         # Google Auto Disable SafeSearch
// @namespace    spsGoogleAutoDisableSafeSearch
// @description  Screw Safe Search
// @version      1.0.5
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
if (url.indexOf("safe=off") == -1) {
    url = url + "&safe=off";
    window.location = url;
}
