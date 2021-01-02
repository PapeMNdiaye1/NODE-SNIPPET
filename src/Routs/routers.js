import express from "express"
// import _get for error handling
require('dotenv').config()

let _get = require('lodash.get');

// import Router form express for routs creations
const Router = express.Router()

// ###############################################
const { TOKEN } = process.env
//creat an route 
//so we cane in the url set infos and send responses
// EX: http localhost:3000/api/11?name=Pape

const auth = (req, res, next) => {
    if (_get(req, "query.TOKEN") !== TOKEN) {
        // console.log(req.query.TOKEN, TOKEN);
        return res.status(401).send("unauthorized")
    }
    // console.log(req.query.TOKEN, TOKEN);
    // console.log('non TOKEN');
    return next()
}


const send = (req, res) => {
    // console.log(_get(req, "query.name", "default name"));
    res.send('R1 work')
}

Router.get('/', auth, send)


// ###############################################
Router.post('/', (req, res) => {
    res.json(_get(req, "body"))
    console.log(req.body);
})




export default Router 