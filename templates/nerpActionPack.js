/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpActionPack'

// ------------------------------------
// OUTPUT
// ------------------------------------
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
// INPUT
// ------------------------------------
export const ${1:exampleAction} = () => ({
  type: '${2:EXAMPLE_ACTION}'${3}
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  ${2:EXAMPLE_ACTION}: (state, action) => ({
    ...state,
    ${4:toggleState: !toggleState}${5}
  })
}${6}


// ------------------------------------
// GENERATED
// ------------------------------------
'export const ${1:exampleAction} = () => ({\n\ttype: \'${2:EXAMPLE_ACTION}\'${3}\n})\nACTION_HANDLERS = {\n\t...ACTION_HANDLERS,\n\t${2:EXAMPLE_ACTION}: (state, action) => ({\n\t\t...state,\n\t\t${4:toggleState: !toggleState}${5}\n\t})\n}${6}\n'
