var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("Hi there, welcome to my assignement");
});

app.get("/speak/:animal", function(req,res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof"
	}
	
	var animal = req.params.animal.toLowerCase();
	
	
	var sound = sounds[animal];
	res.send("The "+ animal +" says " + sound);
	
		
});



// Listening the requests
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server has started!");
});