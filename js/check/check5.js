 var answers=["a","a","a","b","b","d","a","c"];
 var q=["z","z","z","z","z","z","z","z"];
function clearRadioGroup(GroupName)
{
  var ele = document.getElementsByName(GroupName);
	for(var i=0;i<ele.length;i++){
		if(ele[i].checked==true){
    		ele[i].checked = false;
    		}
	}

}

function check(){
		
	q[0]=document.quiz.question1.value;
 	q[1]=document.quiz.question2.value;
	 q[2]=document.quiz.question3.value;
	 q[3]=document.quiz.question4.value;
	 q[4]=document.quiz.question5.value;
	 q[5]=document.quiz.question6.value;
	 q[6]=document.quiz.question7.value;
	q[7]=document.quiz.question8.value;

	var count=0;

	if(q[0]==answers[0]){
		count++;
	}
	if(q[1]==answers[1]){
		count++;
	}
	if(q[2]==answers[2]){
		count++;
	}
	if(q[3]==answers[3]){
		count++;
	}
	if(q[4]==answers[4]){
		count++;
	}
	if(q[5]==answers[5]){
		count++;
	}
	if(q[6]==answers[6]){
		count++;
	}
	if(q[7]==answers[7]){
		count++;
	}
	

	
	swal("Correct Answers   " +count);

    
   clearRadioGroup("question1");
   clearRadioGroup("question2");
   clearRadioGroup("question3");
   clearRadioGroup("question4");
   clearRadioGroup("question5");
   clearRadioGroup("question6");
   clearRadioGroup("question7");
   clearRadioGroup("question8");
   


}


function hideshow(name,option){
	  var x = document.getElementById(name);
	  var y=option;
    if (x.style.visibility == "hidden") {
        x.style.visibility = "visible";
        if(q[y]==answers[y]){
         	x.style.background="#1cff58";
         	x.innerHTML="Your answer is Correct";
        }
        else{
        	x.style.background="#e81e24";
         	x.innerHTML="Correct Answer is "+" " + answers[y].toUpperCase();
        }
        
    } 
    else {
        x.style.visibility = "hidden";
    }
}
function compare(){
	q[0]=document.quiz.question1.value;
 	q[1]=document.quiz.question2.value;
	 q[2]=document.quiz.question3.value;
	 q[3]=document.quiz.question4.value;
	 q[4]=document.quiz.question5.value;
	 q[5]=document.quiz.question6.value;
	 q[6]=document.quiz.question7.value;
	q[7]=document.quiz.question8.value;
	 hideshow("answer1",0);
	 hideshow("answer2",1);
	 hideshow("answer3",2);
	 hideshow("answer4",3);
	 hideshow("answer5",4);
	 hideshow("answer6",5);
	 hideshow("answer7",6);
	 hideshow("answer8",7);

}