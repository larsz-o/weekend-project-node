//require express
let express = require('express');

//create an instance of express by calling the function returned above -- gives us an object 
let app = express(); 
let port = 5000; 

//make the public folder with static files
app.use(express.static('server/public')); 

//start up your server
app.listen(port, function(){
    console.log('listening on port', port);
}); 