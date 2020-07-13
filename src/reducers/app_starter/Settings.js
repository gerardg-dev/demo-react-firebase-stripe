import {
  CHANGE_DIRECTION,
  CHANGE_NAVIGATION_STYLE,
  DARK_THEME,
  DRAWER_TYPE,
  FIXED_DRAWER,
  HORIZONTAL_MENU_POSITION,
  INSIDE_THE_HEADER,
  SWITCH_LANGUAGE,
  THEME_COLOR,
  TOGGLE_COLLAPSED_NAV,
  VERTICAL_NAVIGATION,
  WINDOW_WIDTH
} from 'constants/app_starter/ActionTypes';
import {DARK_INDIGO} from 'constants/app_starter/ThemeColors';

import localStorageItems from "../../localStorage/app_starter";

const rltLocale = ['ar'];
const initialSettings = {
  navCollapsed: false,
  drawerType: FIXED_DRAWER,
  themeColor: DARK_INDIGO,
  darkTheme: false,
  width: window.innerWidth,
  isDirectionRTL: false,
  navigationStyle: VERTICAL_NAVIGATION,
  horizontalNavPosition: INSIDE_THE_HEADER,
  locale: {
    languageId: 'english',
    locale: 'en',
    // locale: localStorage.getItem(localStorageItems.locale),
    name: 'English',
    icon: 'us'
  }
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        navCollapsed: false
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.isNavCollapsed
      };
    case DRAWER_TYPE:
      return {
        ...state,
        drawerType: action.drawerType
      };
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width
      };
    case THEME_COLOR:
      return {
        ...state,
        darkTheme: false,
        themeColor: action.color
      };
    case DARK_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme
      };
    case SWITCH_LANGUAGE:

      return {
        ...state,
        locale: action.payload,
        isDirectionRTL: rltLocale.includes(action.payload.locale)

      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        isDirectionRTL: !state.isDirectionRTL

      };

    case CHANGE_NAVIGATION_STYLE:
      return {
        ...state,
        navigationStyle: action.payload
      };


    case HORIZONTAL_MENU_POSITION:
      return {
        ...state,
        horizontalNavPosition: action.payload
      };


    default:
      return state;
  }
};

export default settings;

// -----------------------------------------------------------------------------
//
// var allLanguages = [
//   "af",
//   "sq",
//   "ar",
//   "ar-SA",
//   "ar-IQ",
//   "ar-EG",
//   "ar-LY",
//   "ar-DZ",
//   "ar-MA",
//   "ar-TN",
//   "ar-OM",
//   "ar-YE",
//   "ar-SY",
//   "ar-JO",
//   "ar-LB",
//   "ar-KW",
//   "ar-AE",
//   "ar-BH",
//   "ar-QA",
//   "eu",
//   "bg",
//   "be",
//   "ca",
//   "zh",
//   "zh-TW",
//   "zh-CN",
//   "zh-HK",
//   "zh-SG",
//   "hr",
//   "cs",
//   "da",
//   "nl",
//   "nl-BE",
//   "en",
//   "en-US",
//   "en-EG",
//   "en-AU",
//   "en-GB",
//   "en-CA",
//   "en-NZ",
//   "en-IE",
//   "en-ZA",
//   "en-JM",
//   "en-BZ",
//   "en-TT",
//   "et",
//   "fo",
//   "fa",
//   "fi",
//   "fr",
//   "fr-BE",
//   "fr-CA",
//   "fr-CH",
//   "fr-LU",
//   "gd",
//   "gd-IE",
//   "de",
//   "de-CH",
//   "de-AT",
//   "de-LU",
//   "de-LI",
//   "el",
//   "he",
//   "hi",
//   "hu",
//   "is",
//   "id",
//   "it",
//   "it-CH",
//   "ja",
//   "ko",
//   "lv",
//   "lt",
//   "mk",
//   "mt",
//   "no",
//   "pl",
//   "pt-BR",
//   "pt",
//   "rm",
//   "ro",
//   "ro-MO",
//   "ru",
//   "ru-MI",
//   "sz",
//   "sr",
//   "sk",
//   "sl",
//   "sb",
//   "es",
//   "es-AR",
//   "es-GT",
//   "es-CR",
//   "es-PA",
//   "es-DO",
//   "es-MX",
//   "es-VE",
//   "es-CO",
//   "es-PE",
//   "es-EC",
//   "es-CL",
//   "es-UY",
//   "es-PY",
//   "es-BO",
//   "es-SV",
//   "es-HN",
//   "es-NI",
//   "es-PR",
//   "sx",
//   "sv",
//   "sv-FI",
//   "th",
//   "ts",
//   "tn",
//   "tr",
//   "uk",
//   "ur",
//   "ve",
//   "vi",
//   "xh",
//   "ji",
//   "zu"
// ];
//
// var arVariants = [
//   "ar-SA",
//   "ar-IQ",
//   "ar-EG",
//   "ar-LY",
//   "ar-DZ",
//   "ar-MA",
//   "ar-TN",
//   "ar-OM",
//   "ar-YE",
//   "ar-SY",
//   "ar-JO",
//   "ar-LB",
//   "ar-KW",
//   "ar-AE",
//   "ar-BH",
//   "ar-QA"
// ];
// var zhVariants = ["zh-TW", "zh-CN", "zh-HK", "zh-SG"];
// var nlVariants = ["nl-BE"];
// var enVariants = [
//   "en-US",
//   "en-EG",
//   "en-AU",
//   "en-GB",
//   "en-CA",
//   "en-NZ",
//   "en-IE",
//   "en-ZA",
//   "en-JM",
//   "en-BZ",
//   "en-TT"
// ];
// var frVariants = ["fr-BE", "fr-CA", "fr-CH", "fr-LU"];
// var gdVariants = ["gd-IE"];
// var deVariants = ["de-CH", "de-AT", "de-LU", "de-LI"];
// var itVariants = ["it-CH"];
// var ptVariants = ["pt-BR"];
// var roVariants = ["ro-MO"];
// var ruVariants = ["ru-MI"];
// var esVariants = [
//   "es-AR",
//   "es-GT",
//   "es-CR",
//   "es-PA",
//   "es-DO",
//   "es-MX",
//   "es-VE",
//   "es-CO",
//   "es-PE",
//   "es-EC",
//   "es-CL",
//   "es-UY",
//   "es-PY",
//   "es-BO",
//   "es-SV",
//   "es-HN",
//   "es-NI",
//   "es-PR"
// ];
// var svVariants = ["sv-FI"];
//
// -----------------------------------------------------------------------------
//
// arVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "ar";
// });
// zhVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "zh";
// });
// nlVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "nl";
// });
// enVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "en";
// });
// frVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "fr";
// });
// gdVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "gd";
// });
// deVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "de";
// });
// itVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "it";
// });
// ptVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "pt";
// });
// roVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "ro";
// });
// ruVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "ru";
// });
// esVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "es";
// });
// svVariants.map(langVariant => {
//   if (lang.toString() === langVariant.toString()) lang = "sv";
// });
//
// -----------------------------------------------------------------------------
