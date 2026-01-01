// ==UserScript==
// @name         # Twitter Classic Darkmode (Dim Not Black)
// @namespace    spsTwitterClassicDarkmodeDimNotBlack
// @description  Give me back that navy blue dark, Elon
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.x.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict'
if (document.cookie.includes('night_mode=1') == false) {
    document.cookie = 'night_mode=1; path=/; secure; domain=.x.com';
}
