export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="16" r="4.2" fill="#93032E" />
      <circle cx="16.5" cy="17" r="3.6" fill="#D11F4B" />
      <path d="M8 12c1-4 4-7 9-8M16.5 13.4C16 10 16.5 7 17 4" stroke="#F0577D" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
