---
layout: post
title:  Introducing HTMML and icon generation tool to improve master templates maintenance
date:   2018-03-02 18:00:00
categories: news
draft: true
---

We keep repeating one of the strengths of Mosaico is its template-based approach. This means that most options Mosaico gives you when you edit a template are not hardcoded in the Mosaico Library. Instead, they are defined in the "master template", by the template author.

A major design choice in the "template language" was that the template language is simply an extension to HTML, so that you can open a master template in your browser and see it. Of course you won't see what is editable, how blocks are defined, which variants are available for each block, but still it is valid HTML and can be inspected in the browser. This is a major advantage when you have a master template with few options, but you'll find repeating and copy and pasting a lot of html code if you want to create a full featured master template like our Versafix.

The repeating and copy and pasting tasks usually get you to more bugs, so while we updated our Versafix master template we decided to build a small generation tool to help with "deduplication" and maintenance.

### HTMML

We tested a lot of existing templating tools, but in the end they were too complex or not flexible enough, so we ended up writing our own minimal markup language in 300 lines of javascript code.

This allowed us to reduce our versafix HTML definition from 200KB to 50KB and use "cascading" to reduce code duplication. It's like CSS but for HTML tags/attributes, instead of styles and with the ability to define new tags.

The markup documentation is self-contained in the [project README](https://github.com/voidlabs/htmml)

So HTMML let us generating the Mosaico template (including its own template language), but Mosaico will still use the same template language.

### Versafix Template project

Using HTMML we prepared an upgrade from our "hand-crafted" Versafix 1.0.6 template to our Versafix 1.1.16 and this also helped us identifying and fixing a few bugs in the versafix 1.0.6 template.

In a [previous post](https://github.com/voidlabs/versafix-template) we introduced the new Versafix master template

### Automatically generating icons

We also found that generating multiple variations of multiple social icons by manually working with image editing tools and dozens of layers took a lot of time and was error prone, so we also created and opensourced a script that help us automatically generating all of the social icons (70) that are used by the new Versafix template.

If you want to add new socials you can simply create a 512px square Black on White icon, add its name and brand color inside the small generation script (iconsDef array) and it will automatically prepare all of the variants.

If you want to create new style variants then things get harder because you will have to deal with ImageMagick processing directives, but once you created your style you will be able to generate and maintain all of the social icons using that style in few seconds.

This script is not tied to Mosaico or the Versafix template: you can use wherever you need to maintain a lot of icons with a lot of variants. Fork it and improve it!


