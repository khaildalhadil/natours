
const getAllUsers = (req, res) => {
  res.json({message: 'All users not found'});
}

const getOneUser = (req, res) => {
  res.json({message: `user ${req.params.id}`});
}

const deleteUser = (req, res) => {
  res.json({message: `deleted ${req.params.id}`});
}

const updateUser = (req, res) => {
  res.json({message: `update user ${req.params.id}`});
}

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
}
