import type { ReactNode } from 'react';
import styles from './Phone.module.css';

interface PhoneProps {
  screen: ReactNode;
  small?: boolean;
}

export function Phone({ screen, small = false }: PhoneProps) {
  const sz = small
    ? { width: 240, height: 500, radius: 34, padding: 10, notchTop: 14, notchW: 72, notchH: 18, screenRadius: 26, screenPadTop: 42, gap: 8 }
    : { width: 300, height: 620, radius: 42, padding: 12, notchTop: 16, notchW: 90, notchH: 22, screenRadius: 32, screenPadTop: 50, gap: 10 };

  return (
    <div
      className={styles.phone}
      style={{
        width: sz.width,
        height: sz.height,
        borderRadius: sz.radius,
        padding: sz.padding,
      }}
    >
      <div
        className={styles.notch}
        style={{ top: sz.notchTop, width: sz.notchW, height: sz.notchH }}
      />
      <div
        className={styles.screen}
        style={{ borderRadius: sz.screenRadius, padding: `${sz.screenPadTop}px 14px 14px` }}
      >
        <div className={styles.scroll} style={{ gap: sz.gap }}>
          {screen}
        </div>
      </div>
    </div>
  );
}
