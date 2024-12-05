import { en } from './en';
import { es } from './es';

export const languages = {
    en: 'EN',
    es: 'ES',
};

export const defaultLang = 'en';

export const ui = {
    en,
    es,
} as const;

export const routes = {
    es: {
        'industries': 'industrias',
    },
}

export const showDefaultLang = false;