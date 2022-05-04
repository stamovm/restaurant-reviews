import express from 'express'
import RestaurantsCtrl from './restaurants.controller.js'
const router = express.Router()
// router.route('/').get((req, res) => res.send('<h1>hello world</h1>'))
router.route('/').get(RestaurantsCtrl.apiGetRestaurants)
export default router
