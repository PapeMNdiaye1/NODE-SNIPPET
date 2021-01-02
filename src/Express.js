
import express from "express"
// this is for parsing the JSON i send in Post method
import bodyParser from "body-parser"

import Router from "./Routs/routers"

// get .env var
require('dotenv').config()
const { APP_PORT, NODE_ENV } = process.env

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// define what to use on the ent point /api
app.use('/api', Router)

let server = app.listen(APP_PORT, () => {
    if (NODE_ENV === "development") {
        console.log(`[express]is running on ${APP_PORT}`);
    }
})


// Export App for testing
if (NODE_ENV === "test") {
    console.log(`[express]in test on ${APP_PORT}`);
    module.exports = server
}






