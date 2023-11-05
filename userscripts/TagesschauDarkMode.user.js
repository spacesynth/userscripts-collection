// ==UserScript==
// @name         # Tagesschau DarkMode
// @namespace    spsTagesschauDarkMode
// @description  Darkmode for strange news site
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://www.tagesschau.de/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function cookieMaker() {
    if (document.cookie.includes('darkmode_content=show') == false){
    var a = "optOutTracking_content=show;fussball_content=hide;twitter_content=show;youtube_content=show;facebook_content=show;instagram_content=show;messengerpeople_content=show;darkmode_content=show";
    var b = a.split(";");
        for(var c=0; c<b.length; c++){
            document.cookie = b[c]+"; path=/";
        }
        location.reload();
        console.log("this only runs once per session");
    }
}
cookieMaker();
