import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

/**
 * Lightweight SEO component for setting document title and meta description.
 * Uses direct DOM manipulation since the app is a SPA without react-helmet.
 */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    return () => {
      // Restore default title on unmount
      document.title = 'Cozanet';
    };
  }, [title, description]);

  return null;
}
