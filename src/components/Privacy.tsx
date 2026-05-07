import s from './Privacy.module.css';

export function Privacy() {
  return (
    <section id="privacy" className="section section-alt">
      <header className="section-head">
        <p className="eyebrow">Privacy</p>
        <h2>Your books, your business.</h2>
        <p className="section-sub">
          Plain-English summary. The full policy is linked at the bottom.
        </p>
      </header>

      <div className={s.grid}>
        <article className={s.card}>
          <h3>What we collect</h3>
          <p>
            Your email, the entries you create, and basic device info needed to
            sync your account. We don't sell your data. We don't profile you.
          </p>
        </article>
        <article className={s.card}>
          <h3>Where it lives</h3>
          <p>
            On-device by default, encrypted. If cloud sync is on, your data sits
            in your private vault — encrypted in transit (TLS 1.3) and at rest
            (AES-256).
          </p>
        </article>
        <article className={s.card}>
          <h3>Receipts &amp; OCR</h3>
          <p>
            Receipt images are processed for text extraction, then deleted from
            our servers within 24 hours unless you choose to keep them attached.
          </p>
        </article>
        <article className={s.card}>
          <h3>Your rights</h3>
          <p>
            NDPR, GDPR, and CCPA: export, correct, or delete your data anytime
            from Profile → Privacy. Or email{' '}
            <a className={s.link} href="mailto:privacy@ledgros.app">
              privacy@ledgros.app
            </a>
            .
          </p>
        </article>
      </div>

      <p className={s.fullLink}>
        Read the full policy at{' '}
        <a href="#" className={s.link}>
          ledgros.app/privacy
        </a>
        .
      </p>
    </section>
  );
}
