import express from 'express'
import RestaurantsCtrl from './restaurants.controller.js'
import ReviewsCtrl from './reviews.controller.js'

const router = express.Router()
// router.route('/').get((req, res) => res.send('<h1>hello world</h1>'))
router.route('/').get(RestaurantsCtrl.apiGetRestaurants)

router
  .route('/review')
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router
