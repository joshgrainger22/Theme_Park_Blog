const db = require('../db')
const { Cities } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const citiesSeed = [
        {
            cityName: "New York City",
            description: "New York is a city of diversity and dynamism. It is also a city of politics, economy and culture. It is even described as the economic and cultural capital of the world, and New York City is one of the most populous cities in the United States.",
            image: "http://res.cloudinary.com/simpleview/image/upload/v1622206643/clients/newyorkstate/2000_x_797_web_hero_skyline_2_6b921811-cd45-42fd-990a-ba60c7fba1f0.jpg"
        },
        {
            cityName: "Los Angeles, CA ",
            description: "The city of Los Angeles [69] (also known simply as L.A., and nicknamed the 'City of Angels') is the most populous city in California",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
        },
        {
            cityName: "San Francisco, CA",
            description: "San Francisco is a cultural and financial centre of the western United States and one of the country's most cosmopolitan cities",
            image: "https://media.cntraveler.com/photos/5a99b5c520dfb6552425ecc8/2:1/w_2560%2Cc_limit/san-francisco_GettyImages-600366840.jpg"
        }
    ]

    await Cities.insertMany(citiesSeed)
        console.log('cities added')
        }
        const run = async () => {
            await main()
            db.close()
        }
        run()