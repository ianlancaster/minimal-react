/* eslint-disable */

// // // ------------------------------------
// // // SHORTCUT
// // // ------------------------------------
'nerpReduxModules'

// // // ------------------------------------
// // // OUTPUT
// // // ------------------------------------
// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

export const exampleAction = () => ({
  type: 'EXAMPLE_ACTION'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  EXAMPLE_ACTION: (state, action) => ({
    ...state,
    toggleState: !toggleState
  })
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState = {}

export default function exampleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// // // ------------------------------------
// // // INPUT
// // // ------------------------------------
// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

export const ${3:exampleAction} = () => ({
  type: '${4:EXAMPLE_ACTION}'${5}
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  ${4:EXAMPLE_ACTION}: (state, action) => ({
    ...state,
    ${6:toggleState: !toggleState}${7}
  })
}${8}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState = {}

export default function ${1:exampleReducer} (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}


// // // ------------------------------------
// // // GENERATED
// // // ------------------------------------
'// ------------------------------------\n// Actions\n// ------------------------------------\nlet ACTION_HANDLERS = {}\n\nexport const ${3:exampleAction} = () => ({\n\ttype: \'${4:EXAMPLE_ACTION}\'${5}\n})\nACTION_HANDLERS = {\n\t...ACTION_HANDLERS,\n\t${4:EXAMPLE_ACTION}: (state, action) => ({\n\t\t...state,\n\t\t${6:toggleState: !toggleState}${7}\n\t})\n}${8}\n\n// ------------------------------------\n// Reducers\n// ------------------------------------\n\nconst initialState = {}\n\nexport default function ${1:exampleReducer} (state = initialState, action) {\n\tconst handler = ACTION_HANDLERS[action.type]\n\n\treturn handler ? handler(state, action) : state\n}\n'
