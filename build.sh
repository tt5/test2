#!/bin/jsh
showdown makehtml -e showdown-highlight -i markdown/base.md -o markdown/html/base.html
sass index.scss index.css
pug index.pug