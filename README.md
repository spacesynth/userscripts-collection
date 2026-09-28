# userscripts-collection
A collection of custom free and public userscripts.  

### Enhance reliability of Youtube No Autoplay script
Please try if this userscript disables autoplay even after page navigation:  
https://greasyfork.org/en/scripts/549444-youtube-no-autoplay  

### Removal of Old Reddit script
Working altternative:  
https://greasyfork.org/en/scripts/569062-default-to-force-old-reddit-on-www-reddit-com  

### Removal of small thumbnail script
Please use this user script for small thumbnails:  
https://greasyfork.org/en/scripts/405614-youtube-polymer-engine-fixes  

### Removal of various other dark mode scripts:
![alt text[]()](https://github.com/spacesynth/userscripts-collection/blob/master/utility/uBO_settings.png?raw=true)  
Simplified via uBO rules if the above setting was enabled these work:
```
youtube.com##+js(trusted-set-cookie-reload, PREF, tz=America.New_York&f5=30000&f6=400&gl=US&f7=100, , /, domain, youtube.com, reload, 1)
```
```
arstechnica.com##+js(trusted-set-cookie-reload, view, list, , /, domain, arstechnica.com, reload, 1)
arstechnica.com##+js(trusted-set-cookie-reload, theme, dark, , /, domain, arstechnica.com, reload, 1)
arstechnica.com##+js(trusted-set-cookie-reload, fw_view, off, , /, domain, arstechnica.com, reload, 1)
```
```
imgur.com##+js(trusted-set-cookie-reload, frontpagebetav2, 0, , /, domain, imgur.com, reload, 1)
```

```
x.com##+js(trusted-set-cookie-reload, night_mode, 1, , /, domain, x.com, reload, 1)
```

Requires:  
https://userstyles.world/style/26534/twitter-dark-to-dim  

### Removal of youtube anti word-by-word userscript
They broke it and I found this addon here replacing it really well:  
https://addons.mozilla.org/en-US/firefox/addon/ketuvia-accessible-captions/  
  
## License
Licensed under the WTFPL license.
