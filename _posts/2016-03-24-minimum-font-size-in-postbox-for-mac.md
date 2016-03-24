---
layout: post
title:  Minimum Font Size in Postbox for Mac
date:   2016-03-24 20:57:21
categories: email-client-tricks
draft: true
---

Email clients is a wide and complex world: not considering the most used ones, there's a whole bunch of "minor" clients for every device and operative system.

Every client has his bugs and glitches (and template editors like Mosaico exist to simplify all that mess), and there's no day without a new suprise.
This time we talk about Postbox for Mac, a powerful, yet not so used, client; his rendering  engine is based on Gecko, like Thunderbird.

So we do not expect much suprises from this wonderful client. 
Mhh, not so much, but we've found one behavior that's not "standard" and that potentially breaks one of the classical trick used to keep a table cell narrow as we want - with a background color.

We're talking of
```html
<td width="100%" height="2" style="font-size:1px;line-height:1px;width:100%;background-color:#953734">&nbsp;</td>
```
trick, that let you decide height and color of a single "empty" cell. 
In fact the cell is not empty, it contains a no-breaking-space character to avoid the "blank" effect -no background color- on some clients (mainly Outlook).

As we can see, from this screenshots, Postbox assumes that you cannot have font-size below 11/12px, so it shows big and bold separator lines, and also 8px font-size paragraphs appear much largen than in Gmail.

![Postbox Screenshot](https://raw.githubusercontent.com/voidlabs/mosaico.io/gh-pages/assets/images/postboxscreenshot.png)

Due to the limited spread of Postbox, this is not a big issue: the results are slightly different from the original, but still acceptable.
If you have found some more issue on Postbox rendering, let us know!
