export function PoliceBadge() {
  return (
    <div className="relative w-16 h-20">
      <svg viewBox="0 0 100 120" className="w-full h-full">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#ffed4e" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        <path
          d="M 50 5 L 65 25 L 90 25 L 70 40 L 80 65 L 50 50 L 20 65 L 30 40 L 10 25 L 35 25 Z"
          fill="url(#goldGradient)"
          stroke="#b8860b"
          strokeWidth="2"
          filter="url(#shadow)"
        />
        <circle cx="50" cy="40" r="15" fill="#1e3a8a" stroke="#ffd700" strokeWidth="2"/>
        <text x="50" y="46" textAnchor="middle" fill="#ffd700" fontSize="12" fontWeight="bold">MSP</text>
      </svg>
    </div>
  );
}
