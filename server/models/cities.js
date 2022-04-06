const { Schema } = require('mongoose')

const Cities = new Schema(
    {
        cityName: { type: String, require: true },
        description: { type: String, require: true},
        image: { type: String, require: true },
    },
    { timestamps: true }
)

module.exports = Cities