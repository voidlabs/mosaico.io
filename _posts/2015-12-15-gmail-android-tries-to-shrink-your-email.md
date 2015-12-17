---
layout: post
title:  "Gmail on Android tries to shrink your email with .munged class"
date:   2015-12-15 15:57:21
categories: email-client-tricks
---
Everybody knows that **Gmail** -web or app- **does not support media query** at all, stripping the whole *<style></style>* section from emails.
This for, after much try and test, retry and retest, someone figured out how to get a **“simil-responsive”** behaviour without css at all. This approach is called **“hybrid coding”** and by now is used by many template designers and also by **email template builder like Mosaico**.
**Hybrid Coding** works making use of *width/max-width* or *width/min-width* couples, adding some conditional comments table structures for Outlook compatibility.

```html
<!--[if (gte mso 9)|(lte ie 8)]>
    <table align="center" border="0" cellspacing="0" cellpadding="0" width="570">
        <tr>
            <td align="center" valign="top">
<![endif]-->
<div class="oldwebkit" style="max-width: 570px;">
    <table style="border-collapse: separate;border-spacing: 9px;width: 100%;max-width: 570px;background-color: #fff;" class="vb-row fullpad" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="9" width="570">
        <tbody>
            <tr>
                <td class="mobile-row" style="font-size: 0;" align="center" valign="top">[...]
```

However this approach is not perfect: if you have three column layout, the stacked blocks on mobile version **will not cover the whole screen**, due to the max-width value being lower than the viewport width.

<!--more-->

Sometimes the results, using this method, **appear to be slightly different** depending on the device you're reading the email on: the stacked columns in three column layout may, apparently randomly, **go at 100% width**, while they have to maintain their max-width, that is far less than the device viewport one. 
This kind of behaviour was for the first time highlighted in a [Litmus community discussion](https://litmus.com/community/code/4410-gmail-app-stacked-column-width-woes-no-media-queries). 
Moreover, after other testing, we've discovered that **Gmail app for Android** - and not for IOS as far as we know - upon certain circumstances **strips width and min-width properties and add a “.munged” class** on tables, td and images.


Trying to discover how and why this stripping and adding is done, we've found some answer directly in the **Android Unified Email source code**:

In the [template_conversation_upper.html](https://android.googlesource.com/platform/packages/apps/UnifiedEmail/+/525dfca7775adf3e01bb033122c9c7ed226ed213/res/raw/template_conversation_upper.html) you find the styles added:

```css
table.munged {
    width: auto !important;
    table-layout: auto !important;
    }
td.munged {
    width: auto !important;
    white-space: normal !important;
    }
```

In the [template_conversation_lower.html](https://android.googlesource.com/platform/packages/apps/UnifiedEmail/+/525dfca7775adf3e01bb033122c9c7ed226ed213/res/raw/template_conversation_lower.html) there are some variables (including MUNGED_TABLE_stuff) and an include call to a javascript.

```html   
<script type="text/javascript">
    var MSG_HIDE_ELIDED = '%s';
    var MSG_SHOW_ELIDED = '%s';
    var DOC_BASE_URI = '%s';
    var CONVERSATION_BASE_URI = '%s';
    var WIDE_VIEWPORT_WIDTH = %s;
    var WEBVIEW_WIDTH = %s;
    var ENABLE_CONTENT_READY = %s;
    var NORMALIZE_MESSAGE_WIDTHS = %s;
    var ENABLE_MUNGE_TABLES = %s;
    var ENABLE_MUNGE_IMAGES = %s;
    var RUNNING_KITKAT_OR_LATER = %s;
    var MSG_FORMS_ARE_DISABLED = '%s';
</script>
<script type="text/javascript" src="file:///android_asset/script.js"></script>
```

In the [script](https://android.googlesource.com/platform/packages/apps/UnifiedEmail/+/525dfca7775adf3e01bb033122c9c7ed226ed213/assets/script.js#245) you'll find the **logic** upon the decision whether to add or not the class **“.munged”** is made.
Everything is based on a constant **“WEBVIEW_WIDTH”** that is related - or appear to be - to the device itself.

```javascript  
documentWidth = document.body.offsetWidth;
goalWidth = WEBVIEW_WIDTH;
```

The code tries to apply the “munging”, then looks at the resulting width of the email.
If the resulting width is *satisfying* (using a **TRANSFORM_MINIMUM_EFFECTIVE_RATIO** constant to determine the successful shrinking rate), the munging will be kept, otherwise the script will revert all the operations. 

```javascript  
// If the transformations shrank the width significantly enough, leave them in place.
// We figure that in those cases, the benefits outweight the risk of rendering artifacts.
if (!done && (elWidth - newWidth) / (elWidth - docWidth) > TRANSFORM_MINIMUM_EFFECTIVE_RATIO) {
    console.log("transform(s) deemed effective enough");
    done = true;
    }
```

This kind of logic makes email testing on Gmail (Android) **really hard**, but at least we have the source code and we can understand how and why some “random” .munged class are added here and there.

By now we have reports this is only valid for **Gmail Android and not on Gmail in iOS**: maybe because of different viewport size, or maybe because it doesn't use this script at all.

