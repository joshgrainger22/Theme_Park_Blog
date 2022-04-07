const { GET_COMMENTS, GET_NEW_COMMENTS } = require('../types')

const iState = {
  comments: [],
  newcomments: ''
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: [...state.comments, action.payload] }
    case GET_NEW_COMMENTS:
      return { ...state, newcomments: action.payload }
    default:
      return { ...state }
  }
}

export default CommentReducer
