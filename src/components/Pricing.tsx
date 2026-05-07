import { Button } from './Button';
import { Check } from './icons/Check';
import { plans } from '@/data/content';
import s from './Pricing.module.css';

export function Pricing() {
  return (
    <section id="pricing" className="section section-alt">
      <header className="section-head">
        <p className="eyebrow">Pricing</p>
        <h2>Free forever. Pro when you grow.</h2>
        <p className="section-sub">
          Pay in naira. No card-on-file gotchas. Yearly saves you two months.
        </p>
      </header>

      <div className={s.grid}>
        {plans.map((p) => (
          <article
            key={p.name}
            className={`${s.card} ${p.highlight ? s.highlight : ''}`}
          >
            {p.badge && <span className={s.badge}>{p.badge}</span>}
            <h3 className={s.name}>{p.name}</h3>
            <div className={s.priceRow}>
              <span className={s.price}>{p.price}</span>
              <span className={s.cadence}>{p.cadence}</span>
            </div>
            <p className={s.blurb}>{p.blurb}</p>
            <ul className={s.features}>
              {p.features.map((f) => (
                <li key={f}>
                  <Check small />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              href="#"
              variant={p.highlight ? 'primary' : 'ghost'}
              className={s.cta}
            >
              {p.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
