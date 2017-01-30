/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpExpressModularRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
const express = require('express')
const router = express.Router()

router.get(`/route/:routeId`, (req, res) => {
  const routeId = req.params.routeId
  // fetch or gather data
  const responseObject = {}
  res.json(responseObject)
})

module.exports = router


// ------------------------------------
// INPUT
// ------------------------------------
const express = require('express')
const router = express.Router()

router.get(`/${1:route}${2:${3:/:routeId}}`, (req, res) => {
  ${2:const ${3:routeId} = req.params.${3:routeId}}
  ${4:// fetch or gather data}
  const responseObject = {}
  res.json(responseObject)
})

module.exports = router


// ------------------------------------
// GENERATED
// ------------------------------------
'const express = require(\'express\')\nconst router = express.Router()\n\nrouter.get(`/${1:route}${2:${3:/:routeId}}`, (req, res) => {\n\t${2:const ${3:routeId} = req.params.${3:routeId}}\n\t${4:// fetch or gather data}\n\tconst responseObject = {}\n\tres.json(responseObject)\n})\n\nmodule.exports = router\n'
