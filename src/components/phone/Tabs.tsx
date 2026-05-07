import styles from './screens.module.css';

export type TabId = 'home' | 'income' | 'expenses' | 'tax' | 'profile';

interface TabsProps {
  active: TabId;
}

export function Tabs({ active }: TabsProps) {
  const items: { id: TabId; ic: string; label: string }[] = [
    { id: 'home',     ic: '🏠', label: 'Home' },
    { id: 'income',   ic: '💰', label: 'Inco...' },
    { id: 'expenses', ic: '🧾', label: 'Exp...' },
    { id: 'tax',      ic: '📊', label: 'Tax' },
    { id: 'profile',  ic: '👤', label: active === 'profile' ? 'Pro...' : 'Profi...' },
  ];

  return (
    <div className={styles.tabs}>
      {items.map((it) => (
        <div
          key={it.id}
          className={`${styles.tab} ${active === it.id ? styles.tabActive : ''}`}
        >
          <span className={styles.tabIc}>{it.ic}</span>
          {it.label}
        </div>
      ))}
    </div>
  );
}
