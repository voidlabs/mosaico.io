---
layout: post
title:  "That weird style issue in Outlook/Office365"
date:   2017-05-05 11:20:21
categories: email-client-tricks
draft: true
---

When Outlook.com/Office365 find an A tag without the HREF or with an empty HREF or an HREF with the value "#" then it will get very upset and will remove the link tag.

This is a known bug [documented](https://github.com/hteumeuleu/email-bugs/issues/10) by the great *"email hacker"* Rémi Parmentier\*

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body style="font-size: 30px;">

<a style="color: red; background-color: yellow;"></a>
<p>A paragraph</p>
<p>Second paragraph with no style</p>
<p style="">Third paragraph with style</p>
<p style="">Fourth paragraph with style</p>

</body></html>
```

So **we are not surprised** our link is not red on yellow, but **look at** how Outlook.com renders **the "Third paragraph"** for the previous code:

![Outlook.com moving styles](/assets/images/outlook-a-no-href-issue-crop.png)

It sounds like an almost "random" element in the page **will get the styles once belonging to your "unlinked" link**.

Our tests proved that the element is not "random" (of course) but it is the first following (in the DOM traversing) element with a "STYLE" attribute.

So, this is just another reason to stay away from empty links.

(\*) We suggest you Rémi's latest post about [Outlook.com weird bugs](https://emails.hteumeuleu.com/outlook-coms-latest-bug-and-how-to-fix-gaps-under-images-ee1816671461)
