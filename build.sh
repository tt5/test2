ls markdown/*.md | node ./jshint.js
npx rexreplace '²s¹' '&#x002a;' html/markdown/regex-C.html
npx rexreplace '²q¹' '&nbsp;&nbsp;&nbsp;&nbsp;' html/markdown/regex-C.html

npx sass -q css/index.scss index.css
npx pug index.pug
