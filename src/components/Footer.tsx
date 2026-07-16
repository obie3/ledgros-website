import logo from '@/assets/logo.png';
import { StoreBadges } from './StoreBadges';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>
          <div className={s.brandRow}>
            <img src={logo} alt="" width={30} height={30} />
            <span className={s.brandName}>Zakios</span>
          </div>
          <p className={s.tagline}>
            Financial OS for the naira economy. Built in Nigeria.
          </p>
          <StoreBadges compact />
        </div>

        <div className={s.cols}>
          <div className={s.col}>
            <h4>Product</h4>
            <ul>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#screens">App</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={s.col}>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/delete-account">Delete account</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className={s.col}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@usezakios.com">hello@usezakios.com</a></li>
              <li><a href="mailto:support@usezakios.com">support@usezakios.com</a></li>
              <li><a href="mailto:privacy@usezakios.com">privacy@usezakios.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <span>© {new Date().getFullYear()} Zakios. All rights reserved.</span>
        <span>Made with care in Nigeria.</span>
      </div>
    </footer>
  );
}
