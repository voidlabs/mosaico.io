---
layout: post
title:  Samsung Email Autowidth feature breaks responsivity. Here is a workaround!
date:   2023-07-03 14:00:00
categories: email-client-tricks
---

Have you ever created a responsive email using media queries to optimize it for smartphones, only to find that **Samsung Email breaks the layout** by using an excessively wide viewport? Even if your media queries are correctly interpreted and applied, texts become unreadable due to the wide rendering. We reported it as versafix template issue [#37](https://github.com/voidlabs/versafix-template/issues/37).

The bug was initially [reported four years ago](https://github.com/hteumeuleu/email-bugs/issues/73) to the **HTeuMeuLeu** repository by **Mark Robbins**. Several workarounds were proposed, but **none of them resolved the issue** with our template.

In an attempt to address the problem, we ~~reverse engineered~~ made a lot of guessing about **Samsung Email "Autofit" feature** to understand why it was causing our autofitting email to display improperly. 

Through testing, we discovered that **the issue arose when the email's HTML contained large elements with extensive "width" attributes or width properties in element styles**. Notably, elements hidden with "display: none" did not trigger the issue.
<!--more-->
What occurred was that Samsung Email identified the largest width in the HTML code and adjusted the viewport width accordingly, resulting in a zoomed-out version of the email. Most responsive emails use desktop widths in their HTML code, making only mobile-first templates immune to this Samsung bug. It's surprising that no effective workaround has been proposed in four years and that Samsung has yet to address the issue.

Upon examining the JavaScript code used in the WebView for rendering emails, we encountered **something peculiar in the Autofit.js file**:

```js
AutoFit.onLoad = function(loadCallback, removeHeight100InStyleCallback, getViewportCallback, IsPLMContent, fontSize) {

  [...]
  
  baseViewportWidth = getViewportCallback();

  var children = orignalDiv.children;
  removeHeight100InStyle(removeHeight100InStyleCallback);
  var originMaxWidth = removeHeight100InNode(children);

  [...]
  
	var orignalWidth = orignalDiv.style.width;
	if (orignalDiv.getAttribute(SET_WIDTH_ATTR)) {
		newWidth = orignalDiv.style.width;
		width = secDivWidth = parseInt(newWidth);
	} else {
      MAX_WIDTH = Math.max(orignalBody.offsetWidth,orignalDiv.scrollWidth);
	    if (MAX_WIDTH <= baseViewportWidth) {
	        //checkMaxWidth(orignalDiv.children);
	        MAX_WIDTH = Math.max(MAX_WIDTH,originMaxWidth);
	    }

		newWidth = Math.max(MAX_WIDTH, baseViewportWidth) + "px";
		orignalDiv.style.width = orignalDiv.scrollWidth = newWidth;
		width = secDivWidth = parseInt(newWidth);

		orignalDiv.setAttribute(SET_WIDTH_ATTR, 1);
	}
 
  [...]
```

The function removeHeight100InNode returns the largest element width, and this value is stored in "originMaxWidth." Later in the code, "originMaxWidth" is used as the new viewport width before the final rendering.

Based on the conditions, it seems that Samsung Email initially renders the email using a narrow viewport. If the rendered email does not overflow, it then applies the aforementioned logic. This behavior is contrary to expectations, as one would assume that if the email does not fit the mobile viewport, it should be left as is, while only those that fit would be autofitted. This **sounds like the opposite of what some autofit code should do**.

However, armed with this knowledge, we were able to identify a potential workaround. We discovered that adding a fixed-width element with a width of 430px to our email improved the rendering. This adjustment caused the email to be displayed as mobile on a 450px viewport, rather than the default 600px viewport used without the fixed element.

After extensive trial and error, we arrived at a **generic solution** specifically targeting Samsung Email:

```css
  @media screen and (max-width: 384px) {
    .mail-message-content {
      width: 414px !important;
    }
  }
```

Interestingly, this media query only matches during the initial rendering evaluation by the app. Subsequently, the email is rendered in a viewport of approximately 420px (estimated) because it doesn't fit the mobile viewport. With the new viewport size, the media query no longer matches.

We tested this fix on several Samsung devices, including the S8, S10e, S22, S20 Plus, S23 Ultra, and a few Notes. The solution appeared to work consistently across devices, regardless of their native virtual viewport sizes. Please let us know if this workaround resolves the issue for you as well!
