const mongoose = require ('mongoose')
const AttractionsSchema = require ('./attractions')
const CitiesSchema = require ('./cities')
const CommentSchema = require ('./Comments')
const PostSchema = require ('./Post')

const Cities = mongoose.model('Cities', CitiesSchema)
const Attractions = mongoose.model('Attractions', AttractionsSchema)
const Comment = mongoose.model('Comment', CommentSchema )
const Post = mongoose.model('Post', PostSchema)


module.exports = {
    Cities,
    Attractions,
    Comment,
    Post
}