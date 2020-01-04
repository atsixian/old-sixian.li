const React = require("react");
require("katex/dist/katex.min.css");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // <script
    //   key="1"
    //   type="module"
    //   type="text/javascript"
    //   dangerouslySetInnerHTML={{
    //     __html: `import katex from 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.mjs';`
    //   }}
    // ></script>,
    // <script
    //   key="2"
    //   noModule
    //   defer
    //   src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js"
    //   integrity="sha384-4z8mjH4yIpuK9dIQGR1JwbrfYsStrNK6MP+2Enhue4eyo0XlBDXOIPc8b6ZU0ajz"
    //   crossOrigin="anonymous"
    // ></script>,
    // <link
    //   key="3"
    //   rel="stylesheet"
    //   href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.css"
    //   integrity="sha384-bsHo4/LA+lkZv61JspMDQB9QP1TtO4IgOf2yYS+J6VdAYLVyx1c3XKcsHh0Vy8Ws"
    //   crossOrigin="anonymous"
    // ></link>,

    <link
      key="1"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.css"
      crossOrigin="anonymous"
    />,
    <script
      key="2"
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js"
      crossOrigin="anonymous"
    ></script>,
    <script
      key="4"
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/contrib/auto-render.min.js"
      crossOrigin="anonymous"
      onLoad='renderMathInElement(document.body, {
        delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
        ]
    })'
      onRefresh='renderMathInElement(document.body, {
        delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
        ]
    })'
    ></script>
  ]);
  //     <script
  //       key="5"
  //       type="text/javascript"
  //       src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS-MML_HTMLorMML"
  //     ></script>,
  //     <script
  //       key="6"
  //       type="text/x-mathjax-config"
  //       dangerouslySetInnerHTML={{
  //         __html: `MathJax.Hub.Config({
  //         tex2jax: {
  //             inlineMath: [ ["$","$"], ["\\(","\\)"] ],
  //             displayMath: [["$$", "$$"]],
  //             processEscapes: true
  //         }
  //     });
  //     MathJax.Hub.Queue(["Typeset",MathJax.Hub]);`
  //       }}
  //     ></script>
  //   ]);
};
