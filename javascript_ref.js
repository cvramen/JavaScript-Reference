/*
Javascript Reference 
by Nick Kirkpatrick http://cvramen.com
*/

//Put JavaScript into a page
/*
<script type="text/javascript" src="javascript.js"></script>
*/

//Put JavaScript into a page in the body
/*
<script type="text/javascript">
	<!--
	//Javascript here
	-->
</script>	
*/

/*variables*/
var pippo; //variable without value
var pippo = 65; //integer
var hoge = "This is text"; //string
var hoge = 'This is text'; //string
var stam = true; //boolean
var stam = false; //boolean

/* data types */
//string to integer
var plugh = "50"; // a string
var plugh_int = Math.round(plugh); // turns the string into an integer
//boolean to string
var pluto = new Boolean(0); // "false"
alert(pluto); 
alert("The value that once was simply a Boolean: " + String(pluto) + "!"); // "The value that once was simply a Boolean: false!"

/*array*/
var colorsarray = ["red","gray","sepia","salmon pink","moss green"]; //create array
colorsarray[5] = "lime"; //adds "lime" as the 6th item in the array
for (i=0; i<colorsarray.length; i++) { //array.length is the number of items in the array
	console.log(colorsarray[i]); // "i" is the current item in the array
}
// push
colorsarray.push("fuchsia"); //adds as last item in array

/* Is not a number */
console.log((isNaN(hoge))? "hoge ain't no number" : "of course hoge is a number!"); //because hoge is a string isNaN(hoge) is true

/*alert and console*/
alert("The text in this is part of an alert");
console.log("Hello World!"); //send message to the console
console.log(pippo,stam); //send multiple variables to the console

/* If Statement */
if (pippo < 99) {
	//code goes here
} else if (pippo != 55) {
	//code goes here
} else {
	//code goes here
}

/* Ternary Operation */ 
//
var myIceCream = "Gold Ribbon";
alert((myIceCream == "Gold Ribbon") ? "I got the bad Ice Cream. I should've gotten a Red Velvet" : "I got the good one, I got Red Velvet"); //find out if myIceCream equals Gold Ribbon. First statement executes if it's true. The statement after the colon executes if it's false.
//
var bw = Math.random();
alert("bw is " + bw);
var ttxy;
(bw > .4) ? ttxy = "greater than .4" : ttxy = "not greater than .4"; //if (bw > .4) is true, execute the first statement; otherwise execute the second
alert("ttxy is " + ttxy);

/* Loops */
// Below four loops (count_a, count_b, count_c, count_d) produce the same thing
/* while loop */
var count_a = 0;
while (count_a < 13) {
	//do something
	console.log("count_a is" + count_a);
	count_a++; //adds one to count_a
}

/*do while loop*/
count_b = 0;
do {
	//do something
	console.log("count_b is" + count_b);
	count_b++;
} while (count_b < 13);

/*for loop*/
for (var count_c = 0; count_c < 13; count_c++) {
//do something
console.log("count_c is" + count_c);
}

/*loop with break*/
for (var count_d = 0; count_d < 5000 ; count_d++) {
	console.log(count_d);
	if (count_d == 12) {
		break; //takes you out of loop when count_d reaches 75
	}
}

/* The above four loops produce the same result

/*continue*/
for (var count_e = 0; count_e < 26; count_e++) {
	//do stuff	
	if (count_e % 5 == 0) {
		continue;
	}
	console.log(count_e + ": Nope, I ain't divisible by 5");
	//do some other stuff
	//the "other stuff" won't get done when count_e is divisible by 5, but will every other time
}

/*functions*/
function myFunction {
	console.log("We're in the function");
}
myFunction();

/*with parameters*/
function sedan (make, model, price) { //accepts three different parameters
	var carstatement = "I have a " + make + " " + model + " and I paid " + price + " dollars for it."
	alert(carstatement);
}
sedan ("Buick","Enclave",18000); //gives values to the parameters "make", "model", and "price". The alert will say "I have a Buick Enclave and I paid 18000 dollars for it."
sedan ("Ford","Focus",15000);

/*with return*/
function ourMulti (firstnum, secondnum) {
	var myAnswer = firstnum * secondnum;
	return  myAnswer; //myAnswer will be accessible outside the function
}
var myresult = ourMulti(4,12); //yields 48
alert(myresult);

