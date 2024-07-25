let score=0,selectedQuestion;
let visitedquestions=0;
let availablequestioons=[ ];

const question=document.getElementById('question');

    const choices=Array.from(document.getElementsByClassName('choice-text'));
let answer=false;
const totalquestions=10;
function fe(category){
fetch("https://opentdb.com/api.php?amount=10&category="+category+"&difficulty=easy&type=multiple")
.then(res=>{
    return res.json();
})
.then(questions=>{
    /*availablequestioons=question;
    f();*/
    availablequestioons= questions.results.map(eachquestion=>{
       const formatquestion={
           question:eachquestion.question
       };
       const options=[... eachquestion.incorrect_answers];
       formatquestion.answer=Math.floor(Math.random()*3)+1;
      // console.log(formatquestion.answer)
       options.splice(formatquestion.answer-1,0,eachquestion.correct_answer);
       options.forEach((choice,index)=>{
            formatquestion["choice"+(index+1)]=choice;
       } );
       return formatquestion;
   }
   );
   f();
   document.getElementById('loader').classList.add('hidden');
  
   document.getElementById('game').classList.remove('hidden');
})
    .catch(err=>{
        console.error(err);
    } );
};

const f=()=>{
    if(availablequestioons.length==0&&visitedquestions>=totalquestions) {
        localStorage.setItem('maxscore',score);
    return document.location.assign("end.html");}
    
    //console.log(choices);
    visitedquestions++;
    document.getElementsByClassName('progress')[0].style.width=(visitedquestions/totalquestions)*100+'%';
    document.getElementById('no').lastChild.data=visitedquestions+'/'+totalquestions;
    
    let rand=Math.floor(Math.random()*availablequestioons.length);
    selectedQuestion=availablequestioons[rand];
    //console.log(selectedQuestion.answer);
    question.innerHTML=availablequestioons[rand].question;
      choices.forEach(choice => {
          const x='choice'+choice.dataset['number'];
         
            choice.innerHTML=selectedQuestion[x];
      });  
      availablequestioons.splice(rand,1);
      answer=true;
      console.log(selectedQuestion.answer);
};
choices.forEach(choice=>{
   
    choice.addEventListener('click',e=>{
        if(!answer) return;
        answer=false;
        const clicked=e.target;
        const option=clicked.dataset['number'];
       const addclass=(option==selectedQuestion.answer)?"correct":"wrong";
       if(option==selectedQuestion.answer) score++;
       clicked.parentNode.classList.add(addclass);
       setTimeout(() => {
            clicked.parentNode.classList.remove(addclass);
            f();
       },500);
    }
    );
}
    );
