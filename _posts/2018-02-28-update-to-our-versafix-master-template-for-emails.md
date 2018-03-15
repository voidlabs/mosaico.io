---
layout: post
title:  A due update to our "versafix" master template
date:   2018-02-28 18:00:00
categories: news
draft: true
---

Mosaico flagship master template is named "Versafix" and the current version 1.0.6 is used by thousands of users around the world, every day, to create effective and responsive emails.

In the past 2 years we analized how people used Versafix, what were the most commonly altered styles and collected a lot of feedback and feature requests!

We decided to make a few improvements to the template with 2 constraints:

1) keep forward compatibility: any email model saved against the versafix 1.0.x master template should have been loadable by the new versafix 1.1.x
2) keep Mosaico version requirement low: we wanted the new template to not require newer versions of the Mosaico library, so that you can simply deploy the new template and start using it without changes to Mosaico

# New & Noteworthy in Versafix 1.1.16

### New alignment option for titles, paragraphs and buttons

### New line-height option for paragraphs

### Narrow vs Full width background option in the Logo and Separator blocks

### Free height option for image sizing in blocks with images in multiple columns

### New "Image size" variants for the "Image and Text" (hero) block

### New full size "Social follow" block with 2 new icon styles and 2 available sizes

### New "Social share" block with 3 available styles

### HTML output fully revamped

We introduced new "hybrid" ([responsive + spongy + calc](https://mosaico.io/email-client-tricks/fab4-responsive-beyond-gmail/)) hacks to improve compatibility with most email clients out there and to improve responsive behaviour on email clients not supporting CSS media queries.

This let us correctly switch the responsivity in Gmail desktop and in "MyMail" app for Android and iOS (Mobile apps from Mail.ru, Libero.it and maybe other big local providers are in fact MyMail "forks").

# Enjoy

The updated template is now part of the official mosaico distribution and can be tested here on Mosaico.io live demo.

We also created a specific Github repository for the master template so to better deal with template releases that often don't need a new library release and follow different release paths.
