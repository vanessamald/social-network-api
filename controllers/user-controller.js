const { User } = require('../models/user');

const UserController = {
    // get all users
    getAllUsers: (req, res) => {
        User.find({})
            .populate({
                path: 'thought',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getUserById: ({ params }, res) => {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thought',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}

module.exports = UserController;