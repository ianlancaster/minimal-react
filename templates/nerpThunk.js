/* eslint-disable */

// // // ------------------------------------
// // // SHORTCUT
// // // ------------------------------------
'nerpThunk'

// // // ------------------------------------
// // // OUTPUT
// // // ------------------------------------
import fetch from 'isomorphic-fetch'

export const thunkExample = () => {
  return (dispatch) => {
    dispatch(requestThunk())
    return fetch('https://pre.domain.ext/endpoint')
      .then(data => data.json())
      .then(json => dispatch(RECEIVEThunk(json)))
      .catch(err => dispatch(reveiveErr(err)))
  }
}

const requestThunk = () => ({
  type: 'REQUEST_THUNK'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  REQUEST_THUNK: (state) => ({
    ...state,
    fetching: true
  })
}

const RECEIVEThunk = (json) => ({
  type: 'RECEIVE_THUNK',
  payload: json
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECEIVE_THUNK: (state, action) => ({
    ...state,
    existingStateArr: state.existingStateArr.push(action.payload),
    newStateProp: action.payload.newStateProp,
    fetching: false
  })
}

const reveiveErr = (err) => ({
  type: 'RECEIVE_ERR',
  payload: err
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECEIVE_ERR: (state, action) => ({
    ...state,
    err: action.payload,
    fetching: false
  })
}


// // // ------------------------------------
// // // INPUT
// // // ------------------------------------
${1:import fetch from 'isomorphic-fetch'}

export const ${2:thunkExample} = () => {
  return (dispatch) => {
    dispatch(${3:requestThunk}())
    return fetch('${4:https://pre.domain.ext/endpoint}')
      .then(data => data.json())
      .then(json => dispatch(${5:RECEIVEThunk}(json)))
      .catch(err => dispatch(${6:reveiveErr}(err)))
  }
}

const ${3:requestThunk} = () => ({
  type: '${7:REQUEST_THUNK}'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  ${7:REQUEST_THUNK}: (state) => ({
    ...state,
    fetching: true
  })
}

const ${5:RECEIVEThunk} = (json) => ({
  type: '${8:RECEIVE_THUNK}',
  payload: json
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  ${8:RECEIVE_THUNK}: (state, action) => ({
    ...state,
    ${9:existingStateArr: state.existingStateArr.push(action.payload),
    newStateProp: action.payload.newStateProp,
    fetching: false}
  })
}

const ${6:reveiveErr} = (err) => ({
  type: '${10:RECEIVE_ERR}',
  payload: err
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  ${10:RECEIVE_ERR}: (state, action) => ({
    ...state,
    err: action.payload,
    fetching: false
  })
}
${11}


// // // ------------------------------------
// // // GENERATED
// // // ------------------------------------
${1:import fetch from \'isomorphic-fetch\'}\n\nexport const ${2:thunkExample} = () => {\n\treturn (dispatch) => {\n\t\tdispatch(${3:requestThunk}())\n\t\treturn fetch(\'${4:https://pre.domain.ext/endpoint}\')\n\t\t\t.then(data => data.json())\n\t\t\t.then(json => dispatch(${5:RECEIVEThunk}(json)))\n\t\t\t.catch(err => dispatch(${6:reveiveErr}(err)))\n\t}\n}\n\nconst ${3:requestThunk} = () => ({\n\ttype: \'${7:REQUEST_THUNK}\'\n})\nACTION_HANDLERS = {\n\t...ACTION_HANDLERS,\n\t${7:REQUEST_THUNK}: (state) => ({\n\t\t...state,\n\t\tfetching: true\n\t})\n}\n\nconst ${5:RECEIVEThunk} = (json) => ({\n\ttype: \'${8:RECEIVE_THUNK}\',\n\tpayload: json\n})\nACTION_HANDLERS = {\n\t...ACTION_HANDLERS,\n\t${8:RECEIVE_THUNK}: (state, action) => ({\n\t\t...state,\n\t\t${9:existingStateArr: state.existingStateArr.push(action.payload),\n\t\tnewStateProp: action.payload.newStateProp,\n\t\tfetching: false}\n\t})\n}\n\nconst ${6:reveiveErr} = (err) => ({\n\ttype: \'${10:RECEIVE_ERR}\',\n\tpayload: err\n})\nACTION_HANDLERS = {\n\t...ACTION_HANDLERS,\n\t${10:RECEIVE_ERR}: (state, action) => ({\n\t\t...state,\n\t\terr: action.payload,\n\t\tfetching: false\n\t})\n}\n${11}
