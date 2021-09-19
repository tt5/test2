
const { build } = require("estrella")
build({
  entry: "../index.js",
  outfile: "index.js",
  bundle: true,
  // pass any options to esbuild here...
})
