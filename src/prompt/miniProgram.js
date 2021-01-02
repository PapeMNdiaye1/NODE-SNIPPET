var prompt = require('prompt');
//
// Start the prompt
//
prompt.start();
//
// Get two properties from the user: username and email
//
prompt.get(['username'], function (err, result) {
    if (err) {
        return true
    } else if (result.username == "pape") {
        console.log(`###########################\n
                   ${result.username}
          the best \n##########################`);
    } else {
        console.log(`${result.username} :)`);
    }

});