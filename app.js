//var https = require('https');			//*** uncomment if using https with CA cert and key
const express = require("express");
const upload = require("express-fileupload");
const path = require("path");

const app = express();

//*** uncomment if using https with CA cert and key, just drop the keys in the same folder of app.js
/*var https_options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};*/

// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
app.use(upload());


// enable static files pointing to the folder "public" [index.html, js, css, images, icons, all goes here]
app.use(express.static(path.join(__dirname, "public")));


// HTTP POST
// upload image files to server
app.post("/upload", function(request, response) {
    var video = new Array();
	
    if(request.files) {
        var arr;
        if(Array.isArray(request.files.filesfld)) {
            arr = request.files.filesfld;
        }
        else {
            arr = new Array(1);
            arr[0] = request.files.filesfld;
        }
        for(var i = 0; i < arr.length; i++) {
            var file = arr[i];
            if(file.mimetype.substring(0,5).toLowerCase() == "video") {
                video[i] = "/" + file.name;
                file.mv("./video" + video[i], function (err) {
                    if(err) {
                        console.log(err);
                    }
                });
            }
        }
    }
	
	// give the server a second to write the files
    setTimeout(function(){response.json(video);}, 1000);
});


// set port from environment variable, or 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));//<--comment off this line if using https

//use this if using https
/*https.createServer(https_options, app).listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});*/
