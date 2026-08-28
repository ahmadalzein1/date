import './Card.css'

/**
 * The paper card everything happens on: thick ink outline, hard cherry
 * shadow, and two strips of washi tape holding it to the page.
 */
export function Card({ children, className = '', ...rest }) {
  return (
    <div className={`card ${className}`} {...rest}>
      <span className="card__tape card__tape--left" aria-hidden="true" />
      <span className="card__tape card__tape--right" aria-hidden="true" />
      {children}
    </div>
  )
}
