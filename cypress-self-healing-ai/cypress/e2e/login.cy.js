describe('Login Example', () => {
  it('tries self-healing selector recovery', () => {
    cy.visit('https://example.com')

    cy.smartGet('[data-testid="login-button"]')
  })
})
