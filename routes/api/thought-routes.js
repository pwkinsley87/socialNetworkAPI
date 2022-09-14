const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

// GET all thoughts
router.route('/').get(getAllThoughts);

// GET, PUT, DELETE thoughts by ID
router.route('/:id').get(getThoughtById).put(updateThoughts).delete(deleteThoughts);

// POST thoughts
router.route('/:userId').post(createThought);

// POST reaction to a thought via its thoughtId
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE a reaction via the reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router; 