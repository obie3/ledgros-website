import { Phone } from './phone/Phone';
import { DashboardScreen } from './phone/DashboardScreen';
import { Button } from './Button';
import { Star } from './icons/Star';
import s from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={s.hero}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.inner}>
        <span className={s.pill}>
          <span className={s.pillDot} />
          Built for Nigeria · Tax-ready 2026
        </span>

        <h1>
          Every naira tracked.
          <br />
          <span className={s.grad}>Every tax owed, sorted.</span>
        </h1>

        <p className={s.sub}>
          LedgrOS is the Financial OS for Nigerian freelancers and small
          businesses. Snap receipts, import statements, and watch your
          books — and your tax — keep themselves up to date.
        </p>

        <div className={s.ctas}>
          <Button href="#pricing" variant="primary" size="lg">Start free</Button>
          <Button href="#screens" variant="ghost"   size="lg">See the app</Button>
        </div>

        <div className={s.meta}>
          <Star /> 4.8 average rating · No bank login required · Works offline
        </div>
      </div>

      <div className={`${s.stack} ${s.solo}`}>
        <Phone screen={<DashboardScreen />} />
      </div>
    </section>
  );
}
