#!/bin/bash
make

npx sass -q css/index.scss index.css
npx pug index.pug
