/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpExpressServer'

// ------------------------------------
// OUTPUT
// ------------------------------------
const express = require('express')

const app = express()

app.use(require('routes/routeName'))

const server = app.listen(3001, () => { // eslint-disable-line
  console.log('express server listening on port 3001')
})

module.exports = app

// ------------------------------------
// INPUT
// ------------------------------------
const express = require('express')

const app = express()

app.use(require('routes/routeName'))

const server = app.listen(3001, () => { // eslint-disable-line
  console.log('express server listening on port 3001')
})

module.exports = app

// ------------------------------------
// GENERATED
// ------------------------------------
'const express = require(\'express\')\n\nconst app = express()\n\napp.use(require(\'routes/routeName\'))\n\nconst server = app.listen(3001, () => { // eslint-disable-line\nconsole.log(\'express server listening on port 3001\')\n})\n\nmodule.exports = app\n'
