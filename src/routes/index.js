import CoreLayout from 'globals/CoreLayout'
import Home from 'routes/Home'
// replace CoreLayout with Iphone for a mobile rendering

const __DEV__ = process.env.NODE_ENV === 'development'

export const createRoutes = (store) => {
  const routes = {
    path: __DEV__
      ? '/'
      : '/searchinnovator.com/',
    component: CoreLayout,
    indexRoute: { component: Home },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./MainContent').default(store),
          require('./Resume').default
        ])
      })
    }
  }

  return routes
}

export default createRoutes
