/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpFetch'

// ------------------------------------
// OUTPUT
// ------------------------------------
import fetch from 'isomorphic-fetch'

fetch('endPoint', {
  method: 'GET',
  mode: 'cors',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    host: 'domain.com'
  }
})
.then(response => response.json())
.then(json => json) // do something with json
.catch(err => consle.log(err)) // update this to display a response to the user for production code

// ------------------------------------
// INPUT
// ------------------------------------
${1:import fetch from 'isomorphic-fetch'}

fetch('${2:endPoint}'${3:, {
  method: 'GET',
  mode: 'cors',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    host: 'domain.com'
  \\}
\\}})
.then(response => response.json())
.then(json => ${4:json}) // do something with json
.catch(err => consle.log(err)) // update this to display a response to the user for production code


// ------------------------------------
// GENERATED
// ------------------------------------
'${1:import fetch from \'isomorphic-fetch\'}\n\nfetch(\'${2:endPoint}\'${3:, {\n\tmethod: \'GET\',\n\tmode: \'cors\',\n\theaders: {\n\t\taccept: \'application/json\',\n\t\t\'content-type\': \'application/json\',\n\t\thost: \'domain.com\'\n\t\\}\n\\}})\n.then(response => response.json())\n.then(json => ${4:json}) // do something with json\n.catch(err => consle.log(err)) // update this to display a response to the user for production code\n'
