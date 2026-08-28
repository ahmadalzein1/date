import './Marquee.css'

/**
 * Scrolling ticker across the top of the page. Decorative, so it's hidden
 * from assistive tech — the words are repeated on the card itself.
 * Under reduced motion the CSS simply parks it.
 */
export function Marquee({ words }) {
  const track = (
    <span className="marquee__track" aria-hidden="true">
      {words.map((word, i) => (
        <span className="marquee__item" key={`${word}-${i}`}>
          {word}
          <span className="marquee__star">✦</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="marquee" aria-hidden="true">
      {track}
      {track}
    </div>
  )
}
