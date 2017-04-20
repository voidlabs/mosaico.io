---
layout: post
title:  "Double Head trick in Yahoo Mail App for Android"
date:   2017-04-20 17:57:21
categories: email-client-tricks
---

### Do you style in the head or in the body?

If you want high compatibility you probably **inline your main styles**, otherwise Libero.it, Mail.ru, Naver, Telstra, T-Online, Terra, Yandex and many other won't style anything.

But, you may also have **other styles** that are not inlined and you want them to be displayed by smart email clients.

**In past** the best solution was to put the **style declaration inside the body**, but you know that **since Oct 2016 [Gmail introduced partial styles support](https://emails.hteumeuleu.com/troubleshooting-gmails-responsive-design-support-ad124178bf81)** and they only use them **if they are declared in the HEAD**.

### So, the "new" rule is to put them in the HEAD.

Then you find out that **Yahoo App for Android doesn't show your styles anymore** because it will simply **strip any style from the HEAD** (why? who knows.)
You won't find many informations about Yahoo App rendering, the only reference I found is [here](http://freshinbox.com/blog/yahoo-mail-fixes-media-query-bug-yahoo/):

FreshInbox(*) in that article documented that **Yahoo Mail App for Android supports only styles declared in the BODY**.

So, what to do? Insert the whole style declaration twice? Drop support for Yahoo Mail App for Android?

### Now, here is a little trick

...enabling styles for Yahoo Mail App for Android and Gmail **without the need to duplicate them** (and doesn't break other clients, AFAIK).

Simply use a **"double head"**, by addin an empty <head></head> before your real <head>. Yahoo App for Android will strip that first head and leave your second head in place.

From our tests, both manual and via [Email On Acid](https://www.emailonacid.com/app/acidtest/display/summary/XXx90sBT39lxfyOiuLklevpce3VhmBA7yIlDIDhtunRUz/shared), this works everywhere.

I tried adding styles to both "heads" and clients supporting non-inline styles will see both of them, but GMX.de and Web.de (and of course Yahoo App for Android) that will only see the second HEAD styles (the ones we care).

```html
<html>
  <head><!-- Yahoo App Android will strip this --></head>
  <head>
    <meta ... >
    <style>
      your styles
    </style>
  </head>
  <body>
    your content
  </body>
</html>
```

*Disclaimer*: using 2 head tags makes your HTML "malformed". Do you care? Also using the style tag in the body was invalid.

** (\*) Remember**: the best single page resource for updated email rendering issues in 2017 is **[FreshInbox](http://freshinbox.com/resources/css.php)**. Most of other pages around are simply outdated and keeps telling you to use uppercase Margin or [class] selectors. Don't be confused by the "kinetic" titles, *it is a great resource even if you don't care about kinetic emails*.
