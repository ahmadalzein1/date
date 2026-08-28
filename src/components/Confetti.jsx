import { useMemo } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Confetti.css'

const COLORS = ['var(--pink)', 'var(--cherry)', 'var(--lavender)', 'var(--butter)', 'var(--mint)']
const SHAPES = ['rect', 'circle', 'heart']

/**
 * Lightweight CSS confetti — no canvas, no dependency. Renders nothing
 * at all when the visitor prefers reduced motion.
 */
export function Confetti({ pieces = 44 }) {
  const reducedMotion = useReducedMotion()

  const confetti = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2.4,
        duration: 3.4 + Math.random() * 2.6,
        drift: (Math.random() - 0.5) * 220,
        spin: (Math.random() > 0.5 ? 1 : -1) * (240 + Math.random() * 540),
        scale: 0.6 + Math.random() * 0.8,
        color: COLORS[i % COLORS.length],
        shape: SHAPES[i % SHAPES.length],
      })),
    [pieces]
  )

  if (reducedMotion) return null

  return (
    <div className="confetti" aria-hidden="true">
      {confetti.map((piece) => (
        <span
          key={piece.id}
          className={`confetti__bit confetti__bit--${piece.shape}`}
          style={{
            left: `${piece.left}%`,
            background: piece.shape === 'heart' ? 'transparent' : piece.color,
            color: piece.color,
            '--delay': `${piece.delay}s`,
            '--duration': `${piece.duration}s`,
            '--drift': `${piece.drift}px`,
            '--spin': `${piece.spin}deg`,
            '--scale': piece.scale,
          }}
        >
          {piece.shape === 'heart' ? '♥' : null}
        </span>
      ))}
    </div>
  )
}
