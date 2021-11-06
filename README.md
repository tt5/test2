# Markdown reader

npx pug index.pug
npx vite

m4 def.m4 -F defm4
./build

# bundle

```bash
npx vite build
cp katex.js dist/
cp auto-render.js dist/
cd dist
mkdir -p html/topics
cp ../html/topics/*.html html/topics/
mkdir -p html/markdown
cp ../html/markdown/*-C.html html/markdown/
mkdir partials
cp ../partials/start-C.html partials/

npx vite preview
```
