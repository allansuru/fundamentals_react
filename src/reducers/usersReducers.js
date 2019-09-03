export const usersReducer = () => {};

export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
