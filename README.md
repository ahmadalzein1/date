# 💌 Will you go on a date with me?

A one-question date invitation site. Two buttons, one shy.

React + Vite + Lucide icons. No other dependencies.

---

## 1. Fill in your details

Open **`src/config.js`** and replace every `[BRACKETED]` placeholder. That file is the only
one you need to touch — the whole page reads from it.

| Field | What it is |
| --- | --- |
| `city` | Shows in the stamp at the bottom of the card |
| `dateIdea.title` | The date itself, e.g. `Tacos, then the terrible aquarium` |
| `dateIdea.blurb` | One sentence on why it'll be fun |
| `dateIdea.when` / `.where` | Optional chips — set to `''` to hide either |
| `dateIdea.secret` | Shown instead of when/where while the plan is a surprise |
| `contact.kind` | `'whatsapp'`, `'email'`, `'instagram'` or `'phone'` (picks the icon + button label) |
| `contact.value` | What's printed on the button |
| `contact.href` | `https://wa.me/9613010150` · `mailto:you@example.com` · `https://instagram.com/handle` · `sms:+15551234567` |

For WhatsApp the number goes in **country code first, no `+` and no spaces**. Adding
`?text=...` pre-fills her first message so she only has to hit send.

You can also edit `tickerWords` (the scrolling banner) in the same file.

## 2. Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

The dev server also prints a **Network** address (e.g. `http://192.168.1.x:5173`). Open
that on your phone — same Wi-Fi — to test the touch interaction on a real device.

## 3. Build & preview

```bash
npm run build     # outputs to dist/
npm run preview   # serves the built site locally
```

## 4. Send it

`dist/` is a plain static site. Drag it onto Netlify Drop, or push the repo and point
Vercel / Cloudflare Pages / GitHub Pages at it. Then send the link.

---

## Accessibility notes

- Semantic `<main>`, `<h1>`, `<section>`, `<footer>`; real `<button>` and `<a>` elements.
- Focus moves to the new heading when the screen changes, and the page scrolls to top.
- Decorative stickers, confetti and the marquee are `aria-hidden`.
- The shy No prop is skipped by keyboard and screen readers; Yes is the only answer control.
- Visible 3px focus rings on every interactive element.

## Project structure

```
src/
  config.js              ← the only file you need to edit
  App.jsx                ← screen state: ask → yes
  hooks/
    useReducedMotion.js  ← live motion-preference tracking
  components/
    AskScreen.jsx        ← the question + both actions
    YesScreen.jsx        ← confetti, the plan, contact button
    ShyNoButton.jsx      ← non-clickable random movement gag
    YesButton.jsx
    Card.jsx  Chip.jsx  Marquee.jsx  FloatingDecor.jsx  Confetti.jsx
  styles/
    tokens.css           ← CSS variables: colour, type, shape, motion
    global.css           ← reset, page background, shared keyframes
```

Fonts are Fraunces + Plus Jakarta Sans, loaded from Google Fonts in `index.html`, each
with a system fallback stack.
