const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Initiate Express application
const app = express()

// Set the public directory assets folder.
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// Set the config option for 'view engine' to handlebars (hbs)
app.set('view engine', 'hbs')

// Configure views path.
const viewsPath = path.join(__dirname, '../templates/views') 
app.set('views', viewsPath)

// Configure partials path.
const partialsPath = path.join(__dirname, '../templates/partials') 
hbs.registerPartials(partialsPath)

app.get('', (req, res) => { res.render('index', {
    title: 'Liz Elsa Bell',
    name: 'Liz Bell',
    query: req.query.thing,
    dQ: 'hey'})
    })

// 404 Handling
app.get('*', (req, res) => { res.render('404', {
    title: '404',
    name: '', errorMessage: 'Page not found.'
    }) })

// Choose port to listen on (3000)
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
    })

