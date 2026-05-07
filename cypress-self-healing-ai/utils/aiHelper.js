const OpenAI = require('openai')

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function suggestSelector(html, failedSelector) {
  const prompt = `
You are helping recover a broken Cypress selector.

Failed selector:
${failedSelector}

HTML:
${html}

Suggest ONLY one new CSS selector.
`

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  })

  return response.choices[0].message.content.trim()
}

module.exports = {
  suggestSelector
}
