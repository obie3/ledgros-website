import { StatusBar } from './StatusBar';
import { Tabs } from './Tabs';
import s from './screens.module.css';

export function ProfileScreen() {
  return (
    <>
      <StatusBar />
      <div className={s.s5Title}>Profile</div>
      <div className={s.s5Avatar}>E</div>
      <div className={s.s5Name}>Edward</div>
      <div className={s.s5Badge}>Free</div>

      <div className={s.s5Section}>Account</div>
      <div className={s.s4Card}>
        <div className={s.s5Row}>
          <span className={s.l}>Country</span>
          <span className={s.r}>🇳🇬 Nigeria</span>
        </div>
        <div className={s.s5Row}>
          <span className={s.l}>Primary Currency</span>
          <span className={s.r}>NGN</span>
        </div>
        <div className={s.s5Row}>
          <span className={s.l}>Tax ID (TIN)</span>
          <span className={`${s.r} ${s.rGreen}`}>Add TIN →</span>
        </div>
      </div>

      <div className={s.s5Section}>Subscription</div>
      <div className={s.s4Card}>
        <div className={s.s5Row} style={{ borderBottom: '1px solid var(--border)' }}>
          <span className={s.l}>Current Plan</span>
          <span className={s.r}>Free</span>
        </div>
        <div className={s.s5SubBox}>
          <div className={s.s5SubBoxRow}>
            <span className={s.s5SubBoxLabel}>AI Scans This Month</span>
            <span>4 / 10</span>
          </div>
          <div className={s.s5Progress}>
            <i />
          </div>
        </div>
      </div>

      <div className={s.s5Pro}>
        <h5>Unlock Pro Features</h5>
        <p>Unlimited AI scans, full tax deduction breakdown, PDF reports, and FX analytics.</p>
        <a className={s.s5Cta} href="#pricing">Upgrade to Pro — ₦4,500/mo</a>
      </div>

      <div className={s.spacer} />
      <Tabs active="profile" />
    </>
  );
}
