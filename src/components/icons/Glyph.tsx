export type GlyphName =
  | 'scan'
  | 'import'
  | 'expense'
  | 'tax'
  | 'report'
  | 'tag'
  | 'fx'
  | 'shield';

interface GlyphProps {
  name: GlyphName;
}

export function Glyph({ name }: GlyphProps) {
  const props = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#2DD887',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'scan':
      return (
        <svg {...props}>
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M21 7V5a2 2 0 0 0-2-2h-2" />
          <path d="M3 17v2a2 2 0 0 0 2 2h2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M3 12h18" />
        </svg>
      );
    case 'import':
      return (
        <svg {...props}>
          <path d="M12 3v12" />
          <path d="m6 9 6 6 6-6" />
          <path d="M5 21h14" />
        </svg>
      );
    case 'expense':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 16h4" />
        </svg>
      );
    case 'tax':
      return (
        <svg {...props}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21V12h6v9" />
        </svg>
      );
    case 'report':
      return (
        <svg {...props}>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6" />
          <path d="M9 14h6" />
          <path d="M9 18h4" />
        </svg>
      );
    case 'tag':
      return (
        <svg {...props}>
          <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
          <circle cx="7" cy="7" r="1.5" />
        </svg>
      );
    case 'fx':
      return (
        <svg {...props}>
          <path d="M3 7h13" />
          <path d="m13 4 3 3-3 3" />
          <path d="M21 17H8" />
          <path d="m11 20-3-3 3-3" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
