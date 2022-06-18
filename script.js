var equation;
var answers=[],eq=[];
var Inputval = document.querySelector('#screen')
var questionInput=document.querySelector("#equation");
function getvalue(val)
        {
        //    alert(val);
            
                 if(Inputval.value==0)
                 {
                    Inputval.value=val;
                    
                 }
                 else
                 {
                    Inputval.value+=val;
                 }
                
                // document.querySelector('#screen').innerHTML= Inputval;
               
                 
        }
        function equate()
        {
            equation= Inputval.value+ " = ";
            Inputval.value= eval(Inputval.value);
            questionInput.value=equation;
            answers.push(eval(Inputval.value));
            eq.push(equation);
            console.log(answers);
            console.log(eq);
            
        }
        function setclear()
        {
        
            document.querySelector('#screen').value= "0";
            questionInput.value="";
        }
        function showhistory()
        {
            var history="<div>";
            for(let i=0;i<eq.length;i++)
            {
                history+="<div class='his'><p>"+eq[i]+"</p><p>"+answers[i]+"</p></div>";
            }
            history+="</div>";
            document.querySelector("#history").innerHTML=history;
        }
        function historyclean()
        {
            document.querySelector('#history').innerHTML=" ";
        }
       