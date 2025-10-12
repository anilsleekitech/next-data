import ResourcesDetail from '@/components/ResourcesDetail';
import EnglishToLangTranslation from '@/components/EnglishToLangTranslation';
import fullDataset from '../data/howWeHelpData.json';

/**
 * @typedef {Object} Props
 * @property {string[]} params.slug
 * @property {boolean} [isTranslation]
 * @property {string} [toLang]
 * @property {Object} [item]
 * @property {Object[]} [relatedPosts]
 */

export default function Page({ isTranslation, toLang, item, relatedPosts }) {
  if (isTranslation) {
    return <EnglishToLangTranslation />;
  }
  return <ResourcesDetail item={item} relatedPosts={relatedPosts} />;
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const link = Array.isArray(slug) ? slug.filter(Boolean).join('/') : (typeof slug === 'string' ? slug : '');

  // Define supported languages for matching
  const supportedLanguages = [
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
  ];

  // Check if current path is translation/transliteration route
  const langs = supportedLanguages.join('|');
  const re = new RegExp(`^english-to-(${langs})-(translation|transliteration)/?$`, 'i');
  const match = link.match(re);
  if (match) {
    const [, toLang] = match;
    return {
      props: {
        isTranslation: true,
        toLang,
      },
    };
  }

  // Find item
  const findItem = () => {
    const cleanLink = link.replace(/^\/+|\/+$/g, '');
    const foundItem = fullDataset?.howWeHelpCards?.find((item) => {
      if (!item) return false;

      // Clean and compare the item's link
      if (item.link) {
        const itemLink = item.link.replace(/^\/+|\/+$/g, '');
        if (itemLink === cleanLink) {
          return true;
        }
      }

      // Try matching by title if link doesn't match
      const itemTitle = item.title || '';
      const titleAsLink = itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const cleanTitleLink = titleAsLink.replace(/^\/+|\/+$/g, '');

      if (cleanTitleLink === cleanLink) {
        return true;
      }
      return false;
    });

    return foundItem;
  };

  const item = findItem();

  if (!item) {
    return {
      notFound: true,
    };
  }

  // Compute related posts
  const relatedPosts = fullDataset.howWeHelpCards
    .filter((post) => post.type === item.type && post.id !== item.id)
    .slice(0, 3);

  return {
    props: {
      item,
      relatedPosts,
    },
  };
}
