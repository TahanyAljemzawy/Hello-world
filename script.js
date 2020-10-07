$(document).ready(function(){

//this function is called when ever you click on the subject at the menu
//brings the data from the array of obj and show it in its right place
  function bringContent(obj) {
    //take the id of the page
    var subjectId = obj.subjId;
  
  //creat the section that will contain the informations(p,h)
    $("#whiteSpace").append("<div>"+"."+"</div>");
    $("#whiteSpace div").addClass("info , subjectId");

    //take the title and append it
    var title = obj.title;
    $(".info").append("<h1>"+title+"</h1>");
    $(".info h1").addClass("subjHeader");

  	//loop at the obj to set the paragrah to the page exapt title and color no need
   	for(var key in obj) {

   		if(key === "title" || key === "subjId")
   			continue;
   		else {
   			//incase we have secound title to give it the title decoration 
   			if(key === "title2" || key === "title3" || key === "title4")
   			$(".info").append("<h2>"+obj[key]+"</h2>");
   			else
   			$(".info").append("<p> <XMP>"+obj[key]+"</XMP> </p>");	
   		}
  	
 /* 	if(obj.backgroundColor !== ""){
  		var backgroundColor = obj.background
  		$(".info").css("background-color",backgroundColor);
  	}*/
  	
  }}//the end of function bring content

//this function clear the info of the section to set the new one
  function emptyTheContent() {
   	$(".info").remove();
  }

//subj0 click function call the bring content function and giv it his obj
  $("#subj0").click(function() {
    //if()
    bringContent(arrayOfContants[0])//create the contant of this subj
    var backgroundColor = arrayOfContants[0].background;
    $(".info").css("background-color",backgroundColor);
  });

  $("#subj1").click(function() {
  	emptyTheContent();
  });
//the array of obj each opj is for one page
var arrayOfContants = [{
	title:"Introduction To HTML",
  subjId : "subj0",
	p1:"HTML is the standard markup language for Web pages With\n HTML you can create your own Website.HTML is easy to learn \n- You will enjoy it! \n HTML describes the structure of a Web page,\n HTML elements tell the browser how to display the content\n'HTML elements label pieces of content such as \n this is a heading this is a paragraph \n this is a link etc.",
  title2:"What is an HTML Element?",
  p2:"An HTML element is defined by a start tag, some content, and an end tag:\n <tagname>Content goes here...</tagname></XMP>\n The HTML element is everything from the start tag to the end tag:  <h1>My First Heading</h1> \n <p>My first paragraph.</p>",
  background:"#98FB98" ,
 },]

});//The ready end