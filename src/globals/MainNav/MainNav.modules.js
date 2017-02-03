import fetch from 'isomorphic-fetch'

// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

const handleAction = (ACTION_TYPE, stateChanges) => {
  ACTION_HANDLERS = {
    ...ACTION_HANDLERS,
    [ACTION_TYPE]: (state, action) => ({
      ...state,
      ...stateChanges(state, action)
    })
  }
}

export const fetchMainNavContent = () => {
  return (dispatch) => {
    dispatch(requestMainNavContent())
    return fetch(`http://localhost/searchinnovator.com/wp-json/wp/v2/main_nav_link`)
      .then(data => data.json())
      .then(json => dispatch(receiveMainNavContent(json)))
      .catch(err => dispatch(reveiveErr(err)))
  }
}

export const requestMainNavContent = () => ({
  type: 'REQUEST_MAIN_NAV_CONTENT'
})

handleAction('REQUEST_MAIN_NAV_CONTENT', (state, action) => ({
  fetching: true
}))

export const receiveMainNavContent = (mainNav) => ({
  type: 'RECEIVE_MAIN_NAV_CONTENT',
  mainNav
})

handleAction('RECEIVE_MAIN_NAV_CONTENT', (state, action) => {
  const navItems = action.mainNav.map(n => ({
    label: n.acf.label,
    route: n.acf.route
  }))

  return {
    navItems,
    fetching: false
  }
})

export const reveiveErr = (err) => ({
  type: 'RECEIVE_ERR',
  err
})

handleAction('RECEIVE_ERR', (state, action) => ({
  err: action.err,
  fetching: false
}))

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = {
  mainNavContent: [{
    content: { rendered: '' },
    title: { rendered: '' }
  }]
}

export default function mainNavReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
