---
layout: post
title:  A due update to our "versafix" master template
date:   2018-02-28 18:00:00
categories: news
draft: true
---

Mosaico flagship master template is named **Versafix-1** and the current version (1.0.6) is used by thousands of users around the world, every day, to create effective and responsive emails.

*In the past 2 years we analized how people used Versafix, what were the most commonly altered styles and collected a lot of feedback and feature requests!*

We followed the suggestions, but before we detail the improvements, we want to let you know the basics:

- **forward compatible**: any email model saved against the versafix 1.0.x master template can been loaded by the new versafix 1.1.x master template and enhanced with the new options.
- **requires no changes to the library**: we wanted the new template to be deployed also on older mosaico releases (0.14.0+ is known to handle the template correctly).

# New & Noteworthy in 1.1.16

### New alignment option for titles, paragraphs and buttons

![Title, Text and Buttons alignments](/assets/images/versafix-1.1-alignments.png)

### New line-height option for paragraphs

![Line-height](/assets/images/versafix-1.1-lineheight.png)

### Narrow vs Full width background option in the Logo and Separator blocks

![Block background](/assets/images/versafix-1.1-backgrounds.png)

### Free height option for image sizing in blocks with images in multiple columns

![Non-Fixed Image heights option](/assets/images/versafix-1.1-free-img-heights.png)

### New "Image size" variants for the "Image and Text" (hero) block

![New variants in hero block](/assets/images/versafix-1.1-image-text-variants.png)

### New full size "Social follow" block with 2 new icon styles and 2 available sizes

![Social follow block](/assets/images/versafix-1.1-social-follow.png)

### New "Social share" block with 3 available styles

![Social share block](/assets/images/versafix-1.1-social-share.png)

### HTML output fully revamped

The improvements above were introduced in 1.1.0 release. Then it tooks 16 releases (to 1.1.16) to deal with email clients specific issues :-)

We introduced new "**hybrid hacks**" ([responsive + spongy + calc](https://mosaico.io/email-client-tricks/fab4-responsive-beyond-gmail/)) to **improve compatibility with most email clients** and to **improve responsive behaviour on email clients not supporting CSS media queries**.

This let us correctly switch the responsivity in Gmail desktop and in "MyMail" app for Android and iOS (Mobile apps from Mail.ru, Libero.it and maybe other big local providers are in fact MyMail "forks").

# Enjoy

The updated template is **already included in the official mosaico distribution** (0.17.0) and can be tested here on Mosaico.io live demo.

We also created a [specific Github repository for the master template](https://github.com/voidlabs/versafix-template) so to better **deal with template releases that often don't need a new library release** and follow different release paths.
