---
layout: post
title:  "Classifying Free Email Template Builders"
date:   2015-11-10 12:30:00
categories: email-template-builders
---
In the last few years a lot of **free to use email builders** have been published on the web!
This is a great news because creating a **responsive email** that works fine on most email clients is a real PITA.

Here we try to define a **basic classification** for email template builders, for their *Business model* and for their *Architectural choices*.

### Business Model

When you use a **free tool** it may help to understand what's the plan to *monetize* it:

- some tools are offered for free as a **channel to promote other services**, usually an ESP service: [FreeEmailEditor]() and [BeeFree]() belongs to this category
- some other tools are provided for free with the hope **you will buy commercial templates**: [Stamplia]() and [MailSalad]() do this
- some other tools are free as in freemium, so a free version exists to let people know **the commercial version**: [Responsizer](), [BeeFree](), [EdmDesigner]() and partly [Mosaico]() belongs to this group

Being the only **opensource** product, *Mosaico* has a special position in this categorization: of course we hope to make some money by providing **Commercial Support** for Mosaico but we mainly opensourced it with the hope to create a **community** around it.

You will also find plenty of **proprietary Email Editors** built-in in the platform of most email marketing firms like *Mailchimp, CampaignMonitor, BenchmarkEmail* and many more.


### Architectural choices

#### "Template based" vs "Built-in" HTML structure

**Template based html structure**: *Mosaico, Stamplia and Mailsalad* let you compose and customize a **"master template"**. The result you can obtain heavily depends on the template you chose to work with.

For example your result **will be responsive** if the template was responsive or it will be **mobile first** if the template decided for this approach.

Most editors belonging to this category publish a **"template language"** to let Email developers build their own *"master template"* and add some special declaration to their template so to **allow the editor to customize it**. Template developers will be able to decide **which blocks can be used and which properties can be changed**.

*Stamplia* and *MailSalad* have a **simpler** template language than *Mosaico*: this means that it is easier to create templates for Stamplia or MailSalad but the resulting template will be **less customizable**. Mosaico gives much more power (*and responsibilities*) to template developers.

**Built-in html structure**: many editors prefer to use an *"hardcoded"* html structure. This usually means that you can't use **customized templates** but only some "layout" provided by the editor itself.

*Responsizer, BeeFree, EdmDesigner and FreeEmailEditor* fall in this group. This approach usually make it easier to create a **powerful editor with many customization options**, but this "feature" also means that once you hit that limit you have no way to get over it.

Template builders belonging to the latter category defines the **flexibility level** and the **customization power** and they target only **one kind of users, the "final users"**: depending on the customization power they can satisfy a smaller or larger audience but they are never targeted to "email developers".

Editors in the former category defines what flexibility to leave to **template developers** and template developers choose how to use this flexibility: they target **two kind of users**: *"email developers"* and *"final users"* but they often fail to satisfy the **"advanced, but non-developer, user"**.

### Nesting levels, dropzones and template elements

One of the key point of the architectural design of an email builder is how to let the user compose the email itself, what **kind of blocks** or contents he can brings in and how he's allowed to **combine them**.

Most editors let you build your email like building an apartment block: one floor at a time. We identified *three strategies* one can follow, from the simplest -and less flexible- to the most complex -and most flexible:

- In the first solution -let's call it "**single level**"- the user choose each floor from a group of *prefabricated floors*, some with a bedroom and a kitchen, some other with two bedroom, another one with a bedroom, a kitchen and bathroom, and so on.
The user can change walls colors, the styles of the doors and some furniture sets but a bedroom remains a bedroom. If you want some alternative rooms disposition, you'll have to look for another prefabricated floor, if available, or **accept a compromise**. Simple, effective, yet not so flexible. *Mosaico, Stamplia, MailSalad, FreeEmailEditor* adopted this strategy.

- The second way -we call it "**double level**"- let the user choose from some generic "floors", with one, two, three *empty rooms*, not assigned to any function yet. Once a floor has been chosen, *each room can be assigned a function and furnished*, so he can even make a floor full of bathrooms. Back to the email world, you first choose if you want a block with one, two, three or even four columns (dropzones), then you fill each column with images, texts,  buttons, social icons, and so on, depending on the furniture sets the designer let you choose. A little more complex than the single level, but the combo structure+content -or block+element- is powerful and useful. *BeeFree* in the only free editor to use this solution.

- The last way -"**multilevel**"- let the user not only choose the floor structure -the number of rooms- but also give him *the freedom to split the rooms* in "sub-rooms", change their sizes, and create very *customized floors*. This kind of freedom gives the user much flexibility, with the drawback of a potentially uncontrollable result. Here no designer made choices for the user, so **the final result is in the user hands, for better or worse**. This is usually very good when the final users are designers unufraid to use complex tools to reach their goal. *EDMDesigner and Responsizer*, despite their very different approaches, fall in this group.

Most email marketing firms provide their own **proprietary email builders** that can be classified using the above criteria.
Some of them provide both "template defined email" and "editor defined email" editors (e.g: MailChimp and MailerLite have both kind of editors). They probably found that there is not one single right way to do this.

CampaignMonitor was used to provide a "template based" editor and published their template language, too, but now they ship a new editor using a "template based"+"double level" solution but they **didn't publish the template language** and they **don't let you upload your own template**.

