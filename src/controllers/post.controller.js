const postModel = require("../models/post.model")

module.exports.createPostView = (req, res) => {
    res.render('create-post')
}

module.exports.createPostController = async (req, res) => {

    const { media, caption } = req.body

    const post = await postModel.create({
        media,
        caption
    })

    res.status(201).json({
        post
    })
}