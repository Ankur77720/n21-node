const jwt = require('jsonwebtoken')

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token
        const decoded = jwt.verify(token, "node-auth-secret")
        next()

    } catch (err) {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}