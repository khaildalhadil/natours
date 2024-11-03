const {updateToure, addTours, getByToursId, getAllTours, deleteToure} = require('../controllers/touersControllers');
const express = require('express');

const touersRouter = express.Router();

touersRouter
  .route('/')
  .get(getAllTours)
  .post(addTours)

touersRouter
  .route('/:id')
  .get(getByToursId)
  .put(updateToure)
  .delete(deleteToure)

module.exports = touersRouter;