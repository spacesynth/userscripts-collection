// ==UserScript==
// @name         # YouTube Yellow Subtitles 120% size, 50% backdrop, outlined
// @namespace    spsYouTubeYellowSubtitles
// @description  These are just yellow subs with less backdrop and an outline
// @version      1.0.1
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
    var currTime = Date.now() - 10000 //10 seconds before playtime
    var futureTime1 = currTime + 2592000000 //30 days valid
    var futureTime2 = currTime + 31536000000 //365 days valid
    var futureTime3 = currTime + 315360000000 //3650 days valid
    localStorage.clear('yt-player-drc-pref');
    localStorage.clear('yt-player-voice-boost');
    localStorage.clear('yt-player-caption-display-settings');
    localStorage.setItem('yt-player-drc-pref', '{\"data\":\"0\",\"expiration\":' + futureTime2 + ',\"creation\":' + currTime + '}');
    localStorage.setItem('yt-player-voice-boost', '{\"data\":\"1\",\"expiration\":' + futureTime3 + ',\"creation\":' + currTime + '}');
    localStorage.setItem('yt-player-caption-display-settings', '{"data":"{\\"color\\":\\"#ff0\\",\\"fontSizeIncrement\\":0.2,\\"fontFamily\\":4,\\"backgroundOpacity\\":0.5,\\"charEdgeStyle\\":3}","expiration":' + futureTime1 + ',"creation":' + currTime + '}');
    //var readSettings2 = localStorage.getItem('yt-player-drc-pref');
    //var readSettings1 = localStorage.getItem('yt-player-voice-boost');
    //var readSettings = localStorage.getItem('yt-player-caption-display-settings');
}
//var refreshIntervalId4 = setInterval(gensokyo4, 1000);
gensokyo4();
