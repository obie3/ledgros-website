import styles from './screens.module.css';

export function StatusBar() {
  return (
    <div className={styles.stat}>
      <span>18:26</span>
      <span className={styles.statIcons}>
        <svg width="12" height="8" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
          <path d="M2 9a13 13 0 0 1 20 0l-2 2a10 10 0 0 0-16 0L2 9zm4 4a7 7 0 0 1 12 0l-2 2a4 4 0 0 0-8 0l-2-2zm4 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        <svg width="14" height="8" viewBox="0 0 22 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="1" y="2" width="18" height="8" rx="2" />
          <rect x="3" y="4" width="14" height="4" rx="1" fill="currentColor" />
          <path d="M21 5v2" />
        </svg>
      </span>
    </div>
  );
}
