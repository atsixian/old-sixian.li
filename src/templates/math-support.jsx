import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <Helmet>
    <link
      key="1"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.css"
      crossOrigin="anonymous"
    />
    <script
      key="2"
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js"
      crossOrigin="anonymous"
    ></script>
    <script
      key="3"
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js"
      crossOrigin="anonymous"
      onLoad='renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ]
  })'
    ></script>
    ,
    <script
      key="5"
      async
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS-MML_HTMLorMML"
      dangerouslySetInnerHTML={{
        __html: `MathJax.Hub.Queue(["Typeset", MathJax.Hub]);`
      }}
    ></script>
  </Helmet>
);
