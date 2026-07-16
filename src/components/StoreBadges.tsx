import { useId } from 'react';
import s from './StoreBadges.module.css';

export const APP_STORE_URL = 'https://apps.apple.com/us/app/zakios/id6762562577';
/** TODO: replace once the Play Store listing is live. */
export const PLAY_STORE_URL = '#';

function AppleLogo() {
  return (
    <svg viewBox="0 0 384 512" width="22" height="27" aria-hidden="true">
      <path
        fill="#fff"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

function GooglePlayLogo() {
  const id = useId();
  const g = (name: string) => `${id}-${name}`;
  return (
    <svg viewBox="0 0 24 26.5" width="24" height="26" aria-hidden="true">
      <defs>
        <linearGradient id={g('blue')} x1="12.9" y1="1.4" x2="-3" y2="17.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF" /><stop offset="1" stopColor="#00E2FF" />
        </linearGradient>
        <linearGradient id={g('yellow')} x1="23.1" y1="13.25" x2="0.2" y2="13.25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000" /><stop offset="1" stopColor="#FFA000" />
        </linearGradient>
        <linearGradient id={g('red')} x1="15.8" y1="15.4" x2="-5.8" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44" /><stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id={g('green')} x1="-0.8" y1="-3.5" x2="8.8" y2="6.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071" /><stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
      <path fill={`url(#${g('blue')})`} d="M0.45 0.55C0.16 0.86 0 1.34 0 1.96v22.58c0 0.62 0.16 1.1 0.45 1.41l0.07 0.07 12.65-12.65v-0.3L0.52 0.48z" />
      <path fill={`url(#${g('yellow')})`} d="M17.38 17.6l-4.21-4.22v-0.3l4.22-4.22 0.09 0.05 5 2.84c1.43 0.81 1.43 2.14 0 2.95l-5 2.84z" />
      <path fill={`url(#${g('red')})`} d="M17.48 17.55l-4.31-4.31L0.45 25.95c0.47 0.5 1.25 0.56 2.12 0.06z" />
      <path fill={`url(#${g('green')})`} d="M17.48 8.95L2.57 0.48C1.7-0.01 0.92 0.05 0.45 0.55l12.72 12.7z" />
    </svg>
  );
}

export function StoreBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${s.badges} ${compact ? s.compact : ''}`}>
      <a
        className={s.badge}
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <AppleLogo />
        <span className={s.text}>
          <small>Download on the</small>
          <b className={s.apple}>App Store</b>
        </span>
      </a>
      <a className={s.badge} href={PLAY_STORE_URL} aria-label="Get it on Google Play">
        <GooglePlayLogo />
        <span className={s.text}>
          <small className={s.caps}>Get it on</small>
          <b>Google Play</b>
        </span>
      </a>
    </div>
  );
}
