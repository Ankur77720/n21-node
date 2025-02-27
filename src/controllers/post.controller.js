const postModel = require("../models/post.model")

module.exports.createPostView = (req, res) => {
    res.render('create-post')
}

module.exports.createPostController = async (req, res) => {

    console.log(req.user.id)

    const { media, caption } = req.body

    const post = await postModel.create({
        media,
        caption,
        author: req.user.id
    })

    res.status(201).json({
        post,
        message: "Post created successfully"
    })
}