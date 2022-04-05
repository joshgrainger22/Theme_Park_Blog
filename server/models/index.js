const mongoose = require ('mongoose')
const AttractionsSchema = require ('./attractions')
const CitiesSchema = require ('./cities')



const Cities = mongoose.model('Cities', CitiesSchema)
const Attractions = mongoose.model('Attractions', AttractionsSchema)


module.exports = {
    Cities,
    Attractions
}