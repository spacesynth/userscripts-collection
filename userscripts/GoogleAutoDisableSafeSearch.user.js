// ==UserScript==
// @name         # Google Auto Disable SafeSearch
// @namespace    spsGoogleAutoDisableSafeSearch
// @description  Screw Safe Search
// @version      1.0.6
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://*.google.tld/search?*
// @exclude      *://developers.google.tld/search*
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
