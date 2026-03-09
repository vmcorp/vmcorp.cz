import { en } from './en';
import { cs } from './cs';

export type Lang = 'en' | 'cs';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, cs };

export function t(lang: Lang): Translations {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  return 'cs';
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const pathname = url.pathname;
  const currentLang = getLangFromUrl(url);

  if (currentLang === targetLang) return pathname;

  // Map CS paths (root) to EN paths (/en/) and vice versa
  const pathMappings: Record<string, string> = {
    '/': '/en/',
    '/en/': '/',
    '/sluzby/': '/en/services/',
    '/en/services/': '/sluzby/',
    '/sluzby/ai-systemy/': '/en/services/ai-systems/',
    '/en/services/ai-systems/': '/sluzby/ai-systemy/',
    '/sluzby/architektura/': '/en/services/architecture/',
    '/en/services/architecture/': '/sluzby/architektura/',
    '/sluzby/hu-cz/': '/en/services/hu-cz/',
    '/en/services/hu-cz/': '/sluzby/hu-cz/',
    '/o-nas/': '/en/about/',
    '/en/about/': '/o-nas/',
    '/kontakt/': '/en/contact/',
    '/en/contact/': '/kontakt/',
  };

  // Normalize pathname (ensure trailing slash)
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  return pathMappings[normalized] || (targetLang === 'en' ? '/en/' : '/');
}
