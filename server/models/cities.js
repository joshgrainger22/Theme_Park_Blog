const { Schema } = require('mongoose')

const Cities = new Schema(
    {
        name: { type: String, require: true },
        location: { type: String, require: true},
        image: { type: String, require: true },
    },
    { timestamps: true }
)

module.exports = Cities