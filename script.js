var head = document.getElementsByTagName('head');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "http://code.jquery.com/jquery-2.2.1.min.js";
  
console.log("hello");

//Global Variables
var buttons = $("#buttons");
var gifs = $("#gifs");
var addButton = $("#addButton");

//Topics Array
var topics = ["pie", "cake", "bacon", "avocado", "bbq", "enchiladas", "pizza", "hamburger",
				"ice cream"];

//Giphy URL and API Key
var url = "http://api.giphy.com/v1/gifs/search?q="
var API = "dc6zaTOxFJmzC"

//Creates buttons from the Topics Array
for (var i = 0; i < topics.length; i++) {
	$(buttons).html("<button>" + topics[i] + "</button>");
}


//AJAX request



