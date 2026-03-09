import { en } from './en';
import { cs } from './cs';

export type Lang = 'en' | 'cs';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, cs };

export function t(lang: Lang): Translations {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split('/');
  if (langSegment === 'en') return 'en';
  return 'cs';
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const pathname = url.pathname;
  const currentLang = getLangFromUrl(url);

  if (currentLang === targetLang) return pathname;

  // Map CS paths to EN paths and vice versa
  const pathMappings: Record<string, string> = {
    '/cs/': '/en/',
    '/en/': '/cs/',
    '/cs/sluzby/': '/en/services/',
    '/en/services/': '/cs/sluzby/',
    '/cs/sluzby/ai-systemy/': '/en/services/ai-systems/',
    '/en/services/ai-systems/': '/cs/sluzby/ai-systemy/',
    '/cs/sluzby/architektura/': '/en/services/architecture/',
    '/en/services/architecture/': '/cs/sluzby/architektura/',
    '/cs/sluzby/hu-cz/': '/en/services/hu-cz/',
    '/en/services/hu-cz/': '/cs/sluzby/hu-cz/',
    '/cs/o-nas/': '/en/about/',
    '/en/about/': '/cs/o-nas/',
    '/cs/kontakt/': '/en/contact/',
    '/en/contact/': '/cs/kontakt/',
  };

  // Normalize pathname (ensure trailing slash)
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  return pathMappings[normalized] || (targetLang === 'en' ? '/en/' : '/cs/');
}
