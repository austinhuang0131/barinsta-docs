## Basics

### Device Compatibility

Generally, this app is tested on an Android 9 hardware and an Android 10 emulator. Although most design components use `androidx.appcompat` which should improve compatibility, certain Java methods may be supported differently among versions. [Compatibility issues](https://github.com/austinhuang0131/barinsta/issues?q=is%3Aissue+label%3Acompatibility) will be attempted to be fixed as they're being reported, but without guarantee.

### F-Droid

For publishing a release on F-Droid, it goes through three processes, all of which can be monitored, but none of which are within my control.

1. Pick up new versions: This happens everyday at 4am UTC and can be monitored through [commit history of our metadata file on F-Droid's GitLab](https://gitlab.com/fdroid/fdroiddata/-/commits/master/metadata/me.austinhuang.instagrabber.yml).
2. Build new versions: This happens at an average interval of 1.66 days and can be monitored through [edit history of our build information on F-Droid's wiki](https://f-droid.org/wiki/index.php?title=me.austinhuang.instagrabber/lastbuild&action=history).
3. Push to public: Its interval generally syncs to step 2, but there are occasional outliers. This can be monitored through [reddit r/FDroidUpdates](https://www.reddit.com/r/FDroidUpdates/) as well as [F-Droid's official chatrooms](https://f-droid.org/en/about/#contact), though with 1 day delay (therefore it is faster to just check F-Droid listing).

### I can't see anything (And I did not log in)!

Check your internet connection, and disable VPN/proxies (as they are not allowed on Instagram).

**For Iranian users:** It seems like Instagram does not allow viewing anonymously (sanction?), however I have received reports (unconfirmed) saying using Israeli VPNs will bypass the restriction.

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

If you still want to view them without login, there is a setting for that, and it needs to be enabled. You can select a provider that works for you...

### I still can't view stories without login!

...which is why I said "a provider that *works* for you".

The feature to see public stories anonymously has been brought up many times. Fortunately, we support third-party story readers (at our discretion). Sadly, they are subject to strict limits.

Since Instagram absolutely requires an account to view any stories, it is impossible to view stories anonymously using official methods. Third-party providers use a bot account to access them, which means they are subject to ratelimits designed for only 1 person. Obviously, these providers don't have only 1 user, so it is evident that the limit will be quickly consumed.

Certain providers implement captcha in an effort to stop overuse. Others don't, so Barinsta gives you the option to use some of them (i.e. those that are convenient for me to implement scrapers). Still, even though you have the option, you should use them *responsibly* and not overload them. Remember: The limit is still there!

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