import { Heart } from 'lucide-react'
import './Button.css'

export function YesButton({ onClick }) {
  return (
    <button type="button" className="btn btn--yes" onClick={onClick}>
      <span>Yes</span>
      <Heart className="btn__heart" size={26} strokeWidth={2.5} fill="currentColor" aria-hidden="true" />
    </button>
  )
}
