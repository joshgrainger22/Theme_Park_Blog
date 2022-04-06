import { useState } from 'react'

const LikeButton = () => {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    let newCount = likes + 1
    setLikes(newCount)
  }

  return <button onClick={addLike}>Likes {likes}</button>
}

export default LikeButton
