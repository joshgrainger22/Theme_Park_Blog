const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    name: {type: String, required: true},
    text: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = Comment