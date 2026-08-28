import './Chip.css'

/**
 * Small pill label — used for the eyebrow, the city stamp and the
 * when/where details on the yes screen.
 *
 * @param {'pink'|'lavender'|'butter'|'mint'|'cherry'} tone
 */
export function Chip({ tone = 'pink', icon: Icon, children, className = '' }) {
  return (
    <span className={`chip chip--${tone} ${className}`}>
      {Icon ? <Icon className="chip__icon" size={15} strokeWidth={2.5} aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  )
}
