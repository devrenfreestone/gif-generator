
  
console.log("hello");

//Global Variables
var buttons = $("#buttons");
var gifs = $("#images");
var addNew = $("#addNew");
var whatElse = $('input');
var json = ""



//Topics Array
var topics = ["pie", "cake", "bacon", "avocado", "bbq", "enchiladas", "pizza", "hamburger",
				"ice cream"];

//Giphy URL and API Key
var queryUrl = "http://api.giphy.com/v1/gifs/search?q="
var API = "&limit=5&api_key=dc6zaTOxFJmzC"

//Creates buttons from the Topics Array
gifButtons();

function gifButtons(){
	for (var i = 0; i < topics.length; i++) {
	buttons.append("<button name=" + topics[i] + ">" + topics[i] + "</button");

}};





//Adds new button on "Add New Item" click
$(addNew).on("click",function(){
	event.preventDefault();
	topics.push(whatElse.val());
	console.log(topics);
	$(buttons).html("");
	gifButtons();
});

//On Click to start Ajax Request
$(buttons).on("click", 'button',function(event){

//Holds the value of the button so it can be used in the Ajax call


//Ajax Request
	$.ajax({
		url: queryUrl + $(this).attr("name") + API,
		method: "Get"}).done(function(response) {
			json = response;
			console.log(this);
			addGif();
		


	})

});

//Writes the gifs to the Dom
function addGif(){
	for (var i = 0; i < json.data.length; i++) {	
	gifs.prepend("<img src=" + json.data[i].images.downsized_medium.url + ">");
	
}};




