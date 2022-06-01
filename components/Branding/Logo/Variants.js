import * as colors from 'common/styles/themeMap';
/* eslint-disable class-methods-use-this */
export class Variants {
  constructor(props) {
    const { theme, medalOnly } = props;
    this.medalOnly = Boolean(medalOnly);
    switch (theme) {
      case 'red':
        return this.red();
      case 'blue':
        return this.blue();
      case 'white':
        return this.white();
      default:
        return this.slate();
    }
  }

  slate = () => ({
    operationFill: Variants.colorObj(colors.slate, colors.slate),
    codeFill: Variants.colorObj(colors.slate, colors.slate),
    medalFill: Variants.colorObj(colors.slate, colors.slate),
    starFill: Variants.colorObj(colors.white, colors.white),
  });

  red() {
    return {
      operationFill: Variants.colorObj(),
      codeFill: Variants.colorObj(colors.red, colors.red),
      medalFill: this.medalOnly ? Variants.colorObj(colors.red, colors.red) : Variants.colorObj(),
      starFill: Variants.colorObj(colors.white, colors.white),
    };
  }

  blue() {
    return {
      operationFill: Variants.colorObj(),
      codeFill: Variants.colorObj(colors.primary, colors.primary),
      medalFill: this.medalOnly
        ? Variants.colorObj(colors.primary, colors.primary)
        : Variants.colorObj(),
      starFill: Variants.colorObj(colors.white, colors.white),
    };
  }

  white() {
    return {
      operationFill: Variants.colorObj(colors.gray, colors.white),
      codeFill: Variants.colorObj(colors.gray, colors.white),
      medalFill: Variants.colorObj(colors.white, colors.white),
      starFill: Variants.colorObj(colors.slate, colors.slate),
    };
  }

  // Use this to extend the theme
  // ex: class PurpleVariant extends Variants { purple() { return Variants.colorObj(dark,light) }
  static colorObj(dark = colors.slate, light = colors.slate) {
    return { dark, light };
  }
}
