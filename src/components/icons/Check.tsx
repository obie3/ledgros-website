interface CheckProps {
  small?: boolean;
}

export function Check({ small = false }: CheckProps) {
  const s = small ? 14 : 18;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#0F2318" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="#2DD887"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
