// ==UserScript==
// @name         # Dietchan Links
// @namespace    spsDietchanLinks
// @description  Expose the URIs
// @version      1.2.2
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://dietchan.org/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
(function() {
    //rfc3986 compliant and tested against all of my 654 bookmarks
    var urlRegex = /http[s]{0,1}:\/\/(?:www\.){0,1}(?:[a-zA-Z0-9!#\$%&'\(\)\*\+,-\.\/:;=\?@\[\]_~]*)/g;
    var elements = document.querySelectorAll('div[class="text"]');
    elements.forEach(function(element) {
        element.innerHTML = element.innerHTML.replace(urlRegex, function(url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        });
    });
})();
