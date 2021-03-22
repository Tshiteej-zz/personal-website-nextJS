import { extendTheme, chakra } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  heading: `'Cormorant Unicase'`
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  "2xl": "70em"
});

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px"
  }
};

const customTheme = extendTheme(overrides);

export default customTheme;
