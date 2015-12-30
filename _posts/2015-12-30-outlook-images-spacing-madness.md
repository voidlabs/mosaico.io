---
layout: post
title:  "Outlook images: vspace, hspace, align madness"
date:   2015-12-30 15:57:21
draft: true
---
Once again **Outlook** seems to be a **nightmare** for all email coders.
In the process of **design and coding the Versafix** template used in Mosaico, we faced many strange and subtle issues in the way browsers and clients render the final results.
One of the worst issues at first seemed just *a little glimpse* in the way Outlook manage the Social Icons block. In order to let the user specify **the number and the type of icons**, we just manage them as **simple inline IMGs**, specifing an **hspace** properties (since we know that Outlook does not render css margin)

```html
<img hspace="10" src="facebook.png">
<img hspace="10" src="linkedin.png">
```

It turned out that this solution mostly works, but **Outlook 2007/10/13** do not show the "hspace".
Obviously trying to add **padding/margin via CSS has no results**, since Outlook merely ignore them.

Keeping testing, we found that adding **align="left"** to the images made Outlook to start evaluating the **hspace**, but for some reason it decide to *"collapse" two adjacent hspace in one*, so that while other clients space icons by 20px, Outlook will show 10 pixels only.

This Outlook 2007/2010 **"half spacing issue"** can be fixed by doubling the HSPACE value and declaring the real spacing using margin *style="Margin-left: spacing; Margin-right: spacing"*, so other clients and webmail could arrange icons correctly.

But this is not enough: **IE<=7 combines css margins with hspace values**, so we added some 

```css
style="*margin-left: spacing; *margin-right: spacing"
```

The **star-hack target IE7** and older browsers and so fixes the double spacing issue. The "final" result is:

```html
<img hspace="20" style="Margin-left: 10px; Margin-right: 10px; *margin-left: -10px; *margin-right: -10px" src="facebook.png">
<img hspace="20" style="Margin-left: 10px; Margin-right: 10px; *margin-left: -10px; *margin-right: -10px" src="linkedin.png">
   ...
```

It seems all ok, but turned out that **Outlook 2013 still doesn't work**: it doesn't put any space between our images *(while Outlook 2007/2010 works fine)*.

We tried to fix this by **using a table** and put each image in a cell: in this way Outlook 2013 correctly apply the spacing but we loose the **"multiline wrapping"** effect that flows icons on two lines in Gmail mobile, *THEN* we put the *table/tr/td stuff in conditional comments*, so Gmail would be happy again... 

```html
<!--[if (gte mso 9)]><table cellspacing="0" cellpadding="0"><tr><td><![endif]-->
   <img align="left" hspace="10" src="facebook.png" border="0"/>
<!--[if (gte mso 9)]></td><td><![endif]-->
   <img align="left" hspace="10" src="linkedin.png" border="0"/>
<!--[if (gte mso 9)]></tr></table><![endif]-->
```
**This finally works great** on all clients and webmail, *UNLESS* you have much icon/images (and in our template may occur) that will not fit in single line even in desktop version: Outlook will render them in one line (it is a single table), **breaking the whole email**.
And then? You can go further and put **EVERY image inside a single table** (it would be ok), but we thought it would be too much code for some icons, so we start from scratch and add between every image a &nbsp;

```html
<img align="left" hspace="10" src="facebook.png" border="0"/>&nbsp;
<img align="left" hspace="10" src="linkedin.png" border="0"/>&nbsp;
...
```

Note: also this way is not perfect, since you have **little control on the final dimension** of effective spacing between icons, but we think it's a lot better than use some kbytes extra codes for just some spacing!
