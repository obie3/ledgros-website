import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';
import { Button } from './Button';
import s from './Nav.module.css';

const LINKS: { href: string; label: string }[] = [
  { href: '/#features',      label: 'Features' },
  { href: '/#screens',       label: 'Screens' },
  { href: '/#pricing',       label: 'Pricing' },
  { href: '/#faq',           label: 'FAQ' },
  { href: '/privacy',        label: 'Privacy' },
  { href: '/delete-account', label: 'Delete account' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <a href="/" className={s.brand}>
        <img src={logo} alt="" width={30} height={30} />
        <div>
          <span className={s.brandName}>vLedgr</span>
          <small>Financial OS</small>
        </div>
      </a>

      <nav className={`${s.links} ${open ? s.open : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <Button href="/#pricing" variant="primary" className={s.cta}>
        Get the app
      </Button>

      <button
        type="button"
        className={s.hamburger}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
