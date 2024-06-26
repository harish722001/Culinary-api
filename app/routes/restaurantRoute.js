const express = require('express');
const router = express.Router();
const {auth} =require('../middlewares/auth')
const newRestaurantController = require('../controllers/newRestaurantController')
const myRestaurantController = require('../controllers/myRestaurantsController')
const restaurantDetailsController = require('../controllers/restaurantDetailsController')
const editRestaurantController = require('../controllers/editRestaurantController')

router.post('/new-restaurant', auth, newRestaurantController)
router.get('/my-restaurants', auth, myRestaurantController)
router.get('/details/:restaurantId', auth, restaurantDetailsController)
router.put('/edit-restaurant/:restaurantId', auth, editRestaurantController)
//deleteRestaurantneeds to be added

module.exports = router;