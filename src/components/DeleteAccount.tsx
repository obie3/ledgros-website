import s from './DeleteAccount.module.css';

export function DeleteAccount() {
  return (
    <section id="delete-account" className="section">
      <header className="section-head">
        <p className="eyebrow">Account deletion</p>
        <h2>Delete your vLedgr account.</h2>
        <p className="section-sub">
          Two paths — in the app or by request. We honour either one.
        </p>
      </header>

      <div className={s.grid}>
        <article className={s.card}>
          <span className={s.badge}>Fastest</span>
          <h3>In the app</h3>
          <ol className={s.steps}>
            <li>Open vLedgr.</li>
            <li>Go to <b>Profile → Account → Delete account</b>.</li>
            <li>Confirm with your biometric or password.</li>
          </ol>
          <p className={s.note}>
            Your account and all entries are removed immediately. Backup copies
            are purged within 30 days.
          </p>
        </article>

        <article className={s.card}>
          <span className={s.badge}>By email</span>
          <h3>Request deletion</h3>
          <p className={s.copy}>
            Email{' '}
            <a className={s.link} href="mailto:delete@ledgros.app">
              delete@ledgros.app
            </a>{' '}
            from the address tied to your account. Subject: <b>Delete my account</b>.
          </p>
          <p className={s.note}>
            We confirm within 2 business days and complete deletion within 14
            days. You'll get an email when it's done.
          </p>
        </article>
      </div>

      <div className={s.disclosure}>
        <h3>What gets deleted</h3>
        <ul>
          <li>Your profile (name, email, country, TIN if added)</li>
          <li>All ledger entries — income, expenses, attachments</li>
          <li>Tax estimates, reports, and exports</li>
          <li>Linked devices and active sessions</li>
        </ul>
        <h3>What we keep (and why)</h3>
        <ul>
          <li>
            Anonymised payment records — required by law for 7 years (FIRS,
            NDPR Art. 14).
          </li>
          <li>
            Aggregated, non-identifying analytics that can no longer be linked
            back to you.
          </li>
        </ul>
      </div>
    </section>
  );
}
