import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
//import { createComments } from '../services/CitiesAttracService'
//import { CreateCommentsAction } from '../store/actions/CitiesAttracAction'
//import { useNavigate } from 'react-router-dom'

const Comment = () => {
  //const navigate = useNavigate()
  //const [name, setName] = useState('')
  const [posts, setPosts] = useState('')
  const [create, setCreate] = useState(false)

  const dispatch = useDispatch()

  function CreateComments(e) {
    e.preventDefault()
    window.location.reload(true)
  }

  return (
    <div>
      <h2>Comment</h2>
      <div>
        {create ? (
          <form onSubmit={(e) => CreateComments(e)}>
            <label>New Comment</label>
            <div>
              <textarea
                className="comments-input"
                placeholder="Add your comment here"
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
            Create a Comment
          </button>
        )}
      </div>
    </div>
  )
}

export default Comment
