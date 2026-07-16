import s from './DeleteAccount.module.css';

function WarnIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 22 20H2L12 3.5z"
        stroke="var(--expense)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 10v4.5" stroke="var(--expense)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17.2" r="1" fill="var(--expense)" />
    </svg>
  );
}

export function DeleteAccount() {
  return (
    <section id="delete-account" className="section">
      <header className="section-head">
        <p className="eyebrow">Account deletion</p>
        <h2>Delete your Zakios account.</h2>
        <p className="section-sub">
          Deletion happens right in the app — instant and permanent. No email
          requests, no waiting period.
        </p>
      </header>

      <div className={s.grid}>
        <div className={s.left}>
          <article className={s.card}>
            <span className={s.badge}>In the app</span>
            <h3>How it works</h3>
            <ol className={s.steps}>
              <li>Open Zakios and go to <b>Settings</b>.</li>
              <li>Tap <b>Advanced</b> to expand the <b>Danger Zone</b>.</li>
              <li>Tap <b>Delete Account</b>.</li>
              <li>
                Type <b className={s.deleteWord}>DELETE</b> and confirm.
              </li>
            </ol>
            <p className={s.note}>
              The moment you confirm, our servers erase your account and data,
              and you're signed out everywhere. There is no recovery window —
              this cannot be undone.
            </p>
          </article>

          <article className={s.disclosure}>
            <h3>Deleted immediately</h3>
            <ul>
              <li>Your profile and sign-in record (name, email, country, TIN if added)</li>
              <li>All ledger entries — income, expenses, and receipt images</li>
              <li>Tax estimates, reports, and exports</li>
              <li>Your subscription record and cloud-synced data</li>
              <li>Data stored on your device</li>
            </ul>
            <h3>What we keep (and why)</h3>
            <ul>
              <li>
                Payment transaction records held by our payment providers
                (Apple, Google, Paystack) — retained as required by law.
              </li>
              <li>
                Aggregated, non-identifying analytics that can no longer be
                linked back to you.
              </li>
            </ul>
          </article>
        </div>

        <aside className={s.sheetWrap}>
          <div className={s.sheet} aria-hidden="true">
            <div className={s.handle} />
            <div className={s.iconWrap}>
              <WarnIcon />
            </div>
            <p className={s.sheetTitle}>Delete account?</p>
            <p className={s.sheetBody}>
              This permanently deletes your account and everything in it —
              income, expenses, receipts, and your subscription record. This
              cannot be undone.
            </p>
            <p className={s.prompt}>
              Type <span className={s.promptWord}>DELETE</span> to confirm.
            </p>
            <div className={s.input}>DELETE</div>
            <div className={s.deleteBtn}>Delete my account</div>
            <div className={s.cancelBtn}>Cancel</div>
          </div>
          <p className={s.caption}>The confirmation step as it appears in the app.</p>
        </aside>
      </div>
    </section>
  );
}
