var express = require("express");

app = express();

var request = require("request");

app.set("view engine", "ejs")

 

app.get("/results", function(req, res) {

    var query = req.query.search;

    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"

    request(url, function(error, response, body){

        if(!error && response.statusCode === 200){

            var data = JSON.parse(body);

            res.render("results", {data: data});

            }

       

    });

});

 

app.listen(3000, function(){

    console.log("The app is working");

});