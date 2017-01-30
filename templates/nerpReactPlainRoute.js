/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpReactPlainRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
import CoreLayout from '../globals/CoreLayout'

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute  : Home,
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./Bills').default(store)
        ])
      })
    }
  }

  return routes
}

export default createRoutes


// ------------------------------------
// INPUT
// ------------------------------------
import ${1:CoreLayout} from '../globals/${1:CoreLayout}'

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: ${1:CoreLayout},
    indexRoute  : ${2:Home},
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./${3:Bills}').default(store)${4}
        ])
      })
    }
  }

  return routes
}

export default createRoutes


// ------------------------------------
// GENERATED
// ------------------------------------
'import ${1:CoreLayout} from \'../globals/${1:CoreLayout}\'\n\nexport const createRoutes = (store) => {\n\tconst routes = {\n\t\tpath: \'/\',\n\t\tcomponent: ${1:CoreLayout},\n\t\tindexRoute\t: ${2:Home},\n\t\tgetChildRoutes (location, next) {\n\t\t\trequire.ensure([], (require) => {\n\t\t\t\tnext(null, [\n\t\t\t\t\trequire(\'./${3:Bills}\').default(store)${4}\n\t\t\t\t])\n\t\t\t})\n\t\t}\n\t}\n\n\treturn routes\n}\n\nexport default createRoutes\n'
