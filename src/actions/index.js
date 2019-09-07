import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async dispatch => {
  await dispatch(fetchPosts());
  await dispatch(fetchUsers());
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUsers = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USERS", payload: response.data });
// };

export const fetchUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get(`/users`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};
