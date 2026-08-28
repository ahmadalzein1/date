import { Heart, Sparkle, Star } from 'lucide-react'
import './FloatingDecor.css'

/* Position in %, tilt in deg, drift = animation duration. Hand-placed so
   nothing collides with the card at any breakpoint. */
const STICKERS = [
  { emoji: '💌', top: 12, left: 6, tilt: -12, drift: 7.5, size: 1 },
  { emoji: '🍒', top: 70, left: 4, tilt: 10, drift: 9, size: 0.9 },
  { emoji: '🪩', top: 32, left: 91, tilt: 8, drift: 8.2, size: 1.05 },
  { emoji: '🎀', top: 82, left: 88, tilt: -14, drift: 6.8, size: 0.85 },
  { emoji: '☎️', top: 6, left: 78, tilt: 14, drift: 10, size: 0.75 },
  { emoji: '🌷', top: 90, left: 32, tilt: -6, drift: 8.6, size: 0.7 },
]

const GLYPHS = [
  { Icon: Star, top: 22, left: 22, color: 'var(--butter)', size: 26, delay: 0 },
  { Icon: Sparkle, top: 58, left: 14, color: 'var(--lavender)', size: 22, delay: 0.9 },
  { Icon: Heart, top: 16, left: 62, color: 'var(--pink)', size: 20, delay: 1.6 },
  { Icon: Sparkle, top: 78, left: 70, color: 'var(--cherry)', size: 24, delay: 2.3 },
  { Icon: Star, top: 46, left: 82, color: 'var(--pink)', size: 18, delay: 1.2 },
  { Icon: Heart, top: 88, left: 52, color: 'var(--lavender)', size: 22, delay: 2.8 },
]

/**
 * The sticker layer behind the card. Purely decorative and fully
 * hidden from assistive tech; parked entirely by reduced-motion CSS.
 */
export function FloatingDecor() {
  return (
    <div className="decor" aria-hidden="true">
      {STICKERS.map((s, i) => (
        <span
          className="decor__sticker"
          key={`sticker-${i}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            '--tilt': `${s.tilt}deg`,
            '--drift': `${s.drift}s`,
            '--scale': s.size,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {s.emoji}
        </span>
      ))}

      {GLYPHS.map(({ Icon, top, left, color, size, delay }, i) => (
        <span
          className="decor__glyph"
          key={`glyph-${i}`}
          style={{ top: `${top}%`, left: `${left}%`, color, animationDelay: `${delay}s` }}
        >
          <Icon size={size} strokeWidth={2.5} fill="currentColor" />
        </span>
      ))}
    </div>
  )
}
