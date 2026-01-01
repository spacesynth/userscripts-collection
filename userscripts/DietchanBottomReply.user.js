// ==UserScript==
// @name         # Dietchan Bottom Reply
// @namespace    spsDietchanBottomReply
// @description  Reply box at the bottom
// @version      1.0.1
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      /^https?://dietchan.org/(c|meta|fefe)/[0-9]{1,8}$/
// @include      /^https?://dietchankez4ypnhpw2m2b27wdtsxw6jjckdizupysxntjslijbxubad.onion/(c|meta|fefe)/[0-9]{1,8}$/
// @run-at       document-end
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        GM_addStyle
// @noframes
// ==/UserScript==

'use strict';
$("body").append (`<form class='reply' action='/post' method='post' enctype='multipart/form-data' novalidate autocomplete='on'>
<table><tr><th colspan='3'><h3>Antwort erstellen</h3></th></tr><tr><th><label for='sage'>Säge</label>
</th><td colspan='2'><input type='checkbox' name='sage' value='1'></td></tr><tr><th>
<label for='subject'>Betreff</label></th><td><input name='subject' type='text'></td><td width='1'>
<input type='submit' value='Antwort erstellen'></td></tr><tr><th><label for='username2'>Name</label>
</th><td colspan='2'><input name='username2' type='text' autocomplete='nein'></td></tr><tr><th>
<label for='text2'>Kommentar</label></th><td colspan='2'><textarea name='text2'></textarea></td></tr>
<tr><th title='Max. 10.0MB pro Datei'><label for='text'>Dateien</label><span class='sub-label'> (≤ 4)</span>
</th><td colspan='2'><input type='file' name='file' multiple required title='Max. 10.0MB pro Datei'>
<br><input type='file' name='file' multiple required><br><input type='file' name='file' multiple required>
<br><input type='file' name='file' multiple required><br></td></tr><tr><th><label for='password'>Passwort</label>
</th><td colspan='2'>
<input type='text' name='dummy' autocomplete='username' value='-' size='1' maxlength='1' tabindex='-1' style='width: 0; height:0; padding: 0; margin:0; position:absolute; left: -10000px; '>
<input type='password' name='password' autocomplete='password'></td></tr></table>
<input name='thread' id='duplicatebox' value='' type='hidden'></form>`);

(function() {
var box1 = document.querySelectorAll('input[name="thread"]')[0];
var box2 = document.querySelectorAll('input[id="duplicatebox"]')[0];
box2.value = box1.value;
})();
