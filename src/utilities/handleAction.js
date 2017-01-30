const handleAction = (ACTION_HANDLERS, ACTION_TYPE, stateChanges) => {
  console.log(ACTION_HANDLERS)
  ACTION_HANDLERS = {
    ...ACTION_HANDLERS,
    [ACTION_TYPE]: (state, action) => ({
      ...state,
      ...stateChanges(state, action)
    })
  }
}

export default handleAction
