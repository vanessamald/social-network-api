const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteUserFriend,
    addUserFriend,
    getUserFriends
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Set up DELETE, GET, and POST at /api/users/:id/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .get(getUserFriends)
    .post(addUserFriend)
    .delete(deleteUserFriend);

module.exports = router;