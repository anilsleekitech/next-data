import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import ResourcesDetail from '@/components/ResourcesDetail';
import EnglishToLangTranslation from '@/components/EnglishToLangTranslation';

export default function Page() {
  const router = useRouter();
  const slugParam = router.query?.slug;

  // Compute current path from catch-all slug
  const currentPath = useMemo(() => {
    const parts = Array.isArray(slugParam) ? slugParam : (typeof slugParam === 'string' ? [slugParam] : []);
    return '/' + parts.filter(Boolean).join('/');
  }, [JSON.stringify(router.query?.slug)]);

  // Define supported languages for matching
  const supportedLanguages = useMemo(
    () => [
      'hindi',
      'marathi',
      'tamil',
      'telugu',
      'kannada',
      'malayalam',
      'punjabi',
      'gujarati',
      'bengali',
      'odia',
      'assamese',
      'urdu',
    ],
    []
  );

  // Check if current path is translation/transliteration route
  const isEnglishToRoute = useMemo(() => {
    const langs = supportedLanguages.join('|');
    const re = new RegExp(`^/english-to-(${langs})-(translation|transliteration)/?$`, 'i');
    return re.test((currentPath || '').toLowerCase());
  }, [currentPath, supportedLanguages]);

  // For non-english routes, ensure ResourcesDetail receives a `link` query
  useEffect(() => {
    if (!router.isReady) return;
    if (isEnglishToRoute) return;

    const hasLink = typeof router.query?.link === 'string' && router.query.link.length > 0;
    if (!hasLink) {
      const parts = Array.isArray(slugParam) ? slugParam : (typeof slugParam === 'string' ? [slugParam] : []);
      const link = parts.filter(Boolean).join('/');
      router.replace(
        { pathname: router.pathname, query: { ...router.query, link } },
        undefined,
        { shallow: true }
      );
    }
  }, [router.isReady, isEnglishToRoute, JSON.stringify(router.query?.slug)]);

  if (isEnglishToRoute) {
    return <EnglishToLangTranslation />;
  }

  return <ResourcesDetail />;
}