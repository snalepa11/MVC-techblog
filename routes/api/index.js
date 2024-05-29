const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const commentRoutes = require('./comment-routes.js');
const userRoutes = require('./user-routes.js/index.js');
const postRoutes = require('./post-routes.js/index.js');

// // When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
