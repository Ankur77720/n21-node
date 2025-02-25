const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const jwt = require('jsonwebtoken')


/* /users/register [get] */
router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/register', userController.registerUserController)


router.get('/login', userController.loginViewController)

router.post('/login', userController.loginUserController)   

/* /users/profile [get] */
router.get(
    '/profile',
    (req, res, next) => {
        try {
            const token = req.cookies.token
            const decoded = jwt.verify(token, "node-auth-secret")
            next()
        } catch (err) {
            res.status(401).json({
                message: "Unauthorized"
            })
        }
    },
    (req, res) => {
        res.send("profile")
    })

module.exports = router