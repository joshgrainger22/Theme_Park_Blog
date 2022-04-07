import Client from './'

export const GetCities = async () => {
  try {
    const res = await Client.get(`/cities`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAttractions = async (id) => {
  try {
    const res = await Client.get(`/attractions`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostCreatePost = async () => {
  try {
    const res = await Client.post('/createPost')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllPosts = async () => {
  try {
    const res = await Client.get('/getAllPosts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostCreateComment = async () => {
  try {
    const res = await Client.post('/addComment')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllComments = async () => {
  try {
    const res = await Client.post('/getAllComments')
    return res.data
  } catch (error) {
    throw error
  }
}
