* [Basics](#basics)
* [Using Barinsta anonymously](#using-barinsta-anonymously)
* [Using Barinsta with an account](#using-barinsta-with-an-account)
* [Ratelimits](#ratelimits)

## Basics

!!! Note
    Unless specifically instructed by this documentation or the developers, clearing application data/cache or reinstallations (of the same version) will not resolve issues.

* [Should I use this app?](#should-I-use-this-app)
* [Using VPN or proxies](#using-vpn-or-proxies)
* [F-Droid](#f-droid)
* [Device Compatibility](#device-compatibility)

### Should I use this app?

!!! Tip
    This app is not a mod of the existing Instagram app (therefore not dependent on "version numbers") and is intended to function as a standalone app. However, you can still use "Share to..." in the options menu of a post, then choose "Direct Download" with the Barinsta icon. This works for private posts as well, as long as you're logged into the same account on Barinsta. (But honestly, if you don't post, you should just ditch the official app.)

Intended to replace the existing Instagram client (which is bloated, proprietary, and full of tracking) as well as other Downloader apps (sketchy, aren't they?), you will find this app useful if your Instagram use mainly constitutes the following:

* Viewing posts from your favourite accounts, hashtag, or location (log-in not required)
  * Alongside following accounts, this app allows you to have a personal "favourite" list in the app, without the need to log in!
* Viewing and interacting with stories
* Interacting (like, "save", comment) with posts
* Managing followings/followers
* Send DM to existing threads, texts or images
* Downloading contents (log-in not required)

This app also has the following merits:

* Open source software under GPLv3. The [source code](https://github.com/austinhuang0131/instagrabber) tells you exactly what you're running.
* No ads. No sketchy stuff.
* More privacy friendly. Specifically: No background processes without consent, no tracking scrolls, etc.
  * Option to view stories and DM anonymously (i.e. not sending "seen").

However, currently (but planned for the future), you cannot use this app to:

* Create group DM threads
* Create posts and stories

### Using VPN or proxies

!!! Danger
    Instagram is known to block IPs that are detected to be VPS/cloud providers or proxies. (There are certain exceptions - We're not Instagram and we don't know what they are)

    Therefore, **you're advised against using Barinsta with VPNs or proxies.** (This does not include local VPN interfaces that does not connect to an external server.)

    **Do NOT attempt to log in on banned IPs.** Your account will be either locked until you provide a phone number, or banned with no recourse.

Instagram believes that blocking IPs will stop spambots, but we all know they're just hungry for tracking. Remember that Barinsta can only do *so much* to protect your privacy (which already improves the condition for many Instagram users, but might not be to the satisfaction of privacy advocates), and if you want more, you do have to avoid every single Facebook-owned platform, which is incredibly difficult for many (especially for the author, who is in North America, and cutting them will risk losing contacts).

Bibliogram, on the other hand, actually allows you to access Instagram contents (public profiles only) without connecting to Facebook. However, Instagram is working hard to render it unusable, so unfortunately, [it will probably stop working soon](https://lists.sr.ht/~cadence/bibliogram-announce/%3C20201218014302.855fa8a816be2f19da2f56e3%40disroot.org%3E).

### F-Droid

!!! Warning
    Any alpha versions (The ones suffixed with -a1, -a2...) will not be published on F-Droid. They will be available through GitHub releases only.

For publishing a release on F-Droid, it goes through three processes, all of which can be monitored, but none of which are within my control.

1. Pick up new versions: This happens everyday and can be monitored through [commit history of our metadata file on F-Droid's GitLab](https://gitlab.com/fdroid/fdroiddata/-/commits/master/metadata/me.austinhuang.instagrabber.yml).
2. Build new versions: This happens every 1~5 days and can be monitored through [edit history of our build information on F-Droid's wiki](https://f-droid.org/wiki/index.php?title=me.austinhuang.instagrabber/lastbuild&action=history).
3. Deploy: This happens 12~72 hours after build finishes for all updated apps, but there are occasional outliers. This can be monitored through [edit history of the page "deploy" on F-Droid's wiki](https://f-droid.org/wiki/index.php?title=deploy&action=history), [reddit r/FDroidUpdates](https://www.reddit.com/r/FDroidUpdates/), as well as [F-Droid's official chatrooms](https://f-droid.org/en/about/#contact).

People who use F-Droid clients will be able to update at Step 3, however it will not reflect on the F-Droid website until another day after.

### Device Compatibility

!!! Warning
    You will not be able to log into the app if your device does not have a WebView client.
    
    Most phones (stock Android) use either Google Chrome or the official [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) by default. If you somehow don't have one, install the official one, or use [Bromite's WebView](https://github.com/bromite/bromite/wiki/Installing-SystemWebView).

If you use a different ROM/OS that is compatible with Android, please refer to respective documentations regarding which Android version it is compatible with.

* **Android 4.4 or earlier (Before API 20):** Not supported.
* **Android 5.0 or later (After API 21):** Supported.

Generally, this app is tested on an Android 9 hardware and an Android 10 emulator. Although most design components use `androidx.appcompat` which should improve compatibility, certain Java methods may be supported differently among versions, so if that happens, please report them.

## Using Barinsta anonymously

Only these contents can be viewed without login:

* Public profile\*, hashtag, and location pages
* Post details (media, caption, like count), comments\*\*, comment likes\*\*

\* Including face-tagged posts, but excluding HD avatar and followers/followings.

\*\* Although possible to view in this app, you should avoid it due to a much stricter ratelimit.

### The app was working but now it doesn't show anything!

You might have hit the [ratelimit](#ratelimits). Wait a few hours before opening the app again.

To know if you're banned or not, try visiting a public profile page on browser. If you're prompted to log in immediately without showing the account's posts, you currently have a temporary IP ban.

### Can we have an anonymous feed?

It is still being debated upon. However, such feature, if implemented, will carry heavy restrictions.

### Can we see stories?

!!! Tip
    Please note that logging in doesn't mean the authors know you have seen it. This is controlled by a separate setting, visible when logged in.

Viewing stories absolutely requires an account, and online story viewers either...

* Have their own accounts (which can be banned by Instagram), or
* Ask for your login cookies (which defeats its purpose), or
* Generate URLs, ask you to click them when logged in, and return the body (which also defeats its purpose)

Since [the death of storiesig](https://twitter.com/jlobitu/status/1305929897169346560), anonymous story viewers that uses the first method became increasingly unreliable, therefore it is effectively impossible to view them without logging in.

## Using Barinsta with an account

* [Is my password safe?](#is-my-password-safe)
* [Is my account safe?](#is-my-account-safe)
* ["Suspicious login"](#suspicious-login)
* [I can't load anything after login!](#i-cant-load-anything-after-login)
* [Can I have the feed rearranged on every refresh?](#can-i-have-the-feed-rearranged-on-every-refresh)
* [Comparing followers and followings](#comparing-followers-and-followings)

### Is my password safe?

Yes. Only your login cookie is stored in the app, which you can either remove in the app's account selector (long press), or revoke in your Instagram login activity settings. See [here](https://github.com/austinhuang0131/barinsta/blob/master/app/src/main/java/awais/instagrabber/activities/Login.java) for how the app handles login. TLDR: We do not store your password.

### Is my account safe?

!!! Warning
    At this point, you should just assume that **a real phone number is required to use Instagram**. If you're prompted to add a phone number due to suspicious activity, there are only two ways to go: Either give out your (or someone else's) real phone number, or drop the account.
    
    **Do not try to unlock your account using a burner/shared number.** Unlike other platforms, Instagram will *not* reject suspicious phone numbers right away, but they do know it and will ban your account if you attempt to bypass their checks. Unfortunately, as written above, if you want absolute privacy, you must avoid *any* Facebook-owned platforms.

!!! Note
    Remember that the rules require you to [disclose any bans](../tos#disclosure-of-banned-accounts) that may be due to the usage of Barinsta.

    Also, informing yourself with [ban reports](https://github.com/austinhuang0131/barinsta/issues?q=is%3Aissue+label%3A%22BAN+REPORT%22) could help in preventing another ban.

We cannot guarantee that your account won't be banned, but the chances are very low. See [here](https://github.com/austinhuang0131/barinsta/issues?q=is%3Aissue+label%3A%22BAN+REPORT%22) for a list of all public ban reports.

To boil it down, you need to prove that you're human to Zucc's satisfaction (but he's a robot himself, how does he know we're human???), otherwise you'll be banned. Specifically...

* You need to follow [rules](../tos#rules).
* Unlike YouTube which offers you a reCaptcha to prove you're human (which are bypassable as long as you pay, see Invidious), Instagram straight up asks for your phone number. You must provide a real one.
* If your account has relatively fewer data on it: Try producing "organic" engagements. Check out Discover occasionally and engage with some random posts.
* Do not engage on posts *right after* them being posted. I am told that Instagram will lock your account for "automatically liking posts" or "phishing".

### "Suspicious login"

Logging in from Barinsta can be blocked as "suspicious". If so, please check the time and the location of the login (These should be accurate - but not device) and confirm the login from browser.

### I can't load anything after login!

* Try logging in again by adding the same account.
* Logging in from account selector? Even though we provide some sort of multi-account login, Instagram may revoke cookies at any time. Note that your login entry will be overridden with the new cookie once you have fixed it, as long as the user ID stays the same.
* Do you need to [confirm a login](https://github.com/austinhuang0131/barinsta/issues/73)?

### Can I have the feed rearranged on every refresh?

That would require the app to tell Instagram what posts you saw (which I am against, but popular demand might push me into implementing it as an option). Also, this measure prevents you from constantly refreshing the feed for new posts, which helps wellbeing. (On a side note, seriously, just don't follow thousands of accounts on Instagram. You're just gonna intentionally get yourself addicted.)

### Comparing followers and followings

Generally speaking, the feature works best if the sum of follower and following count (including duplicates) is under 1000. Going upward, the app will take significantly more time to compare them (since the user lists are paginated), but it should still work (The dev has tested ~5000).

!!! Warning
    If the sum is huge (like 10k+), not only will it slow down the app, it could also possibly lead to an account ban ("scrapeing"). Do so at your own risk.

## Ratelimits

Instagram has strict ratelimits.

Anonymous users have a per-IP ratelimit. It is set low to prevent botting and encourage sign-ups.

Logged-in users have a per-account ratelimit which varies by "reputation", ie. those with more "meaningful" content are less likely to be hit with such restrictions.

Please note that downloads don't contribute to ratelimit.

### When can I access Instagram normally again?

Varies by circumstance. In fact, restrictions can be permanent or even already in place before using Barinsta.

Reinstalling the app will not solve the issue (although, if you are using an older version, then you should update anyway).

### Can I just use browser then?

No, since they use the same ratelimit. You'll be asked to log in.

### Can I use Bibliogram then?

Theoretically, yes. However, public Bibliogram instances are already quite strained, [as they also get ratelimits](https://proxy.vulpes.one/gemini/cadence.moe/gemlog/2020-12-17-future-of-bibliogram.bliz).

### What is the ratelimit?

Nobody knows exactly what the limit is, though there are guesses. At this point, you should just assume that Instagram gives you "allowances" based on your behaviour...

* Anonymous users: Bibliogram [says](https://git.sr.ht/~cadence/bibliogram-docs/tree/master/item/docs/Instagram%20rate%20limits.md) 200 requests per 11 min per GraphQL endpoint, but users reported experiencing much lower limits. Some also say residential IP has different limits?
* Logged-in users: Refer to [this article](https://elfsight.com/blog/2016/12/instagram-restrictions-limits-likes-followers-comments/).

---

Feel free to [contribute to this FAQ](https://github.com/austinhuang0131/barinsta-docs/blob/master/docs/faq.md)!
