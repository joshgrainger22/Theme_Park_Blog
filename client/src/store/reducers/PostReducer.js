const { GET_POSTS, GET_NEW_POSTS } = require('../types')

const iState = {
  posts: [],
  newpost: ''
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: [...state.posts, action.payload] }
    case GET_NEW_POSTS:
      return { ...state, newpost: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
