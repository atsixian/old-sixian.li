import React from "react";
import { Helmet } from "react-helmet";
export default () => (
  <Helmet>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.css"
      crossorigin="anonymous"
    />
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.js"
      crossorigin="anonymous"
    ></script>
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/contrib/auto-render.min.js"
      crossorigin="anonymous"
      onload="renderMathInElement(document.body);"
    ></script>
    <script
      type="text/javascript"
      async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js?config=TeX-MML-AM_CHTML"
    ></script>
  </Helmet>
);
