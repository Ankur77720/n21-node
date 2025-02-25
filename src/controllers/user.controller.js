const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.registerViewController = (req, res) => {

    res.render('register')

}


module.exports.registerUserController = async (req, res) => {

    const { username, email, profileImage, password } = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        profileImage,
        password: hashPassword
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, "node-auth-secret")


    res.cookie("token", token)

    res.status(201).json({
        user, token
    })


}

module.exports.loginViewController = (req, res) => {
    res.render('login')
}

module.exports.loginUserController = async (req, res) => {

    const { email, password } = req.body


    const user = await userModel.findOne({
        email
    })

    if (!user) {
        res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, "node-auth-secret")


    res.cookie("token", token)


    res.status(200).json({
        user, token
    })

}