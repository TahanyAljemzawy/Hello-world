$(document).ready(function(){

var answers = ["color:#4B0082","<h1>HelloWorld.com</h1>","<h2>HelloWorld.com</h2>",
"<h3>HelloWorld.com</h3>","<h4>HelloWorld.com</h4>","<h5>HelloWorld.com</h5>","<h6>HelloWorld.com</h6>",
"<p>","</p>","<br>","background-color:#ADFF2F","<h1>My First app</h1>","<h2>My First app</h2>",
"<h3>My First app</h3>","<h4>My First app</h4>","<h5>My First app</h5>","<h6>My First app</h6>",
"color:#4B0082"]
		

		function checkTheAnswer(val) {
		//check if the values at the boxes are empty or not
		if(val === "" )
			return alert("Please fill the answer")//giv the user alert
		
		for(var i=0 ; i < answers.length ; i++)
			if(val === answers[i])
			return true;
			
		return false;//in case the answer was wrong!	
	}

  //q1
	$("#button1").click(function(){
	//take the value of the input box and store it in sol1	
	var sol =$("#a1").val();
	console.log(sol)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol) === true){
		$("#q1").css("background-color","#90EE90");
		$("#smallProj").append("<h1>helloWorld.com</h1>");
		}
	else
		$("#q1").css("background-color","#F08080");	

	});	

	  //q2
	$("#button2").click(function(){
	//take the value of the input box and store it in sol1 to sol6	
	var sol1 =$("#t1").val();
	var sol2 =$("#t2").val();
	var sol3 =$("#t3").val();
	var sol4 =$("#t4").val();
	var sol5 =$("#t5").val();
	var sol6 =$("#t6").val();
	console.log(sol6,sol3,sol1,sol4,sol2)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol1) === true && checkTheAnswer(sol2) === true 
		&& checkTheAnswer(sol3) === true && checkTheAnswer(sol4) === true
			&& checkTheAnswer(sol5) === true && checkTheAnswer(sol6) === true)
	{
		$("#q2").css("background-color","#90EE90");
		$("#smallProj").append(sol1);
		$("#smallProj").append(sol2);
		$("#smallProj").append(sol3);
		$("#smallProj").append(sol4);
		$("#smallProj").append(sol5);
		$("#smallProj").append(sol6);
		}
	else
		$("#q2").css("background-color","#F08080");	

	});
//q3
	$("#button3").click(function(){
	//take the value of the input box and store it in sol1	
	var sol1 =$("#f1").val();
	var sol2 =$("#f2").val();
	console.log(sol1,sol2)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol1) === true && checkTheAnswer(sol2) === true){
		$("#q3").css("background-color","#90EE90");
		$("#smallProj ").append("<p>Through this site you can learn the basic principles of HTML in\naddition to being able to solve a set of exercises to build\na mini page resulting from your correct answers.</p>");
		}
	else
		$("#q3").css("background-color","#F08080");	

	});
//q4
$("#button4").click(function(){
	//take the value of the input box and store it in sol1	
	var sol =$("#s1").val();
	console.log(sol)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol) === true){
		$("#q4").css("background-color","#90EE90");
		$("#smallProj").append("<p>	My goal to build <br>to build a good learning web site for children</p>");
		}
	else
		$("#q4").css("background-color","#F08080");	
	});	
//q5
$("#button5").click(function(){
	//take the value of the input box and store it in sol1	
	var sol =$("#k1").val();
	console.log(sol)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol) === true){
		$("#q5").css("background-color","#90EE90");
		$("#smallProj").css("background-color","#ADFF2F");
		}
	else
		$("#q5").css("background-color","#F08080");	
	});
//q6
$("#button6").click(function(){
	//take the value of the input box and store it in sol1	
	var sol =$("#r1").val();
	console.log(sol)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol) === true){
		$("#q6").css("background-color","#90EE90");
		$(".userTitle").css("color","#4B0082");
		}
	else
		$("#q6").css("background-color","#F08080");	
	});
//q7
$("#button7").click(function(){
	//take the value of the input box and store it in sol1	
	var sol =$("#x1").val();
	console.log(sol)
	//call the function to test the result and if true do the styles
	if(checkTheAnswer(sol) === true){
		$("#q7").css("background-color","#90EE90");
		$("#smallProj").prepend(sol);
		$("#smallProj").addClass("userTitle")
		}
	else
		$("#q7").css("background-color","#F08080");	
	});

});