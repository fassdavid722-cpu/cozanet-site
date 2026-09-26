import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import articles from '../content/articles.json';

export default function BlogPage() {
  return (
    <section className="bg-white pt-[clamp(80px,10vh,140px)] pb-section">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-gold-light text-coz-gold-dark mb-6">
            Blog
          </span>
          <h1 className="text-h1 text-coz-black">Technical articles</h1>
          <p className="text-body-lg text-coz-slate max-w-[680px] mt-4">
            Writing about financial infrastructure, smart routing, and building AEGIS.
            Every article states what is live, in development, or planned.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 max-w-[860px]">
          {articles.articles.map((a, i) => (
            <ScrollReveal key={a.slug} delay={i * 0.06}>
              <Link to={`/blog/${a.slug}`} className="block p-6 rounded-xl bg-coz-surface hover:border-coz-gold transition-colors">
                <p className="text-[0.75rem] text-coz-slate mb-1.5">{a.date}</p>
                <h2 className="text-h3 text-coz-black mb-2">{a.title}</h2>
                <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{a.description}</p>
                <p className="text-[0.875rem] text-coz-gold-dark mt-3">Read article →</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
