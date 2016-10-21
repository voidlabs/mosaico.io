---
layout: post
title:  "Fab4 responsive technique: stability and usefulness beyond Gmail"
date:   2016-09-29 17:57:21
categories: email-client-tricks
draft: yes
---
**Responsive Emails** has been a trending topic in Email Marketing since last five years.
Today most emails are read on mobile devices, so responsiveness is a must, but many email clients and webmails have a really **limited support of media query**, the main css way to make responsive html layout.

### Previously...

Until Sept 2016 (*when Gmail started supporting non-inline styles and media queries*), the most problematic clients were **Outlook and Gmail (both web and app)**; to overcome these problems many techniques have been developed - mainly **table based layouts with conditional comments** to satisfy Outlook a lot of **inlined CSS** to make Gmail happy.

Someone started to use **mobile-first templates**, letting media queries manage the desktop version - where it was possible.

Then **Hybrid Coding / Spongy** technique emerged: a mix of well balanced inline styles, with **min-width/max-with and width tricks**, letting also Gmail have its proper **adaptive version** even if not fully responsive.

Hybrid coding has been adopted by many email templates (also **Versafix-1 Mosaico Template** use it) even if the rendering of responsive version in Gmail was not perfect.

### A different approach

A new technique emerged early in 2016, called the [Fab4](https://medium.freecodecamp.com/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848), mixing the width, min-width, max-width (all already used in hybrid coding) with a **CSS calc()** trick.

Fab4 has a completely different approach: **no table based layout** - all inline-block divs - and **a calc() based breakpoint**, based on the parent width instead of media queries.

### Fab4 code

The basic is (to be inlined):

```html
.block {
    display:inline-block;
    min-width:50%;
    max-width:100%;
    width:calc((480px — 100%) * 480);
}
```

In this brief example **480px is the brackpoint**: if parent width is under 480px the calc-computed .block width will be over the max-with of 100%, so the div will limit its width to the **max-width value**, occupying the whole space, making multiple .block stack in a single column.

If the parent width is over 480px, then the calculated width will be a negative number, so the box will shrink to the **min-width of 50%**, and the .block will be arranged into a two columns layout.

The method is really smart but has 2 big limits:

- calc is not supported by all clients
- many webmails may strip down parenthesis or the whole calc property value

For the record the final version proposed in the original article is:

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

This simply introduces "-webkit-" prefixed calc so to support older WebKits and does the math in the calc expression because some webmail removes styles with an asterisk or double brakets.

So, the method proved to be solid and [Campaign Monitor](https://medium.com/cm-engineering/coding-mobile-first-emails-1513ac4673e#.71ksp78zd) has rewritten its responsive templates to use this technique - alongside a series of conditional comments table layout bit and other minor tricks to achieve complete Outlook compatibility.

### But now Gmail supports media queries

So, is the Fab4 method still useful? *Maybe*.

If you look at global shares Gmail was the only email client having a need for the Fab4 method, but if you send to specific non-US markets or you also care for less used email clients then you may still need it.

Here is a list of local/**regional providers** that you don't find in "global stats" but are **big in specific countries**:

- Russia: Mail.ru, Yandex.ru, Rambler.ru
- China: QQ.com, 163.com
- India: Rediffmail.com, Sify.com
- Germany: Web.de, T-online.de, GMX.de
- France: Wanadoo.fr, Orange.fr, Free.fr, SFR.fr
- Italy: Libero.it, Alice.it, Virgilio.it, Tiscali
- Brazil: Terra, Uol, Bol
- Spain: Terra, Teleline
- Portugal: Sapo, Telepac

For example **in Italy** (we are italian so we prefer to talk about what we know well) **the 4 "local" providers above generate more than 30% of total email opens** and **Libero.it** alone is the first provider with **more users than Gmail**.

So, **it worth testing** each "method" also **against webmails or mobile apps being relevants for your target** and not only against the major global providers.

In our tests we found that **QQ.com, Terra, GMX, Web.de and Yandex** will show **Fab4 mobile version**, failing to use whole desktop space, when available. 
On the same webmail systems, **spongy technique (tested with our Versafix-1 template) works well**, showing full desktop version.
**Orange.fr** has problem with both tecnique, but slightly minor with Versafix-1/hybrid/spongy; on **Lotus Notes 8.5** Fab4 fails in bad ways, while **Versafix-1** looks good.

By now we know that **Gmail transition** towards full media query support **is not yet completed**: **IOS client** seems to be stuck on "old" Gmail rendering system and also **Gmail webmail mobile version** is not accepting media query so far.
On both Gmail version (IOS and Webmail mobile) **Fab4 technique works well**.


### Results
As said before, **Fab 4** technique is born mainly to go beyond **"old" Gmail limits**, and give a proper responsive email version also on non media query compatible webmail and clients.

With brand new **Gmail media query support** this need seems to be outdated, but so far **transition is still uncomplete** and there are also **many local webmail that are incompatible with media query**.

So **Fab4 could be a nice option**, if you are mostly **mobile-oriented**: this method renders **slightly better** in mobile versions than Spongy/Hybrid technique (not so much, by the way), anyways you have also to consider that **Spongy/Hybrid technique** seems to react in a **more solid way** with "problematic" clients and webmails.

So, as always, before embracing a new technique consider always the downside of this kind of operation.



