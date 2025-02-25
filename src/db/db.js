const mongoose = require("mongoose")

function connect() {
    mongoose.connect("mongodb://localhost:27017/n21-auth")
        .then(() => {
            console.log("Connected to database")
        })
        .catch((err) => {
            console.log("Error connecting to database")
            console.log(err)
        })
}


module.exports = connect