export const postsReducer = () => {};

export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
