# Futuristic Menu Button

A futuristic circular menu button with light and dark themes, built with HTML, CSS and JavaScript.

**Live demo:** https://elhammohmand2006-stack.github.io/futuristic-radial-menu/

## Features

- A round knob in the center that opens and closes the menu with a click
- Circular menu with 6 icons: back, home, search, favorite, more and refresh
- The knob turns toward the icon you choose, and the chosen icon gets the accent color
- When the menu closes, the first option is selected again
- Two themes side by side: a light theme and a dark theme
- Soft 3D (neumorphism) look with inner and outer shadows
- Responsive layout: one column on small screens and two columns on wide screens

## Project files

```
futuristic-radial-menu/
├── index.html   # page structure and menu icons
├── style.css    # themes, circular layout and animations
└── script.js    # open and close logic
```

## Built with

- HTML, CSS and JavaScript (separate external files)
- [Font Awesome](https://fontawesome.com/) icons, loaded from a CDN (internet is needed to see the icons)

## Technical highlights

- CSS variables for the colors of each theme
- Icons placed on a circle with `rotate()` and `translateY()`
- Hidden radio inputs over the icons to choose one option
- The CSS `:has()` selector to rotate the knob to the checked option
- `classList.toggle()` and `classList.contains()` in JavaScript to open and close the menu
- Media queries for the responsive layout

## How to run

1. Download or clone this repository.
2. Open `index.html` in your browser.

## Author

Elham Mohmand
