---
layout: post
title:  Mosaico 0.17.3 release
date:   2018-03-26 14:00:00
categories: news
draft: true
---

It's been a while since our previous release but it turned out **Mosaico is pretty stable/solid** and easy to extend via plugins!

On the other side **it took 4 iterations to have our first 0.17.x stable release**, namely the 0.17.3, because of unexpected issues with the newer version of our dependency TinyMCE and because of bugs in Safari rendering engine (WebKit).

![Mosaico 0.17](/assets/images/mosaico-0.17.png)

Let's see the changes...
<!--break-->

### Final User changes/improvements

- **Updated versafix-1 to 1.1.16 with new blocks anew new options**: [see release notes](/news/update-to-our-versafix-master-template-for-emails/)
- Added image tool on Editbale images that by default opens the gallery (overridable via viewModel plugin)
- New outline on editable elements when hovering a block
- Prevent editing contents while tinymce is being loaded (fading effect)
- Use inline-block with a min-width for inline editables + hacks to prevent element collapsing

### Developers/Integrators changes:

- Added Russian, Serbian and Portuguese language packs
- Added decodeURI, encodeURI, decodeURIComponent and encodeURIComponent to functions available to template authors.
- Compatibility with jQuery up to latest 3.3 (using jQuery-Migrate), we suggest upgrading to jQuery 3.3, Knockout 3.4.2, TinyMCE 4.5.x (MAY work with 4.6.x, still have ISSUES with 4.7.x)
- **Major build refactoring** to remove bower and **improve build reproducibility** over time when using npm v5 (previous releases are not anymore buildable because of bower and no package.lock mechanisms in older npm).
- A bunch of minor bug fixes
