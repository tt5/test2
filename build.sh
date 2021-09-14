#!/bin/jsh
showdown makehtml -e showdown-highlight -i markdown/base.md -o markdown/html/base.html

showdown makehtml -e showdown-highlight -i markdown/page2.md -o markdown/html/page2.html


sass index.scss index.css
pug index.pug