import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComments } from '../services/CitiesAttracService'
import { CreateCommentsAction } from '../store/actions/CitiesAttracAction'
import { useNavigate} from 'react-router-dom'

function CreatePost() {

    const navigate = useNavigate()
    const [ name, setName ] = useState('')
    const [ posts, setPosts ] = useState('')
    const [ create, setCreate ] = useState(false)

    const dispatch = useDispatch()

    function CreateComments(e) {
        e.preventDefault()
   }


    return (
    <div>
       <h1>CreatePost</h1>
        <div>
            { create? 
            
            
            <form nSubmit={(e)=>CreateComments(e)}>  
                    <label>Name</label>
                    <div>
                        <input type='text' className='name-input' placeholder='Enter your name here' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <label>Comments</label>
                    <div>
                        <textarea className='comments-input' placeholder='Leave your comments here' value={posts} onChange={(e) => setPosts(e.target.value)} />
                    </div>
                    <button onClick={() => navigate(`/`)}>Submit</button>
            </form> :
               
            <button type='submit' className='review-button' onClick={() => setCreate(true)}>Create a Post</button>}

       </div>
       </div>
  )
}

export default CreatePost