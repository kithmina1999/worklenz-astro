import { ui, defaultLang, showDefaultLang, routes, languages } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function useTranslatedPath(lang: keyof typeof languages) {
    // Dynamically create a regex to match any of the language keys
    const langRegex = new RegExp(`^/(${Object.keys(languages).join('|')})(/|$)`);

    return function translatePath(path: string, l: string = lang) {
        // Remove any existing language prefix
        const pathWithoutLang = path.replace(langRegex, "/");

        // Add the language prefix for non-default languages
        if (!showDefaultLang && l === defaultLang) {
            return pathWithoutLang; // No prefix for the default language
        }

        return `/${l}${pathWithoutLang}`;
    };
}
