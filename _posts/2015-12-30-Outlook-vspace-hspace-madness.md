---
layout: post
title:  "Outlook: vspace, hspace, image align madness"
date:   2015-12-30 15:57:21
draft: true
---
Well, it should be pretty simple, but I can't get it to work everywhere.

The use case is social icons.

```html
<img hspace="10" src="facebook.png">
<img hspace="10" src="linkedin.png">
```
If you send this one it mostly works, but Outlook 2007/10/13 do not show the "hspace".
I tried adding padding/margin via CSS but the same Outlooks ignored them.

Adding align="left" to the images made Outlook to start evaluating the hspace, but they "collapse" so that while other clients space them by 20 outlook will show 10 pixels only.

The outlook 2007/2010 "half spacing issue" can be fixed by doubling the HSPACE and declaring the real spacing using margin style="Margin-left: spacing; Margin-right: spacing".

Then I found IE<=7 will combine margins+hspace so I added style="*margin-left: spacing; *margin-right: spacing": the star-hack target IE7 and older and fixes the double spacing issue.

```html
<img hspace="20" style="Margin-left: 10px; Margin-right: 10px; *margin-left: -10px; *margin-right: -10px" src="facebook.png">
<img hspace="20" style="Margin-left: 10px; Margin-right: 10px; *margin-left: -10px; *margin-right: -10px" src="linkedin.png">
   ...
```

Unfortunately after all of this I found that Outlook 2013 still doesn't work: it doesn't put any space between my images (while 2007/2010 works fine).

One way to fix this is to use a table and put each image in a cell: this way outlook 2013 will correctly apply the spacing but I loose the "multiline wrapping" when you see it on Gmail mobile.

So I put the table in conditional comments, so that Gmail mobile is happy again...

```html
<!--[if (gte mso 9)]><table cellspacing="0" cellpadding="0"><tr><td><![endif]-->
   <img align="left" hspace="10" src="facebook.png" border="0"/>
<!--[if (gte mso 9)]></td><td><![endif]-->
   <img align="left" hspace="10" src="linkedin.png" border="0"/>
<!--[if (gte mso 9)]></tr></table><![endif]-->
```

My main issue with this solution is when I have many social icons and they should wrap in 2 lines. The table doesn't let my icons to wrap and the whole layout is screwed (in outlook 2013) if I have too many icons.

