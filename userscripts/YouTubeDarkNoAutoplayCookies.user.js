// ==UserScript==
// @name         # YouTube Dark + No Autoplay (Cookies)
// @namespace    spsYouTubeDarkNoAutoplayCookies
// @description  Dark theme with no autoplay
// @version      1.4.1
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        GM_cookie
// @grant        GM.cookie
// @noframes
// ==/UserScript==
/*
ONLY USE THIS WITH
Tampermonkey BETA 5.0.6189 or higher
https://firefox.tampermonkey.net/firefox-current-beta.xpi
signed XPI file
*/
(function() {
'use strict';
if (/.*PREF.*/.test(document.cookie)===false){
if (/.*PREF=tz=Europe.Berlin&f5=30000&f6=400&gl=US&f7=100.*/.test(document.cookie)===false){
GM.cookie.delete({ name: 'PREF' })
GM_cookie.set(
    {
        domain: ".youtube.com",
        hostOnly: true,
        httpOnly: false,
        name: "PREF",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        value: "tz=Europe.Berlin&f5=30000&f6=400&gl=US&f7=100"
    }
)
location.reload();
}}
console.log('Sanae is no longer winning!')
})();
