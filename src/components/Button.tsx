import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const cx = [
    styles.btn,
    variant === 'primary' ? styles.primary : styles.ghost,
    size === 'lg' ? styles.lg : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={cx} {...rest}>
      {children}
    </a>
  );
}
