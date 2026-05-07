export function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#nbg)" />
      <path d="M9 22V10h2.6l5.4 7.7V10H19.6V22h-2.5l-5.5-7.8V22H9z" fill="#0C0F14" />
      <defs>
        <linearGradient id="nbg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5EE8A2" />
          <stop offset="1" stopColor="#2DD887" />
        </linearGradient>
      </defs>
    </svg>
  );
}
