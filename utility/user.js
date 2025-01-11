// Cleaning
user_pref("privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs2", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.siteSettings", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Less risk of memory leaks
user_pref("accessibility.force_disabled", 1);

// Privacy
user_pref("browser.sessionstore.resume_from_crash", false);

// Close cookie banners
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

// UI
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

// UX
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.urlbar.trimURLs", false);

// Data sharing opt-out
user_pref("dom.private-attribution.submission.enabled", false);

// Spying
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.discovery.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

// Do not launch with windows
user_pref("browser.startup.windowsLaunchOnLogin.enabled", false);
user_pref("browser.startup.windowsLaunchOnLogin.disableLaunchOnLoginPrompt", true);