/*Math abilities*/
var mathDemo = 13.77;
console.log(Math.round(mathDemo)); //rounds decimal
console.log(Math.ceil(mathDemo)); //rounds UP
console.log(Math.floor(mathDemo)); //rounds DOWN
console.log(Math.pow(mathDemo,3)); //number to the third power
console.log(Math.sqrt(mathDemo)); //square root
console.log(Math.log(mathDemo)); //logarithm
console.log(Math.abs(mathDemo)); //absolute value
console.log(Math.random()); //random number between 0 and 1

/* Conversion to Hex */
var blubb = 215; //decimal variable
var hexString = blubb.toString(16); //hexadecimal format variable
alert(hexString);

/*dates*/
var curr_day = new Date();
var newyear = new Date(2000,0,1);
var y2k = new Date(2000,0,1,0,0,0);
var independenceday = new Date(1776,6,4); //July 4, 1776

document.write(curr_day + "<br />"); //current date and time
document.write(newyear + "<br />"); //Sat Jan 01 2000 00:00:00 GMT-0500 (Eastern Standard Time)
document.write(y2k + "<br />"); //Sat Jan 01 2000 00:00:00 GMT-0500 (Eastern Standard Time)

console.log(curr_day.getMonth()); //returns 0-11 (11 is December)
console.log(curr_day.getFullYear()); //YYYY not zero-based
console.log(curr_day.getDate()); //day of month
console.log(curr_day.getDay()); //0-6 day of week
console.log(curr_day.getHours()); //0-23
console.log(curr_day.getTime()); //milliseconds since 1/1/1970

var stDate = new Date(2008,1,5);
console.log("The Super Tuesday of 2008 was on a: ", stDate.getDay()); //yields "2", which is Tuesday

independenceday.setMonth(5);
independenceday.setFullYear(2012);
independenceday.setDate(8);
console.log(independenceday); //independenceday was changed

/*comparing dates*/
var firstdate = new Date(2000,0,1);
var seconddate = new Date(2000,0,1);
console.log((firstdate == seconddate)); //yields false. firstdate and seconddate are both objects

if (firstdate.getTime() == seconddate.getTime()) { //these values are equal
	console.log("They ARE the same!");
} else {
	console.log("No, not equal.");
}

setTimeout(function()
{
	console.log("I execute after 1500 milliseconds");
},1500);

/* Time-Based */
setInterval(function(){
	alert("What here shall miss, our toil shall strive to mend.")
}, 3000);

/*jQuery*/
//"$" is the same thing as "jQuery" when the page has a jQuery .js file

$(document).ready(function() {
	//code that executes when the DOM is fully loaded. Most jquery code will need to be inside this function in order to execute
});

$(window).load(function () {
  // run a function when the page is fully loaded, including graphics.
});

/* Run JavaScript Only After Entire Page Has Loaded */
$(window).bind("load", function() {
   // code here
});

/* How to run code that has to be delayed to make certain that the page has finished loading before you start modifying its contents */
$(window).bind("load", function() {
	setTimeout(function()
	{
		//what you want to do
	}, 3200);
});

$("#myCells").addClass("arialText"); //finds element with ID myCells and gives it class "arialText"
$(".menuItems").addClass("ice"); //finds class menuItems and gives it class "ice"
$("ul.user_options").addClass("violet_background"); //finds ul element with class user_options and adds a second class to it called "violet_background"
$("h1").toggleClass("salmonpinkthing"); //toggles the class of h1 elements; if it's on, it becomes off and if it's off it becomes on

/* jQuery each */
$(".amount").each(function() {
	$(this).before("<div style='color:#ee8d00;font-size:15pt;'>You only live once.</div>"); //Goes through every element "amount" and attaches some html before it.
	$(this).css("color","#ff0000"); //Goes through every element "amount" and makes it red
});	

/* jQuery prepend */
$(".tabnews").prepend("~"); //Goes to every element named "tabnews" and places "~" before it

/*jQuery click*/
$(".firstpara").click(function() {
	$(".talk").text("You clicked it!"); //click on an element with class firstpara, all elements with class talk will contain "You clicked it!"
});

$("h1").click(function() {
	$(this).append("Hi, this is an h1 element!"); //click on an H1, and this adds text at the end
});

/* jQuery text */
$("#headerlist").text("The DOM is fully loaded."); //changes content of headerlist when the DOM is fully loaded

/*jquery .css*/
$("p").css("color","red"); //changes css (property is color, value is red)

/*jquery .css, multiple properties*/
$(".something").css({"color":"#0000ff","font-weight":"bold"});

