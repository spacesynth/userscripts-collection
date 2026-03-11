# userscripts-collection
A collection of custom free and public userscripts.  

### Removal of Youtube No Autoplay script
Please use this user script for disabling autoplay that survives page navigation:  
https://greasyfork.org/en/scripts/549444-youtube-no-autoplay  

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
computerbase.de##+js(trusted-set-cookie-reload, xf_style_variation, alternate, , /, domain, computerbase.de, reload, 1)
computerbase.de##+js(trusted-set-cookie-reload, no-fixed-header, 1, , /, domain, computerbase.de, reload, 1)
computerbase.de##+js(trusted-set-cookie-reload, consent-v2, 0, , /, domain, computerbase.de, reload, 1)
computerbase.de##+js(trusted-set-cookie-reload, desktop-layout, 1, , /, domain, computerbase.de, reload, 1)
computerbase.de##+js(trusted-set-cookie-reload, home-layout, 2, , /, domain, computerbase.de, reload, 1)
computerbase.de##+js(trusted-set-cookie-reload, embed-consent, 2, , /, domain, computerbase.de, reload, 1)
```

```
imgur.com##+js(trusted-set-cookie-reload, frontpagebetav2, 0, , /, domain, imgur.com, reload, 1)
```

```
x.com##+js(trusted-set-cookie-reload, night_mode, 1, , /, domain, x.com, reload, 1)
```

Requires:  
https://userstyles.world/style/26534/twitter-dark-to-dim  

## License
Licensed under the WTFPL license.
