// ==UserScript==
// @name         # YouTube Yellow Subtitles 120% size, 50% backdrop, outlined
// @namespace    spsYouTubeYellowSubtitles
// @description  These are just yellow subs with less backdrop and an outline
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo4() {
    //10 seconds before playtime
    var currTime = Date.now() - 10000
    //30 days valid
    var futureTime = currTime + 2592000000
    localStorage.clear('yt-player-caption-display-settings');
    localStorage.setItem('yt-player-caption-display-settings', '{"data":"{\\"color\\":\\"#ff0\\",\\"fontSizeIncrement\\":0.2,\\"fontFamily\\":4,\\"backgroundOpacity\\":0.5,\\"charEdgeStyle\\":3}","expiration":' + futureTime + ',"creation":' + currTime + '}');
    //var readSettings = localStorage.getItem('yt-player-caption-display-settings');
}
//var refreshIntervalId4 = setInterval(gensokyo4, 1000);
gensokyo4();
