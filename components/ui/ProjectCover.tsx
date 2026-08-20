const VARIANTS = [
  // Concentric rings
  (id: string) => (
    <>
      <circle cx="300" cy="150" r="120" stroke={`url(#g${id})`} strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="300" cy="150" r="80" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="300" cy="150" r="45" fill="#065f46" opacity="0.4" />
    </>
  ),
  // Hexagon lattice
  (id: string) => (
    <>
      <polygon points="300,60 380,105 380,195 300,240 220,195 220,105" stroke={`url(#g${id})`} strokeWidth="1" fill="none" opacity="0.5" />
      <polygon points="300,100 350,128 350,182 300,210 250,182 250,128" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.3" />
    </>
  ),
  // Node graph
  (id: string) => (
    <>
      <line x1="220" y1="90" x2="340" y2="130" stroke="#10b981" strokeWidth="1" opacity="0.3" />
      <line x1="340" y1="130" x2="280" y2="220" stroke="#10b981" strokeWidth="1" opacity="0.3" />
      <line x1="280" y1="220" x2="400" y2="200" stroke="#10b981" strokeWidth="1" opacity="0.3" />
      <line x1="220" y1="90" x2="400" y2="200" stroke="#10b981" strokeWidth="1" opacity="0.15" />
      <circle cx="220" cy="90" r="4" fill="#34d399" />
      <circle cx="340" cy="130" r="6" fill={`url(#g${id})`} />
      <circle cx="280" cy="220" r="4" fill="#34d399" />
      <circle cx="400" cy="200" r="5" fill="#10b981" />
    </>
  ),
  // Diagonal scan lines + square
  (id: string) => (
    <>
      <rect x="240" y="80" width="140" height="140" stroke={`url(#g${id})`} strokeWidth="1" fill="none" opacity="0.4" />
      <line x1="240" y1="220" x2="380" y2="80" stroke="#10b981" strokeWidth="1" opacity="0.25" />
      <rect x="270" y="110" width="80" height="80" fill="#065f46" opacity="0.35" />
    </>
  ),
  // Triangle stack
  (id: string) => (
    <>
      <polygon points="300,60 400,230 200,230" stroke={`url(#g${id})`} strokeWidth="1" fill="none" opacity="0.45" />
      <polygon points="300,120 360,220 240,220" fill="#065f46" opacity="0.35" />
    </>
  ),
  // Radar arcs
  (id: string) => (
    <>
      <path d="M 180 220 A 150 150 0 0 1 420 220" stroke={`url(#g${id})`} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 220 220 A 110 110 0 0 1 380 220" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="300" cy="220" r="4" fill="#34d399" />
    </>
  ),
];

export default function ProjectCover({ seed }: { seed: number }) {
  const id = `pc${seed}`;
  const variant = VARIANTS[seed % VARIANTS.length];

  return (
    <svg viewBox="0 0 600 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`g${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="#0a0a0a" />
      <g
        stroke="#10b981"
        opacity="0.06"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} strokeWidth="1" />
        ))}
      </g>
      {variant(id)}
    </svg>
  );
}
