---
layout: default
title: Common Questions
workshop: Interactive HTML + JavaScript
section: Instructor Notes
---

# Interactive HTML + JavaScript Common Questions

Keep answers short and friendly. Add detail only if students ask for more.

## **"What's the difference between HTML, CSS, and JavaScript?"**

HTML is the structure (the content), CSS is the style (how it looks), and
JavaScript is the behavior (how it responds).

*If they want more*: HTML is the skeleton, CSS is the clothes, JavaScript is the
brain and muscles.

## **"Why isn't my page updating?"**

Most likely the file isn't saved or the browser wasn't refreshed. Save your
files (Ctrl+S / Cmd+S) and refresh the browser.

*If they want more*: If it still doesn't update, check if `script.js` and
`styles.css` are linked correctly.

## **"Why does querySelector give me null?"**

It means JavaScript can't find the element. Check that the selector matches the
`id` or `class` in HTML and that you used `#` for IDs and `.` for classes.

*If they want more*: JavaScript runs top-to-bottom, so the script tag should be
at the bottom of the HTML or use `defer`.

## **"Input and textarea feel the same. What's the difference?"**

`input` is for short, single-line text. `textarea` is for longer, multi-line
messages.

*If they want more*: `textarea` lets users press Enter for new lines.

## **"Why does my box size not change?"**

Make sure you're adding `px` when you set size in JavaScript. Numbers need units
for CSS styles.

*If they want more*: `element.style.width = size + "px"` tells the browser what
unit to use.

## **"Can I use any color names in CSS?"**

Yes, CSS supports color names, hex codes, and rgb values. Today we use theme
classes to keep it simple.

*If they want more*: `#2563eb` is a hex color; `rgb(37, 99, 235)` is another
format for the same color.

## **"Why doesn't my JavaScript run?"**

Check that your `<script src="script.js"></script>` tag is correct and the file
name matches exactly.

*If they want more*: The script tag should be placed just before `</body>` so
the HTML loads first.

## **"Can I add a button instead of live updates?"**

Yes! You can use a button and listen for `click`. We start with live updates
because it feels instant and simple.

*If they want more*: `button.addEventListener("click", updatePreview);` works
the same way as `input` events.

## Teaching Notes for Instructors

Encourage students to read the screen and test often. Remind them that errors
are normal and that refreshing the page is part of the loop.
