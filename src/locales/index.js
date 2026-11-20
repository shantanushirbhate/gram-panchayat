
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Automatically import all JSON translation files.
const translationFiles = import.meta.glob("./**/*.json", {
  eager: true,
  import: "default",
});

// Supported languages.
const supportedLanguages = ["en", "mr"];

// Translation resources.
const resources = {
  en: {},
  mr: {},
};

// Files whose translations should be merged into common.
const commonMergeFiles = [
  "transparency/finance",
  "transparency/works",
  "transparency/gramSabha",
  "educationParyavaran/environment",
  "educationParyavaran/information",
  "youth",
  "samitiya",
  "services/notices",
  "services/citizen",
  "services/schemes",
  "services/rti",
];

// Deep merge helper to preserve nested translations.
const deepMerge = (target, source) => {
  Object.entries(source).forEach(([key, sourceValue]) => {
    const targetValue = target[key];

    if (
      targetValue &&
      sourceValue &&
      typeof targetValue === "object" &&
      typeof sourceValue === "object" &&
      !Array.isArray(targetValue) &&
      !Array.isArray(sourceValue)
    ) {
      target[key] = deepMerge({ ...targetValue }, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};

// Load and register translation files.
Object.entries(translationFiles).forEach(([path, translation]) => {
  const relativePath = path.replace(/^\.\/|\.json$/g, "");
  const pathParts = relativePath.split("/");
  const language = pathParts[0];

  // Ignore unsupported languages.
  if (!supportedLanguages.includes(language)) {
    return;
  }

  // Determine namespace from file path.
  const namespace = pathParts.slice(1).join("/") || "common";

  resources[language][namespace] = translation;
});

// Merge selected translation files into common.
supportedLanguages.forEach((language) => {
  const common = {
    ...(resources[language].common || {}),
  };

  commonMergeFiles.forEach((namespace) => {
    const translation = resources[language][namespace];

    if (!translation) {
      return;
    }

    deepMerge(common, translation);
  });

  resources[language].common = common;
});

// Collect all available namespaces.
const namespaces = [
  ...new Set([
    ...Object.keys(resources.en),
    ...Object.keys(resources.mr),
  ]),
];

// Get saved language.
const savedLanguage = localStorage.getItem("language");

const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : "mr";

// Initialize i18next.
i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  defaultNS: "common",
  ns: namespaces,

  interpolation: {
    escapeValue: false,
  },

  returnEmptyString: false,

  react: {
    useSuspense: false,
  },
});

export default i18n;
