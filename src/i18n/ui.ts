import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import { de } from './de';

export const languages = {
    en: 'EN',
    es: 'ES',
    pt: 'PT',
    de: 'DE'
};

export const defaultLang = 'en';

export const ui = {
    en,
    es,
    pt,
    de
} as const;

export const routes = {
    es: {
        'industries': 'industrias',
    },
}

export const showDefaultLang = false;