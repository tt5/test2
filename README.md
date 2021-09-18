vite

(in other terminal)
chmod +x build.sh
./build.sh

(... download, ..., bundle manually)

cp index.js bundle/entry.js
cp js/ bundle/
cd bundle
node build.js
cp html/markdown/ dist/
cp index.css dist/
cp index.html dist/
cp alpine.js dist/
