const rt = require('../restaurant.js')
const db = require('../../config/mongoose')

const restaurantList = require('./restaurant.json').results

db.once('open', () => {
  for (let i = 0; i < restaurantList.length; i++) {
    rt.create({
      name: restaurantList[i].name,
      name_en: restaurantList[i].name_en,
      category: restaurantList[i].category,
      image: restaurantList[i].image,
      location: restaurantList[i].location,
      phone: restaurantList[i].phone,
      google_map: restaurantList[i].google_map,
      rating: restaurantList[i].rating,
      description: restaurantList[i].description
    })
  }
  console.log('done')
})