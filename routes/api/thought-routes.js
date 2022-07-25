const router = require('express').Router();

const {
    getAllThoughts,
    updateThought,
    getThoughtById,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);


router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


module.exports = router;