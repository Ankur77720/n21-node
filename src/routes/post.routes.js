const express = require("express")
const router = express.Router()
const postController = require("../controllers/post.controller")
const userMiddleware = require("../middlewares/user.middleware")


/* /posts/create [get] */
router.get('/create', userMiddleware.authUser, postController.createPostView)
    
/* /posts/create [post] */
router.post('/create', userMiddleware.authUser, postController.createPostController)



module.exports = router