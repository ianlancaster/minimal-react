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

export const fetchHomeContent = () => {
  return (dispatch) => {
    if (localStorage.getItem('homeContent')) {
      dispatch(renderCachedHomeContent())
    } else {
      dispatch(requestHomeContent())
    }

    return fetch(`http://localhost/searchinnovator.com/wp-json/wp/v2/pages/?slug=Home`)
      .then(data => data.json())
      .then(json => dispatch(receiveHomeContent(json)))
      .catch(err => dispatch(reveiveErr(err)))
  }
}

export const renderCachedHomeContent = () => ({
  type: 'RENDER_CACHED_HOME_CONTENT',
  home: JSON.parse(localStorage.getItem('homeContent'))
})

handleAction('RENDER_CACHED_HOME_CONTENT', (state, action) => ({
  ...action.home
}))

export const requestHomeContent = () => ({
  type: 'REQUEST_HOME_CONTENT'
})

handleAction('REQUEST_HOME_CONTENT', (state, action) => ({
  fetching: true
}))

export const receiveHomeContent = (home) => ({
  type: 'RECEIVE_HOME_CONTENT',
  home
})

handleAction('RECEIVE_HOME_CONTENT', (state, action) => {
  const homeContent = {
    content: (action.home[0]).content.rendered,
    title: (action.home[0]).title.rendered,
    fetching: false
  }

  localStorage.setItem('homeContent', JSON.stringify(homeContent))

  return { ...homeContent }
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
  homeContent: [{
    content: { rendered: '' },
    title: { rendered: '' }
  }]
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
