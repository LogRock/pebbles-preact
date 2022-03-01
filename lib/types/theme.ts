import * as CSS from "csstype";

interface Spacings {
  xxsm: CSS.Property.Width;
  xsm: CSS.Property.Width;
  sm: CSS.Property.Width;
  md: CSS.Property.Width;
  big: CSS.Property.Width;
  xbig: CSS.Property.Width;
  xxbig: CSS.Property.Width;
  xxxbig: CSS.Property.Width;
  lg: CSS.Property.Width;
  xlg: CSS.Property.Width;
  xxlg: CSS.Property.Width;
  xxxlg: CSS.Property.Width;
  huge: CSS.Property.Width;
  xhuge: CSS.Property.Width;
  xxhuge: CSS.Property.Width;
  xxxhuge: CSS.Property.Width;
}

interface Color {
  50: CSS.Property.Color;
  100: CSS.Property.Color;
  200: CSS.Property.Color;
  300: CSS.Property.Color;
  400: CSS.Property.Color;
  500: CSS.Property.Color;
  600: CSS.Property.Color;
  700: CSS.Property.Color;
  800: CSS.Property.Color;
  900: CSS.Property.Color;
}

interface Colors {
  neutral: Color;
  primary: Color;
  secondary: Color;
  success: Color;
  warning: Color;
  error: Color;
  shades: {
    0: CSS.Property.Color;
    100: CSS.Property.Color;
  };
}

interface HeaderProps {
  fontFamily: CSS.Property.FontFamily;
  desktop: {
    weights: {
      normal: CSS.Property.FontWeight;
      bold: CSS.Property.FontWeight;
      bolder: CSS.Property.FontWeight;
      boldest: CSS.Property.FontWeight;
    };
    fontSize: CSS.Property.FontSize;
    lineHeight: CSS.Property.LineHeight;
    tracking: CSS.Property.LetterSpacing;
  };
  mobile: {
    weights: {
      normal: CSS.Property.FontWeight;
      bold: CSS.Property.FontWeight;
      bolder: CSS.Property.FontWeight;
      boldest: CSS.Property.FontWeight;
    };
    fontSize: CSS.Property.FontSize;
    lineHeight: CSS.Property.LineHeight;
    tracking: CSS.Property.LetterSpacing;
  };
}

interface ParagraphProps {
  fontFamily: CSS.Property.FontFamily;
  fontSize: CSS.Property.FontSize;
  lineHeight: CSS.Property.LineHeight;
  weights: {
    normal: CSS.Property.FontWeight;
    bold: CSS.Property.FontWeight;
    bolder: CSS.Property.FontWeight;
  };
}

interface Typography {
  displayLarge: HeaderProps;
  displaySmall: HeaderProps;
  headingH1: HeaderProps;
  headingH2: HeaderProps;
  headingH3: HeaderProps;
  headingH4: HeaderProps;
  headingH5: HeaderProps;
  headingH6: HeaderProps;
  paragraphLarge: ParagraphProps;
  paragraphMedium: ParagraphProps;
  paragraphSmall: ParagraphProps;
  paragraphXSmall: ParagraphProps;
  overlineLarge: ParagraphProps;
  overlineMedium: ParagraphProps;
  overlineSmall: ParagraphProps;
}

interface Shadows {
  xSmall: CSS.Property.BoxShadow;
  small: CSS.Property.BoxShadow;
  medium: CSS.Property.BoxShadow;
  large: CSS.Property.BoxShadow;
  xLarge: CSS.Property.BoxShadow;
  xxLarge: CSS.Property.BoxShadow;
  upXSmall: CSS.Property.BoxShadow;
  upSmall: CSS.Property.BoxShadow;
  upMedium: CSS.Property.BoxShadow;
  upLarge: CSS.Property.BoxShadow;
  upXLarge: CSS.Property.BoxShadow;
  upXxLarge: CSS.Property.BoxShadow;
}

interface Blurs {
  none: CSS.Property.Width;
  small: CSS.Property.Width;
  medium: CSS.Property.Width;
  large: CSS.Property.Width;
  xLarge: CSS.Property.Width;
}

interface LinearGradient {
  background: CSS.Property.Background;
}

// interface MeshGradient {
//   background: CSS.Property.BackgroundColor;
//   mesh: CSS.Property.BackgroundImage;
// }

interface Gradients {
  sunburst: LinearGradient;
  darkWineSea: LinearGradient;
  cherryCola: LinearGradient;
  coldSky: LinearGradient;
  oliveGarden: LinearGradient;
  morningSakura: LinearGradient;
  blueMoon: LinearGradient;
  synthwave: LinearGradient;
  teaLeaves: LinearGradient;
  blueberryWine: LinearGradient;
  // chillNight: MeshGradient
  // sunrise: MeshGradient
  // kingCrimsom: MeshGradient
  // crazyDiamond: MeshGradient
  // sunsetOverdrive: MeshGradient
  // auroraBorealis: MeshGradient
  // emeraldSplash: MeshGradient
  // overcast: MeshGradient
  // feverish: MeshGradient
  // spriteCrush: MeshGradient
}

export default interface Theme {
  breakpoints: {
    mobile: string;
    desktop: string;
  };
  name: string;
  spacings: Spacings;
  colors: Colors;
  typography: Typography;
  shadows: Shadows;
  blurs: Blurs;
  gradients: Gradients;
}
