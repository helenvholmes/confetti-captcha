# Confetti Captcha

~~Infuritate~~ delight your users with this confetti captcha. (You have to clean up afterwards, though.)

## Demo

https://scooooooooby.github.io/confetti-captcha/

## Installation/Usage

1. Copy the `images` and `src` directories to your project
2. Put `<link href="src/fakerecaptcha.css" rel="stylesheet">` inside the `<head>` tag
3. Put `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>`
   and `<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>` right before the `</body>` closing tag
4. Put `<script src="src/fakerecaptcha.js"></script>` after the jQuery `script` tags
5. At the location where you'd like the fake captcha to be, put the HTML code from [index.html](https://github.com/scooooooooby/kasada/index.html)
6. Update L63 in `index.html` to have the blog post link
7. Update L4 in `fakerecaptcha.js` to have the blog post link

## Colophon

Uses [75a's fake captcha project](https://scooooooooby.github.io/confetti-captcha/), jQuery, and [fionnachan's confetti code](https://codepen.io/fionnachan/pen/EvaqOB) under the hood.
