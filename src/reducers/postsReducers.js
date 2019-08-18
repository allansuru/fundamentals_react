export const postsReducer = () => {};

export default (state, action) => {
  if (action.type === "FETCH_POSTS") {
    return {
      posts: action.payload
    };
  }
  return null;
};
