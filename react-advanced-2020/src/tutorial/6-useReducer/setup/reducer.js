const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  EMPTY: "EMPTY",
  HIDE: "HIDE",
};

function reducer(state, action) {
  const { newTodo, modal } = action.payload;
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        modal: { ...modal },
        todos: [...state.todos, { ...newTodo }],
      };
    case ACTIONS.REMOVE:
      return action.payload;
    case ACTIONS.EMPTY:
      return { ...state, modal: { ...modal } };
    case ACTIONS.HIDE:
      return { ...state, modal: { ...modal } };
    default:
      throw new Error();
  }
}

export default reducer;
