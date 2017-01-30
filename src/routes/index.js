import CoreLayout from 'globals/CoreLayout'
// replace CoreLayout with Iphone for a mobile rendering

const __DEV__ = process.env.NODE_ENV === 'development'

export const createRoutes = (store) => {
  const routes = {
    path: __DEV__
      ? '/'
      : '/searchinnovator.com/',
    component: CoreLayout,
    // indexRoute: { onEnter: (nextState, replace) => replace('bills') },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./MainContent').default(store)
        ])
      })
    }
  }

  return routes
}

export default createRoutes
