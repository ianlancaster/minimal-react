/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpReactAppRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import CoreLayout from '../globals/CoreLayout'
import ModularRoute from './ModularRoute'

const Routes = () => {
	return (
		<Router history={hashHistory}>
			<Route path='/' component={CoreLayout}>
				{ModularRoute()}
			</Route>
		</Router>
	)
}

export default Routes

// ------------------------------------
// INPUT
// ------------------------------------
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import CoreLayout from '../globals/CoreLayout'
import ModularRoute from './ModularRoute'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={CoreLayout}>
        {ModularRoute()}
      </Route>
    </Router>
  )
}

export default Routes


// ------------------------------------
// GENERATED
// ------------------------------------
'import React from \'react\'\nimport { Router, Route, hashHistory } from \'react-router\'\n\nimport CoreLayout from \'../globals/CoreLayout\'\nimport ModularRoute from \'./ModularRoute\'\n\nconst Routes = () => {\n\treturn (\n\t\t<Router history={hashHistory}>\n\t\t\t<Route path=\'/\' component={CoreLayout}>\n\t\t\t\t{ModularRoute()}\n\t\t\t</Route>\n\t\t</Router>\n\t)\n}\n\nexport default Routes\n\n'
