const { Schema } = require('mongoose')

const Attractions = new Schema(
    {
        name: { type: String, require: true },
        image: { type: String, require: true },
        cityName: {type: Schema.Types.String, ref: 'cityName'},
        city_Id: {type: Schema.Types.ObjectId, ref: 'city_Id'}
    },
    { timestamps: true }
)

module.exports = Attractions