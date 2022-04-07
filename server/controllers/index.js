// const Data = require('../models/data')

const { Cities, Attractions, Comment, Post } = require('../models')

const getAllCities = async (request, response) => {
  try {
    const cities = await Cities.find()
    return response.status(200).json({ cities })
  } catch (err) {
    return response.status(500).send(err.message)
  }
}

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    console.log(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    console.log(req.body)
    await comment.save()
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllAttractions = async (request, response) => {
  try {
    const attractions = await Attractions.find()
    return response.status(200).json({ attractions })
  } catch (err) {
    return response.status(500).send(err.message)
  }
}

module.exports = {
  getAllAttractions,
  getAllCities,
  createPost,
  createComment,
  getAllPost,
  getAllComments
}
