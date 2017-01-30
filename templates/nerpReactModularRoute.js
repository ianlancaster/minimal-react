/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpReactModularRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React from 'react'
import { Route } from 'react-router'
import ExampleComponent from './ExampleComponent.component.js'

const Routes = () => {
  return (
    <Route path='/ExampleComponentRoute' component={ExampleComponent} />
  )
}

export default Routes

// ------------------------------------
// INPUT
// ------------------------------------
import React from 'react'
import { Route } from 'react-router'
import ${1:ExampleComponent} from './${1:ExampleComponent}.${2:component}.js'

const Routes = () => {
  return (
    <Route path='/${3:ExampleComponentRoute}' component={${1:ExampleComponent}} />
  )
}

export default Routes

// ------------------------------------
// GENERATED
// ------------------------------------
'import React from \'react\'\nimport { Route } from \'react-router\'\nimport ${1:ExampleComponent} from \'./${1:ExampleComponent}.${2:component}.js\'\n\nconst Routes = () => {\n\treturn (\n\t\t<Route path=\'/${3:ExampleComponentRoute}\' component={${1:ExampleComponent}} />\n\t)\n}\n\nexport default Routes\n\n'
