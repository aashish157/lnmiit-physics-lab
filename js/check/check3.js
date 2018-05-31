function clearRadioGroup(GroupName)
{
  var ele = document.getElementsByName(GroupName);
	for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}

function check(){
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	var q7=document.quiz.question7.value;
	var q8=document.quiz.question8.value;

	var count=0;

	if(q1=="c"){
		count++;
	}
	if(q2=="a"){
		count++;
	}
	if(q3=="b"){
		count++;
	}
	if(q4=="c"){
		count++;
	}
	if(q5=="c"){
		count++;
	}
	if(q6=="c"){
		count++;
	}
	if(q7=="b"){
		count++;
	}
	if(q8=="c"){
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