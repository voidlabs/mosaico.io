---
layout: post
title:  Yahoo Webmail add overflow-y/x on use of max-height/width 
date:   2016-06-13 07:00:00
categories: email-client-tricks
draft: true
---

Every single webmail system has its way to handle email rendering: to avoid **security issues** and to avoid **css inconsistent transformation of the whole interface**, webmail systems cut and transform many css instructions.
One of the most strict is **Gmail**: no style, no mediaquery, and many css properties deleted.

Also **Yahoo** works in a similar way: some weeks ago it turns out that if you use **max-width and max-height** inline properties, Yahoo will add an odd **"overflow-x: auto" and/or "overflow-y:auto"**.
The use of max-width and max-height properties, otherways, is common, if you consider that Yahoo will transform any "width" and "height" properties in "min-width" and "min-height".
The reason of the adding of overflow properties is not so clear: maybe it could be to avoid the hidding of some content (maybe).
<!--more-->
Just trying to understand the way this transformation is done, we found that Yahoo has a **two step css and html purging**, one server side and one **client side (javascript)**.
We could assume that the **main purging and normalization is done server side**, stripping <style> content, deleting <script> and other potentially vicious code, normalizing inline code - for example stripping all the spaces between semicolon and css property value.
The last transformations - the ones involving width and height for instance - are done by a little piece of javascript code, with some really simple regular expressions:

```html
replace(/position\s*?:\s*?(fixed|absolute)/ig, ""),
replace(/([^a-z-])height\s*:|^height\s*:/gi, "$1min-height:"),
replace(/max-height/gi, "overflow-y:auto;max-height"),
replace(/max-width/gi, "overflow-x:auto;max-width"),
replace(/white-space\s*?:\s*?pre\s*?;|white-space\s*?:\s*?pre\s*?$/gi, "white-space:pre-wrap;"),
replace(/display:none/gi, "")
```
Reading the code it's simple to understand how to bypass the yahoo "overflow-x" "overlflow-y" add: if you add in your inline style code, just **after max-width and max-height**, an **overflow property**, this one will be maintained, and will **override the Yahoo property addition**.
Take care **not to add overflow-x or y**, because the server side purging will strip them off.
This trick will **not work on Internet Explorer**: the browser rendering will transform overflow-x and overflow-y in **ms-overflow-x and ms-overflow-y** and will rearrange the property order, making the general overflow addiction **from last to first**, so it will not override the overflow-x and y.

Althought we cannot imagine the reason behind this strange css transformations made by Yahoo webmail, another time it's a proof of how it's difficoult to mantain a reliable behavior of html email templates.

