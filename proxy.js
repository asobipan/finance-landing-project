let browserSync = require("browser-sync").create();

browserSync.init({
  proxy: "http://site.com",
  serveStatic: ["build"],
  files: ["build/**/*.*"],
  rewriteRules: [
    {
      match: /<\/head>/i,
      fn: (req, res, match) => `<link rel="stylesheet" href="/custom.css" />`,
    },
    {
      match: /<\/body>/i,
      fn: (req, res, match) => `<script async src="/scripts.js"></script>`,
    },
  ],
});
