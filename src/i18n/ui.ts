import { en } from './en';
import { es } from './es';
import { pt } from './pt';

export const languages = {
    en: 'EN',
    es: 'ES',
    pt: 'PT'
};

export const defaultLang = 'en';

export const ui = {
    en,
    es,
    pt
} as const;

export const routes = {
    es: {
        'industries': 'industrias',
    },
}

export const showDefaultLang = false;