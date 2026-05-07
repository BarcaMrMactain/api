const express = require('express')
const router = express.Router()

// ---- Hent alle/GET /todos ------------------------------------------------------------------
// -------------------------------------------------------------------------------------
router.get('/', async (req, res) => { 

    console.log("GET - hent alle todos")

    try {
        
        res.status( 200 ).json( { message: "Her er en hilsen fra alle /todos" } )

    } catch (error) {
        
        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 😓" } )

    }
    


 } )

// ---- Hent udvalgt/GET Udvalgt ud fra ID/todos ------------------------------------------------------------------
// -------------------------------------------------------------------------------------
router.get('/:id', async (req, res) => { 

    console.log("GET - hent udvalgt todos")
    
     try {
        
        res.status( 200 ).json( { message: "Vis udvalgt todo - ID " + req.params.id } )

    } catch (error) {
        
        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 😓" } )

    }

 } )

// ---- Opret/POST /todos ------------------------------------------------------------------
// -------------------------------------------------------------------------------------
router.post('/', async (req, res) => { 
    
      console.log("POST - Opret ny todos")
    
     try {
        
        res.status( 201 ).json( { message: " Ny todo er oprettet " } )

    } catch (error) {
        
        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 😓" } )

    }

 } )

 // ---- Ret/PUT /todos ------------------------------------------------------------------
// -------------------------------------------------------------------------------------
router.put('/:id', async (req, res) => { 

    console.log("PUT - ret todo")
    
     try {
        
        res.status( 200 ).json( { message: "Todo er rettet - ID: " + req.params.id } )

    } catch (error) {
        
        console.log( error.message )

        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 😓" } )

    }

 } )

 // ---- Slet/DELETE /todos ------------------------------------------------------------------
// -------------------------------------------------------------------------------------
router.delete('/:id', async (req, res) => { 
    
    console.log("DELETE - slet todo")
    
     try {
        
        res.status( 200 ).json( { message: "Todo er slettet - ID: " + req.params.id } )

    } catch (error) {
        
        console.log( error.message )

        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 😓 " } )

    }

 } )

module.exports = router;