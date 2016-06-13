---
layout: post
title:  Yahoo Webmail add overflow-y/x on use of max-height/width 
date:   2016-06-13 07:00:00
categories: email-client-tricks
draft: true
---

Every single webmail system has its way to handle email rendering: to avoid **security issues** and to prevent **css inconsistent transformation of the whole interface**, webmail systems cut and transform many css instructions.
One of the most strict is **Gmail**: no style, no mediaquery, and many css properties being deleted.

**Yahoo** works in a similar way, too, but recently they changed something and [@nicolemerlin](https://twitter.com/moonstrips/status/738641345259016192) tweeted:

> Yahoo! Mail seems to be adding overflow-x:auto to long divs,
> resulting in scrollbars + content squishing/stacking

It turned out that if you use **max-width and max-height** inline properties, then Yahoo will add an odd **"overflow-x: auto" and/or "overflow-y:auto"**. The use of max-width and max-height properties, otherways, is common, if you consider that Yahoo will transform any **"width" and "height"** properties in **"min-width" and "min-height"**.

The reason the overflow properties is added is not clear, yet: maybe it could be to prevent hiding some content from the message.
<!--more-->

Trying to understand the way this transformation is done, we found that Yahoo has a **two step css and html purging**, one server side and one **client side (javascript)**.

We could assume that the **main html/css purification is done server side**, stripping style tag content, deleting script tags and other potentially vicious code, normalizing inline code - for example stripping all the spaces between semicolon and css property value.

The last transformations - the ones involving width and height for instance - are done by a little piece of javascript code, with some really simple regular expressions:

```javascript
replace(/position\s*?:\s*?(fixed|absolute)/ig, ""),
replace(/([^a-z-])height\s*:|^height\s*:/gi, "$1min-height:"),
replace(/max-height/gi, "overflow-y:auto;max-height"),
replace(/max-width/gi, "overflow-x:auto;max-width"),
replace(/white-space\s*?:\s*?pre\s*?;|white-space\s*?:\s*?pre\s*?$/gi, "white-space:pre-wrap;"),
replace(/display:none/gi, "")
```

If you know regular expressions, it will be easy to understand how to override the yahoo "overflow": if you add in your inline style code, just **after max-width and max-height**, an **overflow property**, this one will be kept, and it will **override the Yahoo property addition**.
Take care **not to add overflow-x or y**, because the server side "cleaning" will strip them off.

Unfortunately, this trick will **not work on Internet Explorer**: the way IE handle replacing CSS values via javascript is different and IE will transform overflow-x and overflow-y in **-ms-overflow-x and -ms-overflow-y** and will also rearrange the property order. So, in IE, the same "replace" will result in a different result, and the previous workaround/trick won't work.

Althought we cannot imagine the reason behind this strange css transformations made by Yahoo webmail, this is just another proof of how difficoult it is to mantain a reliable rendering of html email templates.

Creating a good email template is hard, mantaining it is even harder.

References:
[Litmus Discussion](https://litmus.com/community/discussions/5336-yahoo-mail-update-potentially-breaks-hybrid-emails)
[@hteumeuleu github issue](https://github.com/hteumeuleu/email-bugs/issues/17)
[Twitter Discussion](https://twitter.com/moonstrips/status/738641345259016192)
