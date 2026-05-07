const { suggestSelector } = require('../../utils/aiHelper')

Cypress.Commands.add('smartGet', (selector) => {
  cy.document().then(async (doc) => {
    const exists = doc.querySelector(selector)

    if (exists) {
      cy.get(selector).click()
      return
    }

    const html = doc.body.innerHTML.slice(0, 5000)

    const newSelector = await suggestSelector(html, selector)

    cy.log(`AI suggested selector: ${newSelector}`)

    cy.get(newSelector).click()
  })
})
