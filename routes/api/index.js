const router = require('express').Router();

const userRoutes = require ('./user-routes');

//what is this for?
router.use('/users',userRoutes);

module.exports = router;