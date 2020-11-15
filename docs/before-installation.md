!!! Note
    This app is not a mod of the existing Instagram app (therefore not dependent on "version numbers") and is intended to function as a standalone app. However, you can still use "Share to..." in the options menu of a post, then choose "Direct Download" with the Barinsta icon. This works for private posts as well, as long as you're logged into the same account on Barinsta.
    
## Should I use this app?

Intended to replace the existing Instagram client (which is bloated, proprietary, and full of tracking) as well as other Downloader apps (sketchy, aren't they?), you will find this app useful if your Instagram use mainly constitutes the following:

* Viewing posts from your favourite accounts, hashtag, or location (log-in not required)
  * Alongside following accounts, this app allows you to have a personal "favourite" list in the app, without the need to log in!
* Viewing and interacting stories
* Interacting (like, "save", comment) on posts
* Managing followings/followers
* Send DM to existing threads, texts or images
* Downloading contents (log-in not required)

This app also has the following merits:

* Open source software under GPLv3. The [source code](https://github.com/austinhuang0131/instagrabber) tells you exactly what you're running.
* No ads. No sketchy stuff.
* Lightweight (≈10 MB APK vs. 30+ MB APK for the official client & its mods)!
* More privacy friendly. Specifically: No background processes without consent, no tracking scrolls, etc.
  * View stories anonymously (i.e. not leaving "seen").

However, you cannot use this app to:

* Create group DM threads
* Create posts and stories

## Does this app steal my password?

No. Only your login cookie is stored in the app, which you can revoke in your login activity settings. See [here](https://github.com/austinhuang0131/barinsta/blob/master/app/src/main/java/awais/instagrabber/activities/Login.java) for how the app handles login. We do not store your password.

## The Backstory, for your own interest only

Barinsta's discontinued predecessor, [InstaGrabber](https://gitlab.com/AwaisKing/instagrabber), was originally made by AWAiS.

Before the takeover, the main purpose of this app was to download content. However, as the ownership changes, the goal became "to build a FOSS Instagram client", which is why the added features are mostly interactive rather than just viewing.
