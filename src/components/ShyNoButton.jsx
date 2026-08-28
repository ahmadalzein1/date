import { useCallback, useEffect, useRef, useState } from 'react'
import './Button.css'
import './ShyNoButton.css'

const randomBetween = (min, max) => min + Math.random() * (max - min)

export function ShyNoButton({ onShy }) {
  const buttonRef = useRef(null)
  const lastDodgeRef = useRef(0)
  const [viewportPosition, setViewportPosition] = useState(null)

  const dodge = useCallback(() => {
    if (performance.now() - lastDodgeRef.current < 250) return

    const button = buttonRef.current
    if (!button) return

    lastDodgeRef.current = performance.now()
    onShy?.()

    const padding = 8
    const maxX = Math.max(padding, window.innerWidth - button.offsetWidth - padding)
    const maxY = Math.max(padding, window.innerHeight - button.offsetHeight - padding)

    setViewportPosition({
      x: randomBetween(padding, maxX),
      y: randomBetween(padding, maxY),
    })
  }, [onShy])

  useEffect(() => {
    const handlePointerDown = (event) => {
      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        event.preventDefault()
        dodge()
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [dodge])

  return (
    <div
      ref={buttonRef}
      aria-hidden="true"
      className={`btn btn--no is-shy${viewportPosition ? ' is-roaming' : ''}`}
      style={viewportPosition ? { '--left': `${viewportPosition.x}px`, '--top': `${viewportPosition.y}px` } : undefined}
      onPointerDown={(event) => {
        event.preventDefault()
        dodge()
      }}
    >
      <span>No</span>
      <span className="btn__face">🙃</span>
    </div>
  )
}
