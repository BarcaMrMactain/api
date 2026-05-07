const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

// PORT
const PORT = process.env.PORT || 5000  // vælg selv port


// ---- DB Mongo connect
// --------------------------------------------------------
mongoose.connect("mongodb://localhost:27017/dataservice_db")
.then( () => {
    console.log("MongoDB: Forbundet 👍")
} )
.catch( (err) => {
    console.log("MongoDB FEJL: ", err)
} )

const db = mongoose.connection
db.on('error', (error) => { console.log("🔴 MongoDB runtime fejl:", error) } )
db.once('open', (error) => { console.log("🟢 MongoDB connection åben") } )


// GET: Servers endpoint - base-URL
// http://localhost:5000/
//---------------------------------------------------------
app.get('/', async (req, res) => {

    console.log("GET: Serverens root endpoint her!")

    res.status(200).json({ message: "Velkommen til serveren base-URL 😊" } ) // http://localhost:5000/todos

} )



// ROUTES - routes-mounting eller router-mounting
// -----------------------------------------------
app.use('/todos', require( './routes/todos.routes'))


// ---- 404 page not found
//-------------------------
app.use((req, res) => {
    return res.status(404).json({ message: "Siden findes ikke - øv"})
})


// ----LISTEN - opstart af server lytter på port
// ----------------------------------------------
app.listen(PORT, () => {
    console.log( "---> Serveren er startet og lytter på port: " + PORT )
})
