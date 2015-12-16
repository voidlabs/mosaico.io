---
layout: post
title:  "Classifying Free Email Template Builders"
date:   2015-11-10 12:30:00
categories: email-template-builders
---
In the last years a lot of **free to use email builders** have been published on the web!
This is a great news because creating a **responsive email** that works fine on most email clients is a real PITA.

Here we try to define a **basic classification framework** for email template builders, for their *Business Model* and for their *Architectural choices*.

### Business Model

When you use a **tool for free** it may help to understand how they plan to *monetize* it.
- some tools are offered for free as a **channel to promote other services** (usually an ESP service): [FreeEmailEditor]() and [BeeFree]() belongs to this category.
- some other tools are provided for free because they hope **you will buy commercial templates**: [Stamplia]() and [MailSalad]() do this.
- some other tools are free as in freemium, so a free version exists to let people know **the commercial version**: [Responsizer](), [BeeFree](), [EdmDesigner]() and partly [Mosaico]() belongs to this one.

Being the only **opensource** product, *Mosaico* has a special position in this categorization: we hope to make some money by providing **Commercial Support** for Mosaico but we mainly opensourced it with the hope to create a **community** around it.

Then you will find plenty of **proprietary Email Editors** built-in in the platform of most email marketing firms like *Mailchimp, CampaignMonitor, BenchmarkEmail* and more.

<!--more-->

### Architectural choices

#### "Template based" vs "Built-in" HTML structure

**Template based html structure**: *Mosaico, Stamplia and Mailsalad* let you compose and customize a **"master template"**. The result you obtain depends on the template you chose to work with. 
Your result **will be responsive** if the template was responsive and the result may change a lot depending on the input template.
Most editors belonging to this category publish a **"template language"** to let Email developers build their own *"master template"* and add some special declaration to their template so to **enable the editor** in order to customize it. The template developer will be able to decide **which blocks can be used and which properties can be changed**.

*Stamplia* and *MailSalad* have a **simpler** template language than *Mosaico*: this means that it is easier to create templates for Stamplia or MailSalad but the resulting template will be **less customizable**. Mosaico gives much more power (*and responsibilities*) to template developers. This means Mosaico may have **more or less customization options** depending on the template itself.

**Built-in html structure**: many editors prefer to use an *"hardcoded"* html structure. This usually means that you can't use **customized templates** but only some "layout" provided by the editor itself.
*Responsizer, BeeFree, EdmDesigner and FreeEmailEditor* fall in this group. This approach usually make it easier to create a **powerful editor with many customization options**, but this "feature" also means that once you hit that limit you have no way to bypass it. It also means that they often offer a lot of customizations that some final user may find "too much" and confuse them.

Template builders belonging to the latter category defines the **flexibility level** and the **customization power** and they target only **one kind of users, the "final users"**: depending on the customization power they can satisfy a smaller or larger audience but they are never targeted to "email developers".
Editors in the former category defines what flexibility to leave to **template developers** and template developers choose how to use this flexibility: they target **two kind of users**: *"email developers"* and *"final users"* and they often fail to satisfy the **"advanced, but non-developer, user"**.

### "Nesting level", dropzones and template elements.

TODO introduce and explain maybe with the help of some images (single level, double levels, multiple levels)

Single level: Mosaico, Stamplia, MailSalad, FreeEmailEditor
Double levels: BeeFree (structure+content)
Multiple levels: EDMDesigner, Responsizer

Most times more nesting levels means more flexibility but often also more complexity and lesser easy of use.
So here we find that editors using a built-in structure, usually tries to gives you much more power customizing this structure while template based editors will give you less options to alter the layout defined by the template you use.

Mosaico is the more flexible between "template based" editors simply because the flexibility/complexity is defined by the template itself.

Most email marketing firms provide their own proprietary editor that can be classified using the above criteria.
Some of them provide both "template defined email" and "editor defined email" editors (e.g: MailChimp and MailerLite have both kind of editors).

CampaignMonitor was used to provide a "template based" editor and published their template language, too, but now they ship a new editor using a "template based" on "two levels" solution but they didn't publish the template language and they don't let you upload your own template so at this time there are no "two nesting levels"-"template based" editors out there.

