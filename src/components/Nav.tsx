import { useEffect, useState } from 'react';
import { Logo } from './icons/Logo';
import { Button } from './Button';
import s from './Nav.module.css';

const LINKS: { id: string; label: string }[] = [
  { id: 'features',       label: 'Features' },
  { id: 'screens',        label: 'Screens' },
  { id: 'pricing',        label: 'Pricing' },
  { id: 'faq',            label: 'Faq' },
  { id: 'privacy',        label: 'Privacy' },
  { id: 'delete-account', label: 'Delete account' },
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
      <a href="#top" className={s.brand}>
        <Logo />
        <div>
          <span className={s.brandName}>LedgrOS</span>
          <small>Financial OS</small>
        </div>
      </a>

      <nav className={`${s.links} ${open ? s.open : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <Button href="#pricing" variant="primary" className={s.cta}>
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
