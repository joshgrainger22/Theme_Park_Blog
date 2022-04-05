const db = require('../db')
const { Cities } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const citiesSeed = [
        {
            name: 'Statue Of Liberty',
            location: 'New York City',
            image: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg'
        },
        {
            name: 'Hollywood Sign',
            location: 'Los Angeles, CA',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/1200px-Hollywood_Sign_%28Zuschnitt%29.jpg'
        },
        {
            name: 'Golden Gate Bridge',
            location: 'San Francisco, CA',
            image: 'https://www.fodors.com/wp-content/uploads/2018/11/10-Golden-Gate-Bridge.jpg'
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