---
layout: default
title: Timing Guide
workshop: Interactive HTML + JavaScript
section: Instructor Notes
---

# Interactive HTML + JavaScript Timing Guide (2 Hours)

**Audience**: 12-14 year-olds, beginners or returning from JavaScript Basics. \
**Goal**: connect HTML inputs to JavaScript and update the DOM in real time. \
Keep the energy upbeat; celebrate small wins and frequent refreshes.

## 0:00-0:10 - Welcome & Web Interactions Icebreaker

- **Objective**: set an interactive tone, lower anxiety.
- **Prompt**: "What website lets you customize something?"
- **Materials**: slides, finished message box example ready to demo.
- **Tip**: show the finished page early so they know the target.
- **Watch for**: students who missed JavaScript Basics; pair with a returning student.

## 0:10-0:25 - HTML Structure + Form Controls

- **Objective**: build a simple form layout with labels and inputs.
- **Flow**:
  1. Review tags and elements
  2. Add labels with `for` attributes
  3. Add `input`, `textarea`, and `select` controls
  4. Add a preview box with title + message
- **Watch for**:
  - Missing `id` on inputs
  - Labels not connected to inputs
  - Students typing tags without closing them
- **Tip**: remind them to save and refresh often.

## 0:25-0:40 - CSS for a Styled Message Box

- **Objective**: make the preview area look like a real UI widget.
- **Demo**: show padding, borders, rounded corners, and background colors.
- **Flow**:
  1. Base styles for the preview box
  2. Theme classes for colors
  3. Layout spacing for the form
- **Watch for**:
  - Missing class names
  - Forgetting to link `styles.css`
  - No visible change after refresh (cache or file not saved)

## 0:40-0:55 - JavaScript + DOM Basics

- **Objective**: read input values and update the preview.
- **Key concepts**:
  - `document.querySelector`
  - `textContent`
  - `className`
  - `input` and `change` events
- **Flow**:
  1. Select elements
  2. Write `updatePreview()`
  3. Add event listeners
  4. Call the function once to set defaults
- **Watch for**:
  - `null` errors from incorrect selectors
  - Missing quotes in querySelector
  - Forgetting to call `updatePreview()`

## 0:55-1:05 - Break

- Encourage students to move and rest their eyes.
- Use the break to check in with anyone who is behind.

## 1:05-1:15 - Project Intro

- **Objective**: clarify the mission and file structure.
- **Show**:
  - Final example in the browser
  - Starter files: `index.html`, `styles.css`, `script.js`
  - Live refresh workflow
- **Tip**: repeat the mantra, "Save and refresh." 

## 1:15-1:45 - Hands-On Build

- **Objective**: complete the message box interactivity.
- **Your role**: circulate, ask questions, and model debugging.
- **Common issues**:
  - Typo in element IDs
  - Using `innerHTML` instead of `textContent`
  - Reading `.value` before selecting the element
  - Entering a box size with no units
- **Fast finishers**:
  - Add character counter
  - Add a reset button
  - Add a new theme color

## 1:45-1:55 - Save Work + Share

- **Objective**: save work and celebrate.
- **Git flow**:
  ```bash
  git add .
  git commit -m "Complete message box"
  git push
  ```
- **Show-and-tell**: invite volunteers to demo their custom themes.

## 1:55-2:00 - Wrap-Up & Teaser

- **Prompts**:
  - "What part felt most powerful today?"
  - "Where else could you use input + output on a website?"
- **Bridge**: "Next workshop, we move to Python and build full programs."

## General Tips Throughout

- **Type slowly** and narrate each step.
- **Normalize errors**: show how to debug calmly.
- **Ask students to predict** what the page will do before refreshing.
- **Celebrate creativity**: colors, text, and layout choices.
