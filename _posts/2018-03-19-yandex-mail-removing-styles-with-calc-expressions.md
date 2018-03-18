---
layout: post
title:  Yandex.com removes full style attribute on unexpected contents
date:   2018-03-18 18:00:00
categories: news
draft: true
---

We've had reports that our latest [versafix-1 template](https://github.com/voidlabs/versafix-template/releases/tag/v1.1.16) (1.1.16) shows its mobile version on Yandex webmail even on desktop.

After some investigation we found that Yandex is stripping whole style attributes when the style contains something unexpected.

We did some search to find existing informations about Yandex issues, but found nothing relevant, so we decided to dig into it and document the behaviour.

Yandex.com webmail usually removes a properties if it doesn't know it or doesn't understand the property value, but it sometimes remove the whole style!

We found that the full style attribute removal happens in a couple of cases:

- When there are round brackets in a property value and you have some symbols in the content, like '_', '-', '+', '*', '&'
- On every property value if a sequence "- " is found or a "NUMBER-" or "-NUMBER" is found.

So, this issue makes the [Fab4 technique](https://mosaico.io/email-client-tricks/fab4-responsive-beyond-gmail/) ineffective without additional hacks.

We [documented the bug](https://github.com/voidlabs/versafix-template/issues/1) in the versafix-1 repository.
