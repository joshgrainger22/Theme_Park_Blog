import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComments } from '../services/CitiesAttracService'
import {
  CreateCommentsAction,
  LoadPosts
} from '../store/actions/CitiesAttracAction'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

function CreatePost(props) {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [posts, setPosts] = useState('')
  const [create, setCreate] = useState(false)

  const dispatch = useDispatch()

  function CreatePost(e) {
    e.preventDefault()
    window.location.reload(true)
  }

  return (
    <div>
      <h1>CreatePost</h1>
      <div>
        {create ? (
          <form onSubmit={(e) => CreatePost(e)}>
            <label>Name</label>
            <div>
              <input
                type="text"
                className="name-input"
                placeholder="Enter your name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label>Comments</label>
            <div>
              <textarea
                className="comments-input"
                placeholder="Leave your comments here"
                value={posts}
                onChange={(e) => setPosts(e.target.value)}
              />
            </div>
            <button onClick={() => navigate(`/`)}>Submit</button>
          </form>
        ) : (
          <button
            type="submit"
            className="review-button"
            onClick={() => setCreate(true)}
          >
            Create a Post
          </button>
        )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
