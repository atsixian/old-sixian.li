import { tailwind } from "@theme-ui/presets";
import "typeface-spectral";

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(78,78,78, 0.15) 0px ${v} ${v} 0px`);

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [6, 7, 8],
    mt: 2
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [4, 5, 6],
    mt: 2
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [3, 4, 5],
    mt: 4
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [2, 3, 4]
  },
  h5: {
    ...tailwind.styles.h5,
    color: `heading`,
    fontSize: [1, 2, 3]
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 1,
    mb: 2
  }
};

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.orange[6],
    secondary: tailwind.colors.orange[7],
    toggleIcon: tailwind.colors.blue[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        primary: tailwind.colors.gray[3],
        secondary: tailwind.colors.orange[4],
        toggleIcon: `#F5D76E`,
        background: `#1A202C`,
        heading: tailwind.colors.indigo[3],
        divide: tailwind.colors.indigo[3]
      }
    }
  },
  fonts: {
    ...tailwind.fonts,
    heading: `Spectral, serif`,
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
  },
  styles: {
    img: {
      maxWidth: `100%`,
      height: `auto`,
      borderRadius: 3,
      boxShadow: shadow.join(",")
    },
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`
    },
    p: {
      fontSize: [1, 2, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35
    },
    ...headingStyles,
    Container: {
      padding: [3, 4, 5]
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`
      }
    },
    li: {
      fontSize: [1, 2, 2],
      color: `text`
    }
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`
    }
  },
  images: {
    avatar: {
      width: 200,
      height: 200,
      position: `center`
    }
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3
    }
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`
      },
      ":focus": {
        color: `heading`
      }
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`
    }
  }
};
