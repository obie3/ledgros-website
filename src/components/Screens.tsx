import { Phone } from './phone/Phone';
import { DashboardScreen } from './phone/DashboardScreen';
import { IncomeScreen } from './phone/IncomeScreen';
import { ExpensesScreen } from './phone/ExpensesScreen';
import { TaxScreen } from './phone/TaxScreen';
import { ProfileScreen } from './phone/ProfileScreen';
import s from './Screens.module.css';

const SCREENS = [
  { title: 'Home dashboard', blurb: 'Net profit, income, expenses, tax — at a glance.', node: <DashboardScreen /> },
  { title: 'Income',         blurb: 'FX-aware. Logs $ and ₦ side by side.',             node: <IncomeScreen /> },
  { title: 'Expenses',       blurb: 'Snap a receipt or log it manually.',               node: <ExpensesScreen /> },
  { title: 'Tax estimator',  blurb: 'Live Nigeria 2026 bands. NHF, pension, rent.',     node: <TaxScreen /> },
  { title: 'Profile',        blurb: 'Plan, country, TIN, AI-scan usage.',               node: <ProfileScreen /> },
];

export function Screens() {
  return (
    <section id="screens" className="section section-alt">
      <header className="section-head">
        <p className="eyebrow">The app</p>
        <h2>Five screens. Your whole financial life.</h2>
        <p className="section-sub">
          Home, income, expenses, tax, profile — all wired together so a number
          entered once shows up everywhere it should.
        </p>
      </header>

      <div className={s.rail}>
        {SCREENS.map((g) => (
          <div key={g.title} className={s.item}>
            <Phone small screen={g.node} />
            <div className={s.meta}>
              <b>{g.title}</b>
              <span>{g.blurb}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
