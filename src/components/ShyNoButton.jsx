import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './Button.css'
import './ShyNoButton.css'

const randomBetween = (min, max) => min + Math.random() * (max - min)

export function ShyNoButton({ onShy }) {
  const buttonRef = useRef(null)
  const [viewportPosition, setViewportPosition] = useState(null)

  const dodge = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    onShy?.()

    const padding = 8
    const viewportWidth = document.documentElement.clientWidth
    const viewportHeight = document.documentElement.clientHeight
    const maxX = Math.max(padding, viewportWidth - button.offsetWidth - padding)
    const maxY = Math.max(padding, viewportHeight - button.offsetHeight - padding)

    setViewportPosition({
      x: randomBetween(padding, maxX),
      y: randomBetween(padding, maxY),
    })
  }, [onShy])

  useEffect(() => {
    const keepInsideViewport = () => {
      if (!viewportPosition || !buttonRef.current) return

      const padding = 8
      const viewportWidth = document.documentElement.clientWidth
      const viewportHeight = document.documentElement.clientHeight
      const maxX = Math.max(padding, viewportWidth - buttonRef.current.offsetWidth - padding)
      const maxY = Math.max(padding, viewportHeight - buttonRef.current.offsetHeight - padding)

      setViewportPosition({
        x: Math.min(viewportPosition.x, maxX),
        y: Math.min(viewportPosition.y, maxY),
      })
    }

    window.addEventListener('resize', keepInsideViewport)
    window.visualViewport?.addEventListener('resize', keepInsideViewport)
    return () => {
      window.removeEventListener('resize', keepInsideViewport)
      window.visualViewport?.removeEventListener('resize', keepInsideViewport)
    }
  }, [viewportPosition])

  const button = (
    <div
      ref={buttonRef}
      aria-hidden="true"
      className={`btn btn--no is-shy${viewportPosition ? ' is-roaming' : ''}`}
      style={viewportPosition ? { '--left': `${viewportPosition.x}px`, '--top': `${viewportPosition.y}px` } : undefined}
      onPointerDown={(event) => {
        event.preventDefault()
        event.stopPropagation()
        dodge()
      }}
      onClick={(event) => event.preventDefault()}
    >
      <span>No</span>
      <span className="btn__face">🙃</span>
    </div>
  )

  return viewportPosition ? createPortal(button, document.body) : button
}
