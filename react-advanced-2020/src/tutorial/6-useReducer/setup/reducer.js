function reducer(usersState, action) {

    const ACTIONS = {
    ADD: "add user",
    REMOVE: "remove user",
    ERROR: "error",
    HIDE_MESSAGE: "hide",
    REMOVE: "remove",
  };

  const { users, isModal, modalMessage } = usersState;
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        isModal: true,
        modalMessage: "USER ADDED!",
        users: [...users, action.payload],
      };
    case ACTIONS.HIDE_MESSAGE:
      return { ...usersState, isModal: false };
    case ACTIONS.REMOVE:
      // const { users, isModal, modalMessage } = usersState;
      return { isModal, modalMessage, users: action.payload };
    case ACTIONS.ERROR:
      return {
        isModal: true,
        users,
        modalMessage: action.payload,
      };
    default:
      throw new Error();
  }
}

export default reducer;
