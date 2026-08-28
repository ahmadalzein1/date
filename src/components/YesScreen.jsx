import {
  AtSign,
  CalendarHeart,
  Instagram,
  Lock,
  Mail,
  MapPin,
  MessageCircleHeart,
  MessageSquareHeart,
  PartyPopper,
} from 'lucide-react'
import { invite } from '../config'
import { Card } from './Card'
import { Chip } from './Chip'
import { Confetti } from './Confetti'
import './ResultScreen.css'

const CONTACT_ICONS = {
  whatsapp: MessageCircleHeart,
  email: Mail,
  instagram: Instagram,
  phone: MessageSquareHeart,
}

const CONTACT_LABELS = {
  whatsapp: 'WhatsApp me',
  email: 'Email me',
  instagram: 'DM me',
  phone: 'Text me',
}

export function YesScreen({ onBack, headingRef }) {
  const { dateIdea, contact } = invite
  const ContactIcon = CONTACT_ICONS[contact.kind] ?? AtSign
  const contactLabel = CONTACT_LABELS[contact.kind] ?? 'Get in touch'

  return (
    <>
      <Confetti />
      <Card className="result result--yes">
        <div className="result__badge" aria-hidden="true">
          <PartyPopper size={30} strokeWidth={2.5} />
        </div>

        <h1 className="result__headline" ref={headingRef} tabIndex={-1}>
          As you should
        </h1>

        <p className="result__lede">
          {invite.invitee ? `${invite.invitee}, you’re lucky because ` : 'You’re lucky because '}
          you’re going on a romantic date with me.
        </p>

        <section className="plan" aria-labelledby="plan-title">
          <h2 className="plan__title" id="plan-title">
            <CalendarHeart size={20} strokeWidth={2.5} aria-hidden="true" />
            Here’s the plan
          </h2>
          <p className="plan__idea">{dateIdea.title}</p>
          {dateIdea.blurb ? <p className="plan__blurb">{dateIdea.blurb}</p> : null}

          {(dateIdea.when || dateIdea.where || dateIdea.secret) && (
            <ul className="plan__meta">
              {dateIdea.when ? (
                <li>
                  <Chip tone="pink" icon={CalendarHeart}>
                    {dateIdea.when}
                  </Chip>
                </li>
              ) : null}
              {dateIdea.where ? (
                <li>
                  <Chip tone="mint" icon={MapPin}>
                    {dateIdea.where}
                  </Chip>
                </li>
              ) : null}
              {/* Stands in for when/where while the plan is a surprise. */}
              {!dateIdea.when && !dateIdea.where && dateIdea.secret ? (
                <li>
                  <Chip tone="butter" icon={Lock}>
                    {dateIdea.secret}
                  </Chip>
                </li>
              ) : null}
            </ul>
          )}
        </section>

        <a className="btn btn--yes result__cta" href={contact.href}>
          <ContactIcon size={22} strokeWidth={2.5} aria-hidden="true" />
          <span>
            {contactLabel}: {contact.value}
          </span>
        </a>

        <button type="button" className="btn btn--ghost" onClick={onBack}>
          Take me back to the question
        </button>
      </Card>
    </>
  )
}
