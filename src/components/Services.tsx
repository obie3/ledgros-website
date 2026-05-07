import { Check } from './icons/Check';
import { services } from '@/data/content';
import s from './Services.module.css';

export function Services() {
  return (
    <section className="section">
      <header className="section-head">
        <p className="eyebrow">Services</p>
        <h2>All the moving parts, in one place.</h2>
      </header>
      <ul className={s.list}>
        {services.map((item) => (
          <li key={item}>
            <Check />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
