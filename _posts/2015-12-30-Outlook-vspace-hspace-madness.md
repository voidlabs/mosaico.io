---
layout: post
title:  "Outlook: vspace, hspace, image align madness"
date:   2015-12-30 15:57:21
draft: true
---
Once again Outlook seems to be a nightmare for all email coders.
In the process of design and coding the Versafix template used in Mosaico, we faced many strange and subtle issues in the way browsers and clients render the final results.
One of the worst issues at first seemed just a little glimpse in the way Outlook manage the Social Icons block. In order to let the user specify the number and the type of icons, we just manage them as simple inline IMG, specifing an hspace properties (since we know that Outlook does not render css margin)

```html
<img hspace="10" src="facebook.png">
<img hspace="10" src="linkedin.png">
```

It turned out that this solution mostly works, but Outlook 2007/10/13 do not show the "hspace".
Obviously trying to add padding/margin via CSS has no results, since Outlook merely ignore them.

Keeping testing, we found that adding align="left" to the images made Outlook to start evaluating the hspace, but for some reason decide to "collapse" two adjacent hspace in one, so that while other clients space icons by 20px, Outlook will show 10 pixels only.

This Outlook 2007/2010 "half spacing issue" can be fixed by doubling the HSPACE value and declaring the real spacing using margin style="Margin-left: spacing; Margin-right: spacing", so other clients and webmail could arrange icons correctly.

But this is not enough: IE<=7 combines css margins with hspace values, so we added some 

```css
style="*margin-left: spacing; *margin-right: spacing"
```

The star-hack target IE7 and older browsers and so fixes the double spacing issue. The "final" result is:

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

