---
layout: post
title:  "Fab4 responsive technique: stability and usefulness beyond Gmail"
date:   2016-09-29 17:57:21
categories: email-client-tricks
draft: yes
---
Responsive Emails has been a trending topic in Email Marketing for the last five years.
By now well over 50% of email is being read on a mobile device, so responsiveness is a must: but the well known problem is that some of the major email clients and webmails have a really limited support of media query, the main css instrument to make responsive html layout.
By know - but the things gonna change really soon - main problems are Outlook and Gmail (both web and app); to override these problems many techniques has been adopted - mainly tablebased layout with glitches and tricks to avoid Outlook madness and a lot of inlined CSS to be sure that Gmail works fine, at least on desktop version.
Someone started to use mobile-first templates, letting media queries manage the desktop version - where it was possible.
Lately Hybrid Code technique emerged: a mix of well balanced inline styles, with min-with/max-with and with tricks, between absolute values an percentile, letting also Gmail have its proper - well not completely - responsive version.
Hybrid coding has been adopted by many email editors, also Versafix Mosaico Template use it, even if the rendering of responsive version in Gmail is not perfect.
A new technique emerged early in 2016, called the Fab4, mixing the with, min-with, max-with (all already used in hybrid coding) with the CSS calc().
This is a completely different approach: no table based layout - all inline-block divs - and a calc() based breakpoint, upon the parent width. 
The basic is (to be inlined):

```html
.block {
    display:inline-block;
    min-width:50%;
    max-width:100%;
    width:calc((480px — 100%) * 480);
}
```

In this brief example 480px is the brackpoint, so if 100% of parent is under 480px the resultant width will be over the max-with of 100%, so the div will accept the max-width value, occupying the whole space, making content stack in a single column.
If the parent width is over 480px, then the calculated width will be a negative number, let the winner be the min-width of 50%, so content will be arranged in two columns.
The method has is limit, calc is not supported by all clients and many webmails may strip down parenthesis or the whole calc property value.
The final version proposed in the original article is:

```html
.block {
    display:inline-block;
    min-width:240px;
    width:50%;
    max-width:100%;
    min-width:-webkit-calc(50%);
    min-width:calc(50%);
    width:-webkit-calc(230400px — 48000%);
    width:calc(230400px — 48000%);
}
```

In this example we have some -webkit prefixed calc in order to achieve oldest webkit (android and so on) compatibility. The main width calc has been rewritten to avoid double parenthesis and * (making it really hard to read), and we have some fixed min-width as fallback for clients that does not support calc at all. All of this, of course have to be inlined.

So, the method is complex, but it grants a complete responsive version for Gmail, and seems so good that also Campaign Monitor has rewritten its responsive templates including this technique - alongside a series of conditional comments table layout bit for complete Outlook compatibility. 
But wait: Google has recently confirmed that soon Gmail will support media queries,so the Fab4 method would not be more useful? 
Maybe. 
We already know that Gmail is not a monolithic platform: we have Gmail webmail, Google Apps (free and for work), Gmail app Android, Gmail app IOS, Gmail webmail mobile... and we already also know that all of this platform does not have same behaviour. So the media queries Gmail compatibility may not be a straight forward process, and it may take time.
Gmail is really important, but, speaking about "local" providers, we have a lot of "minor" mail providers that have huge shares in local market.
In Italy, for instance, around 20% of emails sent by ESP will hit a Libero mailbox, and also Alice, Tiscali and Fastwebnet are important players. In Russia Mail.ru is an absolute leader.

We made some test, with Email On Acid, but also with direct testing on the single platforms, in order to understand the reaction of clients and webmails, both with Fab4 standard demo and with new CM templates.
Let's say: Fab4 method, althought quite complex, seems enough stable and reliable. 
The CM template performs well on most platforms, even if the inlined style has not all fallbacks provided by Fab4 final example:

```html
max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 173000px);
```
CM opted for fixed width options (no 100% or things like that) and inverted calc logic: in this case if parent is over 618px wide, the box will accept max-size of 600, otherways the box will shrink to 320px.
Take care: this is a mobile first fallback template, before the width with calc directive, we find a width: 320px, that will be the definitive size in case client does not understand calc or webmail strip it off.

Of course the worst performances occours on various version of Lotus Notes: in this case the lack of table based layout scramble the newsletter over the readability level, we have to say that also hybrid coding or other complex layouts does not perform well on Lotus Notes. Outlook works well with CM layout on all version, while Fab4 example version seems to go narrow on Outlook 2003 (but this may depend on version of MSIE used by Email on Acid virtual machine). 
Some issue also on minor webmail, like Gmx.de, Orange.fr and T-online.de; in most of them the newsletter is shown in narrow mobile version, while T-online.de shows a broken layout with overlapping columns.

On Mail.ru and Libero.it (both does not have media-query support) both template version (Fab4 and CM) performs really well; also on the mobile application, that's the same Mail.me rebranded for Libero, we see no issues. Other Italian providers like Tiscali and Alice will strip off the entire calc rule (tiscali) or the content between parenthesis (alice); in this case the mobile version is shown.

So, Fab4 method seems quite stable, with issues on minor or regional clients and webmail - take care only if you have most Lotus Notes users between your contacts; considering that Gmail transition towards media-query support is not even begun, and it may take time and trouble, and that Fab4 solves the responsive problems on some major local providers like Mail.ru or Libero.it, you may consider the adoption of this technic. 
