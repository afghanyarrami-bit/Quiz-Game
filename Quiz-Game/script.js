const questions=[
    {
        question:"What is the capital of france?",
        answers:[
            {text:"Barlin",correct:false},
            {text:"Madrid",correct:false},
            {text:"Paris",correct:true},
            {text:"Rome",correct:false}
        ]
    }
    ,
    {
        question:"What is 2+2?",
        answers:[
            {text:"3.9",correct:false},
            {text:"2+2",correct:false},
            {text:"4",correct:true},
            {text:"5-1",correct:false}
        ]

    }
    ,
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Earth",correct:false},
            {text:"Mars",correct:true},
            {text:"Jupiter",correct:false},
            {text:"venus",correct:false}
        ]
    }
    ,
    {
        question:"What is the largest ocean on Earth?",
        answers:[
            {text:"Atlantic Ocean",correct:false},
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false},
            {text:"Pacific Ocean",correct:true}
        ]
    }
];

const questionElemnt=document.getElementById("question");

const answersButtons=document.getElementById("answer");

const nextButton=document.getElementById("btn-next");


let currentQuestionIndex=0;

let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showfunction();
}
function showfunction(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];

    let questionNo=currentQuestionIndex+1;

    questionElemnt.innerHTML=questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answersButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer);


    })

}

function resetState(){
    nextButton.style.display="none";
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
         score++;
}
else{
    selectedBtn.classList.add("incorrect");
}

    Array.from(answersButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
           
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){  
        handleNextButton();   
    }else{
        startQuiz();
    }
});  

function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex<questions.length){
        showfunction();
     }
     else{
        showScore();
     }
}

function showScore(){
    resetState();
    questionElemnt.innerHTML= `your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"; 
}


startQuiz();