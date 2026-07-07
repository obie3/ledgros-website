import { Glyph } from './icons/Glyph';
import { features } from '@/data/content';
import s from './Features.module.css';

export function Features() {
  return (
    <section id="features" className="section">
      <header className="section-head">
        <p className="eyebrow">Features</p>
        <h2>
          Everything your books need.
          <br />
          Nothing they don't.
        </h2>
        <p className="section-sub">
          Built for the way real people earn — invoices late, receipts
          crumpled, currencies mixed. vLedgr keeps up so you don't have to.
        </p>
      </header>

      <div className={s.grid}>
        {features.map((f) => (
          <article key={f.title} className={s.card}>
            <div className={s.icon}>
              <Glyph name={f.icon} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
