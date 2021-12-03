import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    // mode
    // base: "dark",

    // colorPrimary: BrandColors.SOHO_LIGHTS_PINK,
    // colorSecondary: BrandColors.SKY_BLUE,

    // UI
    // appBg: BrandColors.HEMOCYANIN,
    // appContentBg: BrandColors.SIPHON,
    // appBorderColor: BrandColors.HEMOCYANIN,
    appBorderRadius: 4,

    // Typography
    fontBase: '"Gotham", sans-serif',
    fontCode: "monospace",

    // Text colors
    // textColor: BrandColors.WHITE,
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    // barTextColor: BrandColors.WHITE,
    // barSelectedColor: BrandColors.SIPHON,
    // barBg: BrandColors.SOHO_LIGHTS_PINK,

    // Form colors
    // inputBg: BrandColors.WHITE,
    inputBorder: "rgba(255, 255, 255, 0.2)",
    // inputTextColor: BrandColors.HEMOCYANIN,
    inputBorderRadius: 4,

    brandTitle: "Octopus Energy U.S.",
    brandUrl: "https://octopusenergy.com",
    brandImage: "https://octopusenergy.com/images/logo.svg",
  }),
});
