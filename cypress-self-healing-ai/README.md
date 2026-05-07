# 🤖 Cypress Self-Healing Example

A simple proof of concept showing how AI can help recover broken Cypress selectors automatically.

## 🚀 Idea

Traditional UI automation fails immediately when selectors change.

This project experiments with an alternative approach:

- Detect broken selectors
- Analyze page HTML
- Ask AI for a possible replacement
- Retry the interaction dynamically

---

## 🧠 Example Flow

1. Cypress tries:

```js
cy.get('[data-testid="login-button"]')
```

2. Selector fails

3. AI receives:
- Failed selector
- HTML snippet
- Previous selector pattern

4. AI suggests:

```js
button.login-btn
```

5. Test retries automatically

---

## ⚠️ Important

This repository is only a proof of concept for experimentation and learning purposes.

Not intended for production usage.

---

## 🛠 Stack

- Cypress
- OpenAI API
- Node.js

---

## ▶️ Run

```bash
npm install
```

```bash
npx cypress open
```
