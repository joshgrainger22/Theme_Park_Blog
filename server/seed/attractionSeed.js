const db = require('../db')
const { Attractions, Cities } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const cityArray = await Cities.find({})

    const attractionsSeed = [
        {
            name: 'Statue Of Liberty',
            image: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg',
            cityName: cityArray[6].cityName,
            city_Id: cityArray[6]._id
        },
        {
            name: 'Hollywood Sign',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/1200px-Hollywood_Sign_%28Zuschnitt%29.jpg',
            cityName: cityArray[7].cityName,
            city_Id: cityArray[7].id
        },
        {
            name: 'Golden Gate Bridge',
            image: 'https://www.fodors.com/wp-content/uploads/2018/11/10-Golden-Gate-Bridge.jpg',
            cityName: cityArray[8].cityName,
            city_Id: cityArray[8]._id
        }
    ]

    await Attractions.insertMany(attractionsSeed)
        console.log('attractions added')
        }
        const run = async () => {
            await main()
            db.close()
        }
        run()
    


