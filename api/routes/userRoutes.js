const router = require('express').Router();
const passport = require('passport');
const { getMyProfile, logout, getAllUsers, getAdminStats } = require('../controllers/userController');
const { isAuth, isAdmin } = require('../middlewares/auth');

// routes
router.get('/google', passport.authenticate('google', {
    scope: ['profile'],
}));

// router.get('/login', passport.authenticate('google', {
//     successRedirect: process.env.FRONTEND_URL
// }))

router.get('/login', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000'
}))

router.get('/me', isAuth, getMyProfile);
router.get('/logout', isAuth, logout);

router.get('/admin/all', isAuth, isAdmin, getAllUsers);

router.get('/admin/stats', isAuth, isAdmin, getAdminStats);

module.exports = router;