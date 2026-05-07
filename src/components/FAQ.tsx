import { faqs } from '@/data/content';
import s from './FAQ.module.css';

export function FAQ() {
  return (
    <section id="faq" className="section">
      <header className="section-head">
        <p className="eyebrow">FAQ</p>
        <h2>Questions, answered.</h2>
      </header>

      <div className={s.list}>
        {faqs.map((f) => (
          <details key={f.q} className={s.item}>
            <summary className={s.q}>
              <span>{f.q}</span>
              <span className={s.chev} aria-hidden="true">+</span>
            </summary>
            <p className={s.a}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
