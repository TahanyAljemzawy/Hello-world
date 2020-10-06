$(document).ready(function(){

//this function is called when ever you click on the subject at the menu
//brings the data from the obj and show it in its right place
  function bringContent(obj) {
  	var title = obj.title;
  	//$("#whiteSpace").append("<div>"+title+"</div>");
  	
  	$("#whiteSpace").append("<h1>"+title+"</h1>");

  	//loop at the obj to set the paragrah to the page exapt title and color no need
   	for(var key in obj) {

   		if(key === "title" || key === "background")
   			continue;

   		else {
   			//incase we have secound title to give it the title decoration 
   			if(key === "title2" || key === "title3" || key === "title4")
   			$("#whiteSpace").append("<h2>"+obj[key]+"</h2>");
   			else
   			$("#whiteSpace").append("<p> <XMP>"+obj[key]+"</XMP> </p>");	
   		}
  	
  	if(obj.backgroundColor !== ""){
  		var backgroundColor = obj.background
  		console.log(backgroundColor);
  		$("#info").css("background-color",backgroundColor);
  	}
  	
  }}//the end of function bring content

  function emptyTheContent() {
  	$("#info").remove();


  }

//subj0 click function call the bring content function and giv it his obj
  $("#subj0").click(function() {

    bringContent(arrayOfContants[0])
    
  });
  $("#subj1").click(function() {
  	emptyTheContent();
  });
//the array of obj each opj is for one page
var arrayOfContants = [{
	title:"Introduction To HTML",
	p1:"HTML is the standard markup language for Web pages With HTML you can create your own Website.HTML is easy to learn \n- You will enjoy it!",
    p2:"HTML describes the structure of a Web page, HTML elements tell the browser how to display the content",
    p3:'HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.',
    title2:"What is an HTML Element?",
    p5:"An HTML element is defined by a start tag, some content, and an end tag:\n <XMP><tagname>Content goes here...</tagname></XMP>\n The HTML element is everything from the start tag to the end tag: ",
    p6:"<h1>My First Heading</h1> \n <p>My first paragraph.</p>",
    background:"#98FB98" ,
    },]

});//The ready end