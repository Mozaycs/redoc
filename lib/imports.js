//
// markdown-it package
//
import "highlight.js";
import punycode from "punycode";
import "markdown-it";

let hljs = require("highlight.js");
md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});