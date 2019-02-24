const express = require("express")

let app = express()

app.get("/", (req, resp) => {
    // sends data back
    // resp.send("<h1>Hello Express!</h1>")
    resp.send({
        name: "Stephen",
        likes: [
            "bikes",
            "cities"
        ]
    })
})

app.get("/about", (req, resp) => {
    resp.send({
        about: "hey"
    })
})

app.get("/bad", (req, resp) => {
    resp.send({
        errorMessage: "Unable to handle request"
    })
})

app.listen(3000)