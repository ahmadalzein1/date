import { useCallback, useEffect, useRef, useState } from 'react'
import { MapPin, Sparkle } from 'lucide-react'
import { invite } from '../config'
import { Card } from './Card'
import { Chip } from './Chip'
import { ShyNoButton } from './ShyNoButton'
import { YesButton } from './YesButton'
import './AskScreen.css'

export function AskScreen({ onYes, headingRef }) {
  const playfieldRef = useRef(null)
  const messageTimerRef = useRef(null)
  const [shyMessage, setShyMessage] = useState('')

  const handleShy = useCallback(() => {
    setShyMessage('Ohh, so u fast? But you have to say yes, Roukaya.')
    window.clearTimeout(messageTimerRef.current)
    messageTimerRef.current = window.setTimeout(() => setShyMessage(''), 2000)
  }, [])

  useEffect(() => () => window.clearTimeout(messageTimerRef.current), [])

  return (
    <Card className="ask">
      <div className="ask__eyebrow">
        <Chip tone="butter" icon={Sparkle}>
          a very official invitation
        </Chip>
      </div>

      {invite.invitee ? <p className="ask__salutation">Babe {invite.invitee},</p> : null}

      <h1 className="ask__question" ref={headingRef} tabIndex={-1}>
        Will you go on a <span className="ask__mark">date</span> with me?
      </h1>

      <div className="ask__playfield" ref={playfieldRef}>
        <div className="ask__buttons">
          <YesButton onClick={onYes} />
          <ShyNoButton
            onShy={handleShy}
          />
        </div>
        {shyMessage ? (
          <p className="ask__note" role="status" aria-live="polite">
            <span aria-hidden="true">😄 </span>{shyMessage}
          </p>
        ) : null}
      </div>

      <footer className="ask__stamp">
        <Chip tone="lavender" icon={MapPin}>
          {invite.city}
        </Chip>
        <span className="ask__stamp-text">just one question · take your time</span>
      </footer>
    </Card>
  )
}
