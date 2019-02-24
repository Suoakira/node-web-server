const express = require("express")
const hbs = require('hbs')

let app = express()

hbs.registerPartials(__dirname + "/views/partials")
// __dirname stores the local path to the web server
app.set('view engine', 'hbs')
app.use(express.static(__dirname + "/public"))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
    // console.log("test")
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get("/", (req, resp) => {
    // sends data back
    // resp.send("<h1>Hello Express!</h1>")
    resp.render('home.hbs', {
        pageTitle: "Home Page",
        message: "I am Dynamic Rendering"
    })
})

app.get("/about", (req, resp) => {
    resp.render('about.hbs', {
        pageTitle: "About Page"
    })
})

app.get("/bad", (req, resp) => {
    resp.send({
        errorMessage: "Unable to handle request"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})