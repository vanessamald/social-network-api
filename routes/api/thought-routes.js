const router = require('express').Router();

const {
    getAllThoughts,
    updateThoughts,
    getThoughtById,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts);

module.exports = router;