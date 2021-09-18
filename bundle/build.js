
const { build } = require("estrella")
build({
  entry: "../entry.js",
  outfile: "index.js",
  bundle: true,
  // pass any options to esbuild here...
})
