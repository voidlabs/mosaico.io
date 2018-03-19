---
layout: post
title:  Yandex.com removes full style attribute on unexpected contents
date:   2018-03-19 14:00:00
categories: email-client-tricks
---

We've had reports that our latest [versafix-1 template](https://github.com/voidlabs/versafix-template/releases/tag/v1.1.16) (1.1.16) shows its **mobile version on Yandex webmail even on desktop**.

After some investigation we found that **Yandex is stripping whole style attributes when the style contains something unexpected**.

We did some search to find existing informations about Yandex issues, but found nothing relevant, so we decided to **dig into it and document the behaviour**.

### What we found

Yandex.com webmail usually removes a properties if it doesn't know it or doesn't understand the property value, but it sometimes remove the whole style!

We found that the **full style attribute removal happens in a couple of cases**:

- When there are round brackets in a property value and you have some symbols in the content, like '\_', '-', '+', '\*', '&'
- On every property value if a sequence "- " is found or a "NUMBER-" or "-NUMBER" is found.

### An example

Let's see an example code:

```html
<div style="color: red; -unknown-prop: value">A</div>
<div style="color: red; -unknown-prop: value - 2">B</div>
<div style="color: red; -unknown-prop: -5something">C</div>
<div style="color: red; -unknown-prop: something(in brackets)">D</div>
<div style="color: red; -unknown-prop: something(in - brackets)">E</div>
```

is cleaned up by Yandex to this:

```html
<div style="color:red;">A</div>
<div>B</div>
<div>C</div>
<div style="color:red;">D</div>
<div>E</div>
```

**Yandex is removing also the properties he understands** like "color: red" when the style contains something he doesn't like.

### No Fab4, then?

So, this issue makes the [Fab4 technique](https://mosaico.io/email-client-tricks/fab4-responsive-beyond-gmail/) ineffective without additional hacks.

We [documented the bug](https://github.com/voidlabs/versafix-template/issues/1) in the versafix-1 repository. We'll try some additional hack to see if we can get the desktop version on Yandex even if partially using the Fab4 approach.
