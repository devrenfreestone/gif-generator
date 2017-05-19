
  
console.log("hello");

//Global Variables
var buttons = $("#buttons");
var gifs = $("#images");
var addNew = $("#addNew");
var whatElse = $("#whatElse");
var whatElseVal = whatElse.val();
var json = ""


//Topics Array
var topics = ["pie", "cake", "bacon", "avocado", "bbq", "enchiladas", "pizza", "hamburger",
				"ice cream"];

//Giphy URL and API Key
var queryUrl = "http://api.giphy.com/v1/gifs/search?q="
var API = "&limit=5&api_key=dc6zaTOxFJmzC"

//Creates buttons from the Topics Array
for (var i = 0; i < 9; i++) {
	buttons.append("<button>" + topics[i] + "</button>");
	buttons.attr("name",topics[i]);
};

function gifButtons(){
	for (var i = 9; i < topics.length; i++) {
	buttons.append("<button>" + topics[i] + "</button>");
	buttons.attr("name",topics[i]);
}};



//Adds new button on "Add New Item" click
$(addNew).click(function(){
	event.preventDefault();
	topics.push(whatElseVal);
	console.log(topics);
	gifButtons();
});

//On Click to start Ajax Request
$(buttons).click(function(event){

//Holds the value of the button so it can be used in the Ajax call


//Ajax Request
	$.ajax({
		url: queryUrl + buttons.attr(name) + API,
		method: "Get"}).done(function(response) {
			json = response;
			console.log(buttons.attr(name));
			addGif()
		


	})

});

//Writes the gifs to the Dom
function addGif(){
	for (var i = 0; i < json.data.length; i++) {	
	gifs.prepend("<img src=" + json.data[i].images.downsized_medium.url + ">");
	
}}




