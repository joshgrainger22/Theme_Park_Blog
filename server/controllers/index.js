// const Data = require('../models/data')
const { Cities, Attractions } = require('../models')

const getAllCities = async (request, response) => {
  try {
    const cities = await Cities.find()
    return response.status(200).json({ cities })
  } catch (err) {
    return response.status(500).send(err.message)
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
  getAllCities
}
