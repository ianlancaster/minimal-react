import Iphone from 'globals/Iphone'

const __DEV__ = process.env.NODE_ENV === 'development'

export const createRoutes = (store) => {
  console.log(process.env.NODE_ENV)
  console.log(__DEV__)
  const routes = {
    path: __DEV__
      ? '/'
      : '/searchinnovator.com/',
    component: Iphone,
    indexRoute: { onEnter: (nextState, replace) => replace('bills') },
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
