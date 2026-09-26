import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import articles from '../content/articles.json';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.articles.find((a) => a.slug === slug);
  if (!article) {
    return (
      <section className="bg-white pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <h1 className="text-h1 text-coz-black">Article not found</h1>
          <Link to="/blog" className="text-coz-gold-dark hover:underline underline-offset-4 mt-4 inline-block">← Back to the blog</Link>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-white pt-[clamp(80px,10vh,140px)] pb-section">
      <div className="max-w-[760px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-[0.875rem] mb-3">
            <Link to="/blog" className="text-coz-gold-dark hover:underline underline-offset-4">Blog</Link>
            <span className="text-coz-slate"> · {article.date}</span>
          </p>
          <h1 className="text-h1 text-coz-black">{article.title}</h1>
          <p className="text-body-lg text-coz-slate mt-4">{article.description}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <article
            className="mt-10 text-[1rem] text-coz-slate leading-[1.75] space-y-5
              [&_h2]:text-h3 [&_h2]:text-coz-black [&_h2]:mt-9 [&_h2]:mb-3
              [&_a]:text-coz-gold-dark [&_a]:hover:underline [&_a]:underline-offset-4
              [&_strong]:text-coz-black"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-12 p-6 rounded-xl bg-coz-surface">
            <p className="text-[0.875rem] text-coz-slate">
              More: <Link to="/roadmap" className="text-coz-gold-dark hover:underline underline-offset-4">the roadmap</Link>,{' '}
              <Link to="/changelog" className="text-coz-gold-dark hover:underline underline-offset-4">the changelog</Link>, and{' '}
              <Link to="/aegis" className="text-coz-gold-dark hover:underline underline-offset-4">AEGIS</Link>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
