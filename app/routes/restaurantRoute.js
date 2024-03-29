const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const newRestaurantController = require('../controllers/newRestaurantController')
const myRestaurantController = require('../controllers/myRestaurantsController')
const restaurantDetailsController = require('../controllers/restaurantDetailsController')

router.post('/new-restaurant', auth, newRestaurantController)
router.get('/my-restaurants', auth, myRestaurantController)
router.get('/details/:restaurantId', auth, restaurantDetailsController)
//updateRestaurant, deleteRestaurantneeds to be added

module.exports = router;