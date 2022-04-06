const db = require('../db')
const { Cities } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const citiesSeed = [
        {
            name: 'New York City',
            location: 'New York',
            image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_720,q_75,w_1400/v1/clients/newyorkcity/Coronavirus_Info_midtown_manhattan_skyline_nyc_3000x2000_364fa9b8-86ce-4f95-907a-4bd8ea32f232.jpg'
        },
        {
            name: 'Los Angeles',
            location: 'Southern California',
            image: 'https://media.california.com/media/_versions/articles/optimized-shutterstock_520789897__1200x787___v1222x580.jpg'
        },
        {
            name: 'San Francisco',
            location: 'North California',
            image: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_627905945.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200'
        },
    ]

    await Cities.insertMany(citiesSeed)
        console.log('cities added')
        }
        const run = async () => {
            await main()
            db.close()
        }
        run()