const {getAllUsers, getOneUser, deleteUser, updateUser} = require('../controllers/usersControllers');
const express = require('express');
const userRouters = express.Router();

userRouters
  .route('/')
  .get(getAllUsers)

userRouters
  .route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = userRouters;