/*jquery .animate*/
$(".something").animate({ //changes the margin, padding, width, and font-size values of this element over 1650 milliseconds
	margin: "70px 0 0 0",
	padding: "50px 0 0 0",
	width: "50%",
	fontSize: "20px" //note how "font-size" is written in jQuery
  }, 1650, function() {
	alert("I pop up when the animation is over!");	
  });
  
  /*jquery .hide*/
$('#expd').hide(); //the element is no longer visible on the page. This phenomenon is animated
$('#expd').hide("slow"); //hide slowly
$('#expd').hide(2000); //hide over the course of 2000 milliseconds
$('#expd').hide("slow", function() { //do stuff when the hide is complete
	alert('Animation complete.');
});
  
/*jquery remove */
$("#video_secondrectangle").remove(); //this element is no longer in the DOM

/* Identify specific element in page */
//finds the img tag in that page that contains a source attribute that contains "rounded"
$(".magnet_sidebar").load("https://meaninglessurl/notrealfile.aspx img[src*='rounded']");
//finds IMG elements whose source contains "t" and puts a red border on them
$('img[src*="t"]').css({"border":"1px solid #ff0000"});
  
/*Make an element appear when user hovers over another element and then disappear again when the cursor leaves*/
$(".eggs_primary_menu").hover(
	function () {
	$(".eggs_secondary_menu").css("display","inline"); //eggs_secondary_menu appears
	},
	function () {
	$(".eggs_secondary_menu").css("display","none"); //eggs_secondary_menu disappears when the cursor is no longer hoved over eggs_primary_menu
	}
);

/*Make an element's own CSS properties change upon hovering over it*/
$(".col-2").hover(
	function () {
	$(this).css("background","#00ff00");
	},
	function () {
	$(this).css("background","none");
	}
);

/* Jquery Attribute */
//changes the id attribute of the element named "hamptonlist". It is now named "portsmouthlist" 
$("#hamptonlist").attr("id", "portsmouthlist");

//Finds the attribute
var eventname = $(".ui_event").attr("src"); //Finds the src attribute of elements "ui_event"
console.log(eventname);

//Do something to all divs whose "magic" attribute is "alpha"
$("div").each(function() { 
	var garply = $(this).attr("magic");
	if (garply == "alpha") {
		$(this).hide(1300);	
	}
});

/* jQuery eq */
//this is 0-indexed
$(".shirts a:eq(1)").hide(); //finds the second a element inside all elements with the "shirts" class

/* jQuery gt */
//this is 0-indexed
$("td:gt(13)").css("background", "#00ffff"); //finds all td elements 

/* jQuery nth-child */
$("tr:nth-child(2)").css("background","#ff0000"); //finds the child element of the second tr
$("tr:nth-child(3n)").css("background","#ff0000"); //finds every 3rd tr element
$("tr:nth-child(3n-4)").css("background","#ff0000"); //finds every 3rd tr element, offsets by 4 (i.e. starts at -4 instead of the usual 0)
$("tr:nth-child(even)").css("background","#ff0000"); //finds the even-numbered tr elements
$("tr:nth-child(odd)").css("background","#ff0000"); //finds the odd-numbered tr elements

/* jQuery unwrap */
$("li a").each(function() { //go through all anchor tags inside LI
	$(this).contents().unwrap(); //removes the anchor tags
});

/* Go through text and replace it with other text or style it */
$(".infoParagraph:contains('coffee')").each(function() {
	var coffee_str = $(this).text();
	var coffee_results = coffee_str.split("coffee").join("<span style='color:red'>ice cream and coffee</span>");
	$(this).html(coffee_results);
});

/* Append stuff to iframe content */
//finds the HEAD element in the content of the IFRAME with ID "SpecialIframe", and appends a style tag
$('#SpecialIframe').contents().find('head').append("<style>a {background:#00ff00 !important}</style>");

/*Switching images*/
var myImage = document.getElementById("mainImage");
var imageArray = ["s_blue.png","s_red.png","s_green.png","s_yellow.png","s_cyan.png","s_magenta.png"];
var imageIndex = 0;
function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}
var intervalHandle = setInterval(changeImage,2000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}

/* substr */
var productPreference = "windex";
var productPreference_new = productPreference.substr(1); //yields "index" instead of "windex"

/* substring */
var myletters = "abcdefghijk";
var lessletters = myletters.substring(2,5); //It starts at position 2 (0-indexed, so "a" is 0), then stops at position 5. Character at position 5 is not included, that's just where it stops.
alert(lessletters);

/* slice */
var soup = "Potatoes, Broccoli, and Chicken Soup";
var shortenedsoup = soup.slice(24,5)
alert(shortenedsoup); //should yield "Chicken"

