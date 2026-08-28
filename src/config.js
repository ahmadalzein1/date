/* ------------------------------------------------------------------
 *  👋  START HERE  —  this is the only file you need to edit.
 *
 *  Replace every [BRACKETED] placeholder below with your own details.
 *  Everything on the page reads from this object, so once you've
 *  filled it in, you're done. Nothing else needs touching.
 * ------------------------------------------------------------------ */

export const invite = {
  /** Who you're asking. Appears in the salutation and browser tab. Set to ''
   * to drop the salutation entirely. */
  invitee: 'Roukaya',

  /** Your city. Shows in the little stamp at the bottom of the card. */
  city: 'Byblos',

  /** The actual date you're proposing. */
  dateIdea: {
    /** Short headline. */
    title: 'A surprise. The romantic kind.',
    /** One sentence of detail that sells it. */
    blurb:
      'It’s already planned, start to finish. All I’ll say is that the sea is involved, and so is dessert.',
    /** Optional chips — set to '' to hide any of them. */
    when: '',
    where: '',
    /** Shown in place of when/where when you're keeping the plan secret. */
    secret: 'details: classified',
  },

  /** How they reach you. */
  contact: {
    kind: 'whatsapp',
    value: '+961 3 010 150',
    // The ?text= bit pre-fills her first message so she just has to hit send.
    href: 'https://wa.me/9613010150?text=' + encodeURIComponent('I said yes'),
  },
}

/** Scrolling ticker at the top of the page. Keep it light and honest. */
export const tickerWords = [
  'no pressure',
  'but also',
  'hi',
  'one question only',
  'take your time',
]
