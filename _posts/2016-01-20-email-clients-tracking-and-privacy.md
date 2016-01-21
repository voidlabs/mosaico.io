---
layout: post
title:  Email clients tracking and privacy issues
date:   2016-01-20 20:57:21
categories: email-client-tricks
class: advtable
---

Most email marketers use **"hidden"** images in order to *track opens, along with openers IP and user agent*, they are often called **"tracking pixel"** or **"webbug"**.

These informations are vital to email senders and can be used to *geo-localize* users or detect the *device/client* they use to read email.

Like **"cookies"**, email tracking has been criticized for years, and most email clients implemented solutions to **block remote contents** until the user willingly unblock them.
Nowadays most clients, and also webmail, *don't "bore" their users with broken images and tedious unblock systems*.

**IOS mail app and Mac Os X "Apple Mail"** have been the first to launch this "new wave", and they also provide the best experience with regard to support for "web-level" HTML support.
"Modern" HTML provides many ways to include **remote content** within the html body: *audio, css, video and also scripts*.

Some of these "features" bring not only privacy issues, but also **security issues**.

Most email clients have methods to get rid of most of them, but sometimes you wouldn't expect how many privacy holes can be hidden in a simple email being viewed. *Mike Cardwell* developed **[Email Privacy Tester](https://emailprivacytester.com/)** in order to test the behaviour of various email clients and webmail **BEFORE and AFTER the image unblock**, so that anyone can privacy-proof his email client.
<!--more-->
We decided to test most used webmail and email clients throught the Email Privacy Tester and write down the resulting summary table.

First of all the good news is that **none of the clients under test** implementing image blocking requested any remote content before the users unblocked them.

We found it's probably *not ideal* to put all the "privacy tests" in a single "threatening email" because even a single weird test may alter the result of the others. **AOL**, for instance, *does not let the message hit your box* at all while **Outlook.com** block all contents and alert you it may be dangerous.

In order to complete the test we've created a **less "messy"** email for AOL and Hotmail.

In order to partially protect the privacy of their users some email client recently decided to remove "remote content block" in favor of "proxied content". Using a proxy let the provider to check the content and prevent the "email sender" from obtaining the IP location of the user reading the email.

**Gmail** have been the first to introduce a proxy, but now other email clients do that. Outlook.com does weird things by proxying only some of the remote images while letting most *audio requests and video src* to be directly requested from the original server (Gmail strips all of the tags related to audio and video, to be "safer").
There's one more important difference between the two: Gmail does not only mask the IP (*so to prevent geolocalization*), but also the **user agent** (*bye bye device/client info*), while **Outlook.com** pass along the original user agent letting the sender detect which email reading environment is being used.

Below you'll find the table, reporting which remote calls are triggered by various email clients and webmail.

|CLIENTS<br /> &nbsp;|OUTLOOK 2000|THUNDER BIRD|MAIL MACOS|GMAIL WEBMAIL|GMAIL ANDROID|OUTLOOK WEBMAIL|AOL WEBMAIL|YAHOO WEBMAIL| 
|------------------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------| 
|IP| Original| Original| Original| Proxy | Proxy| Both | Original| Original| 
|BLOCK<br /> &nbsp;|IMAGE UNBLOCK|IMAGE UNBLOCK|DIRECT|DIRECT |DIRECT|DIRECT|IMAGE UNBLOCK|IMAGE UNBLOCK| 
|||| || | | || 
|Audio tag|| YES| YES || | YES | || 
|Background attribute | YES| YES| YES || | | YES || 
|CSS Attachment || YES| || | | || 
|CSS background-image || YES| YES | YES| YES | | | YES| 
|CSS content|| YES| YES || | | YES || 
|CSS import | YES| YES| YES || | | || 
|CSS link tag | YES| YES| YES || | | || 
|Iframe img ||| YES || | | || 
|Iframe srcdoc attr || YES| || | | || 
|Iframe tag || YES| YES || | | || 
|Image Submit Button| YES| YES| YES | YES| YES | YES | YES | YES| 
|Image tag| YES| YES| YES | YES| YES | YES | YES | YES| 
|Img srcset attr|| YES| YES || | | || 
|Link Prefetch|&nbsp; | | | | | | | | 
|Meta refresh |&nbsp; | | | | | | | | 
|Object tag – data|| YES| YES || | | || 
|Object tag – Flash || YES| YES || | | || 
|Picture tag|| YES| || | | || 
|Script inside script |&nbsp;|| || | | || 
|SVG attachment with CSS||| YES || | | || 
|SVG inline with remote img || YES| YES || | YES | || 
|Video MP4|| YES| YES || | YES | || 
|Video Ogg|| YES| || | YES | || 
|Video poster || YES| YES || | YES | || 
|Video tag|| YES| YES || | YES | || 
|Video Webm || YES| || | YES | || 

We are aware of less widespread email clients showing major privacy concerns (for example letting the script-in-script hack to pass through) but we decided to limit this post the most used platforms.

Well, what are you waiting for? Go, run the **Email Privacy Tester** against your favourite email client and share the results!
