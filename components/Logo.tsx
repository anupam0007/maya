interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Custom "Maya" mark: a geometric monogram "M" built from three
 * interlocking ribbon-like planes, suggesting depth and motion.
 */
export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        width="36"
        height="36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Maya logo mark"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="maya-grad-a" x1="4" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="maya-grad-b" x1="4" y1="42" x2="44" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#06B6D4" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="maya-grad-c" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F5A623" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Left ribbon stroke of the M */}
        <path
          d="M6 42V8.5C6 7.12 7.6 6.36 8.68 7.22L22 18V42H14V21.5L8 16.7V42H6Z"
          fill="url(#maya-grad-a)"
          opacity="0.95"
        />

        {/* Right ribbon stroke of the M */}
        <path
          d="M42 42V8.5C42 7.12 40.4 6.36 39.32 7.22L26 18V42H34V21.5L40 16.7V42H42Z"
          fill="url(#maya-grad-b)"
          opacity="0.95"
        />

        {/* Center connecting plane / chevron, suggesting a 3D fold */}
        <path
          d="M14 21.5L24 13L34 21.5L24 30L14 21.5Z"
          fill="url(#maya-grad-c)"
          opacity="0.9"
        />
      </svg>

      {showWordmark && (
        <span className="font-heading text-xl font-bold tracking-tight text-white">
          Maya
        </span>
      )}
    </div>
  );
}