/* search */
var townpage_url = "http://exampleurl.org/contentpage?PageListId={348992882349823948}&Sunnyvale";
var endbracket = townpage_url.search("}"); //Searches the string "townpage_url" and identifies the position in which the "}" is located; returns a number
alert(endbracket);

/* indexOf */
var bowlstring = "hearts stars diamonds rainbows pots of gold balloons moons";
console.log(bowlstring.indexOf("bow")); //"bow" is found at position 26 in the string, therefore this yields 26
console.log(bowlstring.indexOf("s",24)); //finds the first "s", starting from position 24

/* length */
var poster = "Keep calm and carry on";
alert(poster.length); //yields 22

/* Search through string to remove parts of it */
var macbeth = "If it were donebanana when tis done then twere wellbanana if itbanana were done quickly. That webananabanana but teachbanana bloody instuctions whichbanana being taught return to plaguebananabanana the inventor."
var macbeth_corrected = macbeth.split("banana").join(""); //searches through string for instances of "banana". Converts it to an array separated at the places where "banana" was. Then join merges the separate elements of the array into one string, with whatever text you want inserted. This gets rid of banana and replaces it with nothing.

console.log("This is the corrupted string: " + macbeth);
console.log("This is the string with 'banana' removed: " + macbeth_corrected);

/* Force Variable to Number */
var wburgpop = "2482";
var peopleinwillamsburg = Number(wburgpop);
alert(peopleinwillamsburg);

/*Send browser to different page*/
window.location = "http://putaurlyouwanttogotohere.org";

/*URL Stuff*/
//example provided for address bar is "http://thisdomainismeaningless.com#midatlantic". Results are in single-line comments
alert(window.location); //http://thisdomainismeaningless.com#midatlantic
alert(window.location.hash); //#midatlantic
alert(location.hash); //#midatlantic
alert(window.location.href); //http://thisdomainismeaningless.com#midatlantic
alert(location.href); //http://thisdomainismeaningless.com#midatlantic
alert(document.URL); //http://thisdomainismeaningless.com#midatlantic

/* jQuery JSON */
jQuery.getJSON("http://exampleurl.com/api/countyGDP", callbackFuncWithData); //URL is where the JSON object is located
var yorkcounty; //declare the variable "yorkcounty" before you do anything with it
function callbackFuncWithData(data) {
yorkcounty = data[0].population; //assigns variable 'yorkcounty"; goes to the JSON object "data", and finds the first (it is 0-index) "population" item
console.log(yorkcounty);
}

/* Comparison Operators and Logical Operators */
/*
== EQUAL
=== EQUAL with type comparison
!= NOT EQUAL
!== NOT EQUAL with type comparison
< Less than
<= Less than or equal to
> Greater than
>= Greater than or equal to

! LOGICAL NOT
&& LOGICAL AND
|| LOGICAL OR
*/

/* Arithmetic */
/*
% modulus, gives remainder
+ addition
- subtraction
/ division
* multiplication
*/

/* Increment/Decrement */
/*
++ add to variable
+= add to variable
-- subtract from variable
-= subtract from variable
*/

/*Regular Expressions*/
var myRE = /hello/;
var hwString = "Is this a hello world string?";
if(myRE.test(hwString)){ //determines if the hwString fits the regular expression myRE
	alert("yes");
}

myRE = /^hello/; //hello would have to appear at the start
myRE = /hello$/; //hello has to appear at the end
myRE = /hel+o/; //the character directly before + must appear once or more. "helo", "hello", or "hellllllllllllo" are legal
myRE = /hel*o/; //zero or more. "heo", "helo", "hello", "helllllllllllo"
myRE = /hel?o/; //zero or one "heo" and "helo' are legal. "hello" and "helllllllllo" are not
myRE = /hello|goodbye/; //either|or "hello" or "goodbye"
myRE = /he..o/; //period is any character
myRE = /\wello;/ //"\w" requires alphanumeric or underscore
myRE = /\bhello/; //"\b" requires word boundary (space or newline)
myRE = /[crnld]ope/; //any one of the characters in between []. "cope", "rope", "nope", "lope", "dope". It will not allow "zope" because z is not in there
myRE = /[^abc]/; //any character not between the brackets
myRE = /[0-9]/; //digit 0-9
myRE = /[A-Z]/; //alphabet capital A-Z
myRE = /[a-z]/; //alphabet lowercase a-z
myRE = /[A-z]/; //capital A to lowercase z