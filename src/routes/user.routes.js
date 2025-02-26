const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const jwt = require('jsonwebtoken')
const userMiddleware = require("../middlewares/user.middleware")


/* /users/register [get] */
router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/register', userController.registerUserController)


router.get('/login', userController.loginViewController)

router.post('/login', userController.loginUserController)

/* /users/profile [get] */
router.get(
    '/profile',
    userMiddleware.authUser,
    //controller
    (req, res) => {
        res.send("profile")
    })

module.exports = router