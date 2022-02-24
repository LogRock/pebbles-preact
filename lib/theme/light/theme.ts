import Theme from "../../types/theme";
import { neutral, error, primary, secondary, shades, success, warning } from "./colors";
import { displayLarge, displaySmall, headingH1, headingH2, headingH3, headingH4, headingH5, headingH6, overlineLarge, overlineSmall, paragraphLarge, paragraphMedium, paragraphSmall, paragraphXSmall } from "./typography"
import { sunburst, blueMoon, blueberryWine,cherryCola,coldSky,darkWineSea,morningSakura,oliveGarden,synthwave,teaLeaves } from "./gradients";

const theme: Theme = {
  name: "light",
  spacings: {
    xxsm: '4px',
    xsm: '8px',
    sm: '12px',
    md: '16px',
    big: '20px',
    xbig: '24px',
    xxbig: '28px',
    xxxbig: '32px',
    lg: '40px',
    xlg: '48px',
    xxlg: '64px',
    xxxlg: '80px',
    huge: '96px',
    xhuge: '128px',
    xxhuge: '160px',
    xxxhuge:'192px', 
  },
  colors: {
    neutral,
    primary,
    secondary,
    error,
    success,
    warning,
    shades
  },
  typography: {
    displayLarge,
    displaySmall,
    headingH1,
    headingH2,
    headingH3,
    headingH4,
    headingH5,
    headingH6,
    paragraphLarge,
    paragraphMedium,
    paragraphSmall,
    paragraphXSmall,
    overlineLarge,
    overlineSmall
  },
  shadows: {
    xSmall: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    small: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
    medium: '0px 4px 6px -1px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.1)',
    large: '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1)',
    xLarge: '0px 20px 25px -5px rgba(16, 24, 40, 0.1), 0px 8px 10px -6px rgba(16, 24, 40, 0.1)',
    xxLarge: '0px 25px 50px -12px rgba(16, 24, 40, 0.25)',
    upXSmall: '0px -1px 2px rgba(16, 24, 40, 0.05)',
    upXmall: '0px -1px 3px rgba(16, 24, 40, 0.1), 0px -1px 2px -1px rgba(16, 24, 40, 0.1)',
    upMedium: '0px -4px 6px -1px rgba(16, 24, 40, 0.1), 0px -2px 4px -2px rgba(16, 24, 40, 0.1)',
    upLarge: '0px -10px 15px -3px rgba(16, 24, 40, 0.1), 0px -4px 6px -4px rgba(16, 24, 40, 0.1)',
    upXLarge: '0px -20px 25px -5px rgba(16, 24, 40, 0.1), 0px -8px 10px -6px rgba(16, 24, 40, 0.1)',
    upXxLarge: '0px -25px 50px -12px rgba(16, 24, 40, 0.25)',
  },
  blurs: {
    none: '0',
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '40px',
  },
  gradients: {
    sunburst,
    blueMoon,
    blueberryWine,
    cherryCola,
    coldSky,
    darkWineSea,
    morningSakura,
    oliveGarden,
    synthwave,
    teaLeaves
  }
}

export default theme