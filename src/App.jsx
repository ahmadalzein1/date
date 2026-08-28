import { useEffect, useRef, useState } from 'react'
import { invite, tickerWords } from './config'
import { AskScreen } from './components/AskScreen'
import { FloatingDecor } from './components/FloatingDecor'
import { Marquee } from './components/Marquee'
import { YesScreen } from './components/YesScreen'
import './App.css'

/** 'ask' → the question · 'yes' → the plan · 'no' → the kind note */
export default function App() {
  const [answer, setAnswer] = useState('ask')
  const headingRef = useRef(null)
  const firstRender = useRef(true)

  /* Personalise the browser tab too. */
  useEffect(() => {
    if (invite.invitee) document.title = `${invite.invitee} — will you go on a date with me?`
  }, [])

  /* Move focus to the new heading after each answer so screen-reader and
     keyboard users land on the change instead of losing their place. */
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    headingRef.current?.focus()
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [answer])

  return (
    <>
      <Marquee words={tickerWords} />
      <FloatingDecor />

      <main className="stage">
        {answer === 'ask' && (
          <AskScreen
            headingRef={headingRef}
            onYes={() => setAnswer('yes')}
          />
        )}
        {answer === 'yes' && <YesScreen headingRef={headingRef} onBack={() => setAnswer('ask')} />}
      </main>

    </>
  )
}
