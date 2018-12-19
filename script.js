const appendTime = document.getElementById('appendTimeRemaining');
const appendQuestion = document.getElementById('appendQuestion');
const appendAnswers = document.getElementById('appendAnswers');
const appendCorrectAnswers = document.getElementById('appendCorrectAnswer');
const startButton = document.getElementById('startButton');


const questions = [
  {
    q: 'what is the first day of the week?',
    a: ['monday', 'frank', 'ham and eggs'],
    ca: 'monday'
},
{
  q: 'what is the last day of the June?',
  a: ['30th', 'July', 'beans'],
  ca: '30th'
},
{
  q: 'who framed roger rabbit?',
  a: ['the dude', 'jimmy', '27'],
  ca: 'monday'
}
];

let questionCount = 0;

const radios = document.getElementsByName(`question${questionCount}`);

const timer = () => {
  let timeRemaining = 4;
  let displayTime = setInterval(function() {
    appendTime.innerHTML = timeRemaining;
    timeRemaining --;
    if (timeRemaining === 0) {
      console.log('all out of time');
      clearInterval(displayTime);
    }
  }, 1000);
};

const displayQuestionsAndAnswers = () => {
  if (questionCount !== questions.length) {
    appendQuestion.innerHTML = `<h2>${questions[questionCount].q}</h2>`;
    
    questions[questionCount].a.map(elem => {
      return appendAnswers.innerHTML += `<input type='radio' name='question${questionCount}' value=${elem}>${elem}<br>`;
    })
    questionCount++;
  }
}






startButton.addEventListener('click', (event) => {
  timer();
  displayQuestionsAndAnswers();
})