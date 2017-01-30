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

export const fetchBills = (pageNumber = 1) => {
  return (dispatch) => {
    dispatch(requestBills())
    return fetch(`http://localhost:3001/api/bills/${pageNumber}`)
      .then(data => data.json())
      .then(json => dispatch(receiveBills(json)))
      .catch(err => dispatch(reveiveErr(err)))
  }
}

export const requestBills = () => ({
  type: 'REQUEST_BILLS'
})

handleAction('REQUEST_BILLS', (state, action) => ({
  fetching: true
}))

// ACTION_HANDLERS = {
//   ...ACTION_HANDLERS,
//   REQUEST_BILLS: (state) => ({
//     ...state,
//     fetching: true
//   })
// }

export const receiveBills = (bills) => {
  return {
    type: 'RECEIVE_BILLS',
    bills
  }
}

handleAction('RECEIVE_BILLS', (state, action) => ({
  bills: [...state.bills, ...action.bills],
  fetching: false
}))

// ACTION_HANDLERS = {
//   ...ACTION_HANDLERS,
//   RECEIVE_BILLS: (state, action) => ({
//     ...state,
//     bills: [...state.bills, ...action.bills],
//     fetching: false
//   })
// }

export const reveiveErr = (err) => ({
  type: 'RECEIVE_ERR',
  err
})

handleAction('RECEIVE_ERR', (state, action) => ({
  err: action.err,
  fetching: false
}))

// ACTION_HANDLERS = {
//   ...ACTION_HANDLERS,
//   RECEIVE_ERR: (state, action) => ({
//     ...state,
//     err: action.err,
//     fetching: false
//   })
// }

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = { bills: [] }

export default function billsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
