---
layout: post
title:  Email clients tracking and privacy issues
date:   2016-01-20 20:57:21
categories: email-client-tricks
draft: true
class: advtable
---

As everybody knows, email marketers uses remote call of a **"fake"** image in order to *track opens, along with openers IP and user agent*.

These information are vital to email marketing and can be used to find clues about *geo-localization* and user *device/client*: this informations help us all in the phase of analysis of the results of past emails and also in the design of the next ones.

As for the **"cookies"** matter, email tracking has been criticized for years, and most clients and webmails too used a method to **block all remote contents**, until the user willingly unblock them.
Nowadays the situation is slightly better: most clients, and also webmail, *don't bore the users with broken images and tedious unblock systems*.

For sure **IOS mail and MacOs Mail** are the first comers in this "new wave", and also are the most "web standard" compliant of the mail clients.
Moreover modern web includes now many possibility to make a **remote call** to a server within the html email body: *audio, css, video and also script*.

Some of these method bring not only privacy issues, but also **security issues**.

Modern webmail and clients have methods to get rid of most of them, but to be sure *Mike Cardwell* has developed **[Email Privacy Tester](https://emailprivacytester.com/)**, in order to test the behaviour of various email clients and webmail **BEFORE and AFTER the image unblock**, for those who implements this kind of "old" privacy guard.
<!--more-->
So, we take a detailed test of the most used webmail and email clients, and put in this table the results.
First of all we have to say that **none of the clients** that implements image block pass any kind of information until the users unblock the images. 

Other general notes on the test itself: we think it's *not the better way* to check behaviour of clients on specific issues, because the message used by **Email Privacy Tester** is far too *"messy"* and some webmail react as in front of a **dangerous threat**.

**AOL**, for instance, *does not let the message hit your box*, neither as spam and **Outlook.com** block al contents and alert you - usually hotmail and outlook.com load remote images through a proxy without blocking anything.
In order to complete the test we've done a **"less messy"** email for AOL and Hotmail.

Let's talk about **proxy/image cache**: **Gmail** is not the only one using it, also **Outlook.com** uses it, but Outlook will not proxy *audio requests and video src* (Gmail does not allow these type of contents).
There's another difference: Gmail mask not only the IP (*so we loose all the information about geolocalization*), but also the **user agent** (*bye bye device/client info*), while **Outlook.com** pass the original user agent.

Below you'll find the table, reporting which remote calls are triggered by various email clients and webmail.

|CLIENTS<br /> &nbsp;|OUTLOOK 2000|THUNDER BIRD|MAIL MACOS|GMAIL WEBMAIL|GMAIL ANDROID|OUTLOOK WEBMAIL|AOL WEBMAIL|YAHOO WEBMAIL| 
|------------------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------| 
|IP| Real| Real| Real| Proxy | Proxy| Proxy/Real | Real| Real| 
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