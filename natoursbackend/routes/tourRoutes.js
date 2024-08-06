const express = require('express');
const fs = require('fs');
const {
  createTour,
  getAllTours,
  getSingleTour,
  deleteTour,
  updateTour,
} = require('../controllers/tourController');
const router = express.Router();

router.route('/').post(createTour).get(getAllTours);
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
