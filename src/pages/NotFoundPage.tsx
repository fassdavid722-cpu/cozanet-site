import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="bg-coz-black min-h-[70vh] flex items-center">
      <div className="max-w-content mx-auto px-6 py-section text-center">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">
          404
        </span>
        <h1 className="text-h1 text-white">This page doesn't exist.</h1>
        <p className="text-body-lg text-coz-slate-light mt-4 max-w-[520px] mx-auto">
          The page you're looking for may have moved or never existed. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/" className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow transition-all">
            Back to Home
          </Link>
          <Link to="/documentation" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium text-[0.9375rem] hover:border-coz-gold transition-colors">
            View Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
