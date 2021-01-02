
/* did as soon as possible*/

/* process.env contains all the Environments variables */

/* Useful Example */
require('dotenv').config()
if (process.env.NODE_ENV === "development") {
    /* all that will be coded here will be executed only in dev*/
    console.log("on est en dev");

} else {
    console.log('prod');

}


