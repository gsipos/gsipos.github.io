// This is a helper script to create a new technology markdown file
// Usage: node create-tech.js "Technology Name" "Optional description" "Optional personal notes"

const fs = require('fs')
const path = require('path')

function createTechFile(name, description = '', personalNotes = '') {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const filePath = path.join(__dirname, '..', 'src', 'content', 'tech', `${slug}.md`)

  const content = `---
name: ${name}
description: ${description}
personalNotes: ${personalNotes}
---

Add more detailed information about ${name} here.
`

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`Created technology file: ${filePath}`)
}

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Error: Please provide a technology name')
  process.exit(1)
}

const name = args[0]
const description = args[1] || ''
const personalNotes = args[2] || ''

createTechFile(name, description, personalNotes)
