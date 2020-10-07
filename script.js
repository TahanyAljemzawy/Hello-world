$(document).ready(function(){

//this function is called when ever you click on the subject at the menu
//brings the data from the array of obj and show it in its right place
  function bringContent(obj) {
    //creat the section that will contain the informations(p,h)
    $("#whiteSpace").append("<div>"+"."+"</div>");
    $("#whiteSpace div").addClass("info");

    //take the title and append it
    var title = obj.title;
    $(".info").append("<h1>"+title+"</h1>");
    $(".info h1").addClass("subjHeader");

  	//loop at the obj to set the paragrah to the page exapt title and color no need
   	for(var key in obj) {

   		if(key === "title" || key === "clicked")
   			continue;
   		else {
   			//incase we have secound title to give it the title decoration 
   			if(key === "title2" || key === "title3" || key === "title4" || key === "title5")
   			{$(".info").append("<h2>"+obj[key]+"</h2>");//apend the h2 with sub tiltels
          $(".info h2").css("color","red")
        }
      	else
   			$(".info").append("<p> <XMP>"+obj[key]+"</XMP> </p>");	
   		} 	
  }}//the end of function bring content

//this function clear the info of the section to set the new one
  function emptyTheContent() {
   	$(".info").remove();
  }
  //this function will help me to not reapeting the content
  //if the subject is not cliked (false) ==> call the function bringContent and its clicked so
  //clicked ==>true and if the user click again it wont repeat again
  function isClicked(subjObj) {
     if(subjObj.clicked === false) { 
    bringContent(subjObj)//create the contant of this subj}
    subjObj.clicked = true;
    } else {
      emptyTheContent();
      bringContent(subjObj);

    }
  }//the end of isCliked

  //subj0 click function call isClicked and give the function its own obj 
  $("#subj0").click(function() {
      emptyTheContent(); //empty any previos content
      isClicked(arrayOfContants[0])//check if its clicked and the add the content
    });//end of subj0

  $("#subj1").click(function() {
    emptyTheContent();
  	isClicked(arrayOfContants[1])
  });//end os subj1

  $("#subj2").click(function() {
    emptyTheContent();
    isClicked(arrayOfContants[2])
  });
  $("#subj3").click(function() {
    emptyTheContent();
    isClicked(arrayOfContants[3])
  });
  $("#subj4").click(function() {
    emptyTheContent();
    isClicked(arrayOfContants[4])
  });
    //the array of obj each opj is for one page
var arrayOfContants = [{
  title:"Introduction To HTML",
  p1:"HTML is the standard markup language for Web pages With\n HTML you can create your own Website.HTML is easy to learn \n- You will enjoy it! \n HTML describes the structure of a Web page,\n HTML elements tell the browser how to display the content\n'HTML elements label pieces of content such as \n this is a heading this is a paragraph \n this is a link etc.",
  title2:"What is an HTML Element?",
  p2:"An HTML element is defined by a start tag, some content, and an end tag:\n <tagname>Content goes here...</tagname></XMP>\n The HTML element is everything from the start tag to the end tag:  <h1>My First Heading</h1> \n <p>My first paragraph.</p>",
  clicked:false, 
  },
  {
  title:"HTML Basic",
  clicked:false,
  p1:"In this chapter we will show some basic HTML examples. \n",
  title2:"HTML Documents",
  p2:"All HTML documents must start with a document type declaration: <!DOCTYPE html>.\n The HTML document itself begins with <html> and ends with </html>.\n The visible part of the HTML document is between <body> and </body>.",
  example1:"Example : \n <!DOCTYPE html>\n <html> \n <body> \n <h1>My First Heading</h1>\n <p>My first paragraph.</p> \n </body> \n </html>",

  title3:"<XMP>The <!DOCTYPE> Declaration</XMP>",
  p4:"The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.\nIt must only appear once, at the top of the page (before any HTML tags).\nThe <!DOCTYPE> declaration is not case sensitive.\nThe <!DOCTYPE> declaration for HTML5 is: ",
  title4:"HTML Headings",
  p5:"HTML headings are defined with the <h1> to <h6> tags.\n<h1> defines the most important heading. <h6> defines the least important heading: ",
  title5:"How to View HTML Source?",
  p6:"Have you ever seen a Web page and wondered 'Hey! How did they do that?'",
  },
  {
  title:"HTML Elements",
  clicked:false,
  p1:"An HTML element is defined by a start tag, some content, and an end tag:\n<tagname>Content goes here...</tagname>\nThe HTML element is everything from the start tag to the end tag:\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>",
  note:"Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements.\n Empty elements do not have an end tag!",
  title2:"Nested HTML Elements",
  p2:"HTML elements can be nested (this means that elements can contain other elements).\nAll HTML documents consist of nested HTML elements.\nThe following example contains four HTML elements (<html>, <body>, <h1> and <p>):\n",
  example1:"<!DOCTYPE html>/n <html>\n <body>\n <h1>My First Heading</h1>\n <p>My first paragraph.</p>\n </body>\n</html>",
  title3:"Never Skip the End Tag",
  p3:"Some HTML elements will display correctly, even if you forget the end tag,\n However, never rely on this! Unexpected results and errors may occur if you forget the end tag!",
  title4:"HTML is Not Case Sensitive",
  p4:"HTML tags are not case sensitive: <P> means the same as <p>.\nThe HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands\n lowercase for stricter document types like XHTML.",
  note:"At 'Hello world' page always use lowercase letters to solve the questions plz !",
  },
  {
  title:"HTML Headings",
  p1:"HTML headings are titles or subtitles that you want to display on a webpage.",
  p2:"<h1> defines the most important heading. <h6> defines the least important heading.",
  note:"Note: Browsers automatically add some white space (a margin) before and after a heading.\nNote: Use HTML headings for headings only.\n Don't use headings to make text BIG or bold.",
  title2:"Headings Are Important",
  p3:"Search engines use the headings to index the structure and content of your web pages.",
  p4:"Users often skim a page by its headings. It is important to use headings to show the document structure.",
  p5:"<h1> headings should be used for main headings, followed by <h2> headings, then the less important <h3>, and so on.",
  title3:"Bigger Headings",
  p6:"Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute,\n using the CSS font-size property:",
  title4:"Example",
  example:'<h1 style="font-size:60px;">Heading 1</h1>',
  },
  {
  title:"HTML Paragraphs",
  p1:"The HTML <p> element defines a paragraph.",
  p2:"A paragraph always starts on a new line, and browsers automatically add some white space\n(a margin) before and after a paragraph.",
  example:"Example: \n<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>",
  title2:"HTML Display",
  p3:"You cannot be sure how HTML will be displayed.",
  p4:"Large or small screens, and resized windows will create different results.",
  p5:"With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.",
  p6:"The browser will automatically remove any extra spaces and lines when the page is displayed:",
  title3:"Example",
  p7:"<p>This paragraph\ncontains a lot of lines\nin the source code,\nbut the browser\nignores it.\n</p>",
  p8:"output ==> This paragraph contains a lot of lines in the source code, but the browser ignores it."
  //title4:"Solution - The HTML <pre> Element",
 // p9:"The HTML <pre> element defines preformatted text.\nThe text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:",
  //p10:"<pre>\n  My Bonnie lies over the ocean.\n My Bonnie lies over the sea.\n My Bonnie lies over the ocean.\n Oh, bring back my Bonnie to me.\n </pre>",
 // p11:"output ==> My Bonnie lies over the ocean.\n My Bonnie lies over the sea.\n My Bonnie lies over the ocean.\n Oh, bring back my Bonnie to me.",
  }
  ]




});//The ready end