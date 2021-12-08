const express = require('express')
const bodyParser = require('body-parser')

//use a local module
const date = require(__dirname +'/date.js')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

// look in a folder named public to allow styes/ images/ etc to be accessible 
app.use(express.static('public'))

app.set("view engine", "ejs")

let newItem = []

app.get('/', (req, res) => {
            //local module date, returns function
            // * getdate() * 
    let day = date.getDay()

    res.render("list", { listTitle: day, newItem: newItem})


    // file named list, has to be inside the views folder
    // passing the day value onto the kindOfDay variable in
    // the ejs file

})

app.get('/about', (req, res) => {
    res.render('about')
})


app.post('/' , (req,res) => {
    newItem.push(req.body.newItem)   
     res.redirect('/')
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})