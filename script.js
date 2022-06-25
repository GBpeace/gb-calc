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
            eq.reverse();
            answers.reverse();
            for(let i=0;i<eq.length;i++)
            {
                history+="<div class='his'><p>"+eq[i]+"</p><p>"+answers[i]+"</p></div>";
            }
            history+="</div>";
            document.querySelector("#history").innerHTML=history;
        }

        function historyclear()
        {
        const res=confirm(" Are You Sure want to delete history ? ");
        if(res)
        {
        
            document.querySelector("#history").innerHTML=" ";
            eq=[];
            answers=[];
        }
        }
        function lastnum()
        { 
            if(Inputval.value!="")
            {
                if(Inputval.value.length>1)
                    Inputval.value=Inputval.value.slice(0,-1);
                else
                {
                    Inputval.value=Inputval.value.slice(0,-1);
                    Inputval.value="0";
                }

            }
            else
            {
                Inputval.value="0";
            }
        }
       
        document.querySelector("#history").addEventListener('click',function(e)
        {
            console.log(e.target.id);
            console.log(e.target);
            questionInput.value=eq[e.target.id];
            InputVal.value=answers[e.target.id];
        })