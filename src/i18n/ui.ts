import { en } from './en';
import { es } from './es';

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

// export const ui = {
//     en: {
//         '404.body.info': 'The page you are looking for doesn’t exist.',
//         '404.body.link-text': 'Back to Home',
//     },
//     es: {
//         '404.body.info': 'La página que estás buscando no existe.',
//         '404.body.link-text': 'Volver a Inicio',
//     },
// } as const;

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