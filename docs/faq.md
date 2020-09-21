## Basics

### Device Compatibility

* **Android 4.4 or earlier:** Not supported due to [lack of TLS 1.2](https://github.com/square/okhttp#requirements), which can be a security vulnerability.
* **Android 5.0 or later:** Supported.

Generally, this app is tested on an Android 9 hardware and an Android 10 emulator. Although most design components use `androidx.appcompat` which should improve compatibility, certain Java methods may be supported differently among versions. [Compatibility issues](https://github.com/austinhuang0131/barinsta/issues?q=is%3Aissue+label%3Acompatibility) will be attempted to be fixed as they're being reported, but without guarantee.

### F-Droid

For publishing a release on F-Droid, it goes through three processes, all of which can be monitored, but none of which are within my control.

1. Pick up new versions: This happens everyday at 4am UTC and can be monitored through [commit history of our metadata file on F-Droid's GitLab](https://gitlab.com/fdroid/fdroiddata/-/commits/master/metadata/me.austinhuang.instagrabber.yml).
2. Build new versions: This happens at an average interval of 1.66 days and can be monitored through [edit history of our build information on F-Droid's wiki](https://f-droid.org/wiki/index.php?title=me.austinhuang.instagrabber/lastbuild&action=history).
3. Push to public: Its interval generally syncs to step 2, but there are occasional outliers. This can be monitored through [reddit r/FDroidUpdates](https://www.reddit.com/r/FDroidUpdates/) as well as [F-Droid's official chatrooms](https://f-droid.org/en/about/#contact), though with 1 day delay (therefore it is faster to just check F-Droid listing).

### I can't see anything (And I did not log in)!

Check your internet connection.

You're not supposesd to use VPN or proxies, as Instagram blocks *most* of them, but you can try to use them if vanilla methods don't work.

## Login-related

### Instagram treats my login as suspicious?!

Since we can't reuse cookies during login, Instagram will not recognize us as an old device, so every login will become "suspicious". Nevertheless, please check the time and the location of the login (These should be accurate).

Remember: We don't steal your login info. Well, we can't do that anyway, or F-Droid would never forgive us.

### I can't even load public profiles after login?

Try logging in again by adding the same account.

* Logging in from account selector? Even though we provide some sort of multi-account login, Instagram may revoke cookies at any time. Note that your login entry will be overridden with the new cookie once you have fixed it, as long as the user ID stays the same.
* Do you need to [confirm a login](https://github.com/austinhuang0131/barinsta/issues/73)?

## Story

### I can't view stories without login!

Please note that logging in doesn't mean the authors know you have seen it. This is controlled by a separate setting, visible when logged in.

If you still want to view them without login, there *was* a setting for that, but due to [Instagram's persecution on storiesig](https://nitter.net/jlobitu/status/1305929897169346560#m) and the compounding effect restricting almost every single captcha-less story viewers, it's probably not coming back.

## Feed

### Can I have the feed rearranged on every refresh?

That would require us to implement tracking (tell Instagram what posts you saw), which is a big no-no. Also, this measure prevents you from constantly refreshing the feed for new posts, which helps wellbeing. (On a side note, seriously, just don't follow thousands of accounts on Instagram. You're just gonna intentionally get yourself addicted.)

### Hashtag posts

Hashtag posts do not seem to be in the feed right now. It is being investigated.

### I don't wanna login! Can I have a feed for favourites?

That would require us to fetch posts from RSS providers. [Bibliogram](https://sr.ht/~cadence/bibliogram/) and [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) instances are available, but many of them are under stress as they use `/?__a=1` for posts, which:

* Limits the amount of posts they can fetch (Which are good for RSS-readers, but bad for showing a complete feed).
* Limits the amount of times they can fetch (Instagram treats it as scrapeing its homepage, see [Bibliogram's explanation](https://git.sr.ht/~cadence/bibliogram-docs/tree/master/docs/Instagram%20rate%20limits.md)).
* Only allows requesting 1 user at a time.

The first point defeats the purpose of a feed. The second and third point can be worsen if such feature is implemented. This is also part of the reason why the main bibliogram.art instance has disabled RSS, as the traffic can become too much to handle. Therefore, out of protection of these open-source services (and their users), the answer is no.
