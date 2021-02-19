const quizData = [
    {
      question: 'What is the full form of HTML?',
      a: 'Hypertext Markup Language',
      b: 'Hyperlinks and Text Markup Language',
      c: 'Home Tool Markup Language',
      d: 'Hypertool and Text Markup Language',
      correct: 'a'
    },
    {
      question: 'Who is making the Web standards?',
      a: 'Microsoft',
      b: 'Mozilla',
      c: 'Google',
      d: 'The World Wide Web Consortium',
      correct: 'd'
    },
    {
      question: 'Choose the correct HTML element for the largest heading:',
      a: '&lt;head&gt;',
      b: '&lt;heading&gt;',
      c: '&lt;h6&gt;',
      d: '&lt;h1&gt;',
      correct: 'd' 
    },
    {
      question: 'What is the correct HTML element for inserting line break?',
      a: '&lt;lb&gt;',
      b: '&lt;break&gt;',
      c: '&lt;br&gt;',
      d: '&lt;new&gt;',
      correct: 'c'
    },
    {
      question: 'What is the fullform of CSS?',
      a: 'Cascading Style Sheet',
      b: 'Correct Style and Shape',
      c: 'Cover Style Shape',
      d: 'Command Style Sheet',
      correct: 'a'
    }
];
const question = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const next = document.getElementById('check');
const answers = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
let currentQuestion = 0;
let score = 0;

function nextQuestion() {
  deSelect();
  question.innerHTML=quizData[currentQuestion].question;
  aText.innerHTML = quizData[currentQuestion].a;
  bText.innerHTML = quizData[currentQuestion].b;
  cText.innerHTML = quizData[currentQuestion].c;
  dText.innerHTML = quizData[currentQuestion].d;
}

function getSelected() {
  let answerE = undefined;
  answers.forEach(answer => {
    if(answer.checked) {
      answerE = answer.id;
    }
  })
  return answerE;
}

function deSelect() {
  answers.forEach(answer => {
    answer.checked = false;
    
  })
}

nextQuestion();
next.addEventListener('click', () => {
  const answer = getSelected();
  if(answer) {
    if(answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if(currentQuestion < 5)
   {
    nextQuestion();
   }
  else{
    quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2> <button class="checked" onClick="location.reload()">Reload</button>`
  }
 }
});





