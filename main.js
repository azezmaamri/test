const questions = [
  {
    question: "When did man land on the moon?",
    answers: ["1969", "1915", "13.8 b y", "1945"],
    correctAnswer: "1969",
    feedback: {
      correct: "إجابة صحيحة!",
      incorrect: "إجابة خاطئة. حاول مرة أخرى.",
    },
  },
  {
    question: "ما هو الحد الأدنى للعمر المطلوب للحصول على رخصة القيادة في إسرائيل؟",
    answers: ["16 سنة", "17 سنة", "18 سنة", "21 سنة"],
    correctAnswer: "17 سنة",
    feedback: {
    correct: "إجابة صحيحة!",
    incorrect: "إجابة خاطئة. الإجابة الصحيحة هي 17 سنة."
    },
    },
    
    {
    question: "ما هو الحد الأقصى للسرعة في المناطق السكنية في إسرائيل؟",
    answers: ["50 كم/س", "60 كم/س", "70 كم/س", "80 كم/س"],
    correctAnswer: "50 كم/س",
    feedback: {
    correct: "إجابة صحيحة!",
    incorrect: "إجابة خاطئة. الإجابة الصحيحة هي 50 كم/س."
    },
    },
    
    {
    question: "ما هي الأشياء الأساسية التي يجب فحصها في السيارة قبل القيادة في إسرائيل؟",
    answers: ["مستوى الزيت", "ضغط الإطارات", "وضع الفرامل", "كل ما سبق"],
    correctAnswer: "كل ما سبق",
    feedback: {
    correct: "إجابة صحيحة!",
    incorrect: "إجابة خاطئة. الإجابة الصحيحة هي كل ما سبق."
    },
    },
    
    {
    question: "ما هو الامتحان الذي يجب اجتيازه للحصول على رخصة القيادة في إسرائيل؟",
    answers: ["اختبار القيادة النظري", "اختبار القيادة العملي", "اختبار القيادة التحليلي", "اختبار القيادة الشخصي"],
    correctAnswer: "اختبار القيادة العملي",
    feedback: {
    correct: "إجابة صحيحة!",
    incorrect: "إجابة خاطئة. الإجابة الصحيحة هي اختبار القيادة العملي."
    },
    },
    {
      question: "ما هي المدة الزمنية اللازمة لإكمال دورة تعليم السياقة في إسرائيل؟",
      answers: ["40 ساعة", "30 ساعة", "60 ساعة", "70 ساعة"],
      correctAnswer: "30 ساعة",
      feedback: {
      correct: "إجابة صحيحة!",
      incorrect: "إجابة خاطئة. الإجابة الصحيحة هي 30 ساعة."
      },
      },
      
      {
      question: "ما هي الفترة الزمنية اللازمة لانتظار الحصول على رخصة القيادة في إسرائيل بعد اجتياز الامتحان؟",
      answers: ["3 أيام", "7 أيام", "14 يومًا", "21 يومًا"],
      correctAnswer: "14 يومًا",
      feedback: {
      correct: "إجابة صحيحة!",
      incorrect: "إجابة خاطئة. الإجابة الصحيحة هي 14 يومًا."
      },
      },
      
      {
      question: "ما هي الحدود الزمنية لاستخدام الهاتف النقال أثناء القيادة في إسرائيل؟",
      answers: ["لا يسمح بالاستخدام على الإطلاق", "5 دقائق فقط", "10 دقائق فقط", "15 دقيقة فقط"],
      correctAnswer: "لا يسمح بالاستخدام على الإطلاق",
      feedback: {
      correct: "إجابة صحيحة!",
      incorrect: "إجابة خاطئة. الإجابة الصحيحة هي لا يسمح بالاستخدام على الإطلاق."
      },
      },
      
      {
      question: "ما هو الحد الأدنى لعدد الدروس العملية اللازمة للحصول على رخصة القيادة في إسرائيل؟",
      answers: ["10 دروس", "20 درسًا", "30 درسًا", "40 درسًا"],
      correctAnswer: "20 درسًا",
      feedback: {
      correct: "إجابة صحيحة!",
      incorrect: "إجابة خاطئة. الإجابة الصحيحة هي 20 درسًا."
      },
      },
      {
        question: "ما هو المستوى الذي يجب أن يتم تحقيقه في امتحان القيادة للحصول على رخصة القيادة في إسرائيل؟",
        answers: ["60 درجة", "70 درجة", "80 درجة", "90 درجة"],
        correctAnswer: "75 درجة",
        feedback: {
        correct: "إجابة صحيحة!",
        incorrect: "إجابة خاطئة. الإجابة الصحيحة هي 75 درجة."
        },
        },
        
        {
        question: "ما هي المركبات التي يجب على متعلمي القيادة الجدد تجنب قيادتها في الأسابيع الأولى من حصولهم على رخصة القيادة في إسرائيل؟",
        answers: ["الشاحنات", "الحافلات", "الدراجات النارية", "المركبات الرياضية"],
        correctAnswer: "المركبات الرياضية",
        feedback: {
        correct: "إجابة صحيحة!",
        incorrect: "إجابة خاطئة. الإجابة الصحيحة هي المركبات الرياضية."
        },
        },
        {
          question: "ما هي العقوبات المفروضة على السائقين في إسرائيل إذا لم يتم توصيل حزام الأمان؟",
          answers: ["غرامة مالية فقط", "نقاط عقوبة على الرخصة وغرامة مالية", "إيقاف الرخصة لمدة 6 أشهر وغرامة مالية", "إيقاف الرخصة لمدة سنة وغرامة مالية"],
          correctAnswer: "نقاط عقوبة على الرخصة وغرامة مالية",
          feedback: {
          correct: "إجابة صحيحة!",
          incorrect: "إجابة خاطئة. الإجابة الصحيحة هي نقاط عقوبة على الرخصة وغرامة مالية."
          },
          }
];

const scoreDisplay = document.getElementById("score");
const questionDisplay = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const feedbackDisplay = document.getElementById("feedback");
const nextQuestionButton = document.getElementById("next-question");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
  questionDisplay.innerText = question.question;
  answer1.innerText = question.answers[0];
  answer2.innerText = question.answers[1];
  answer3.innerText = question.answers[2];
  answer4.innerText = question.answers[3];
}

function checkAnswer(selectedAnswer) {
  const question = questions[currentQuestionIndex];
  const feedback = question.feedback;

  if (selectedAnswer === question.correctAnswer) {
    score++;
    scoreDisplay.innerText = score;
    feedbackDisplay.innerText = feedback.correct;
  } else {
    feedbackDisplay.innerText = feedback.incorrect;
  }
  answer1.disabled = true;
  answer2.disabled = true;
  answer3.disabled = true;
  answer4.disabled = true;
  nextQuestionButton.disabled = false;
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    showQuestion(question);
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    nextQuestionButton.disabled = true;
    feedbackDisplay.innerText = "";
  } else {
    questionDisplay.innerText = "انتهت الأسئلة!";
    questionDisplay.innerHTML = `
        <h1>انتهت اللعبة</h1>
          <p>لقد حصلت على ${score} نقطة.</p>
        <div class="login-box">
              <form action="" method="POST">
                <div class="user-box">
                <label>your name</label>
                  <input type="text" name="Name">
                </div>
                <div class="user-box">
                <input type="text" name="Comment" required class="textareaa1" value="لقد حصلت على ${score} نقطة.">
                </div>
                <input type="submit" name="Submit" value="save" class="btnn1" id="btnn1">
              </input>
                <!-- <button type="submit" name="Submit" class="btnn1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button> -->
              </form>
            </div>
      `;
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    feedbackDisplay.style.display = "none";
    nextQuestionButton.style.display = "none";
  }
}

showQuestion(questions[currentQuestionIndex]);
answer1.addEventListener("click", () => checkAnswer(answer1.innerText));
answer2.addEventListener("click", () => checkAnswer(answer2.innerText));
answer3.addEventListener("click", () => checkAnswer(answer3.innerText));
answer4.addEventListener("click", () => checkAnswer(answer4.innerText));
nextQuestionButton.addEventListener("click", showNextQuestion);

var voiser1 = document.getElementById("The_voise1");
var voiser2 = document.getElementById("The_voise2");
var voiser3 = document.getElementById("The_voise3");

function gamewolf() {
    if(voiser1.style.display="none"){
    document.getElementById("answers").style.display="block";
    document.getElementById("question").style.display="block";
    }
}

var sounds = ["voise1.mp3", "voise2.mp3", "voise3.mp3", "voise4.mp3", "voise5.mp3", "voise6.mp3", "voise7.mp3", "voise8.mp3", "voise9.mp3", "voise10.mp3", "voise11.mp3", "voise12.mp3", "voise13.mp3", "voise14.mp3", "voise15.mp3", "voise16.mp3", "voise17.mp3", "voise18.mp3", "voise19.mp3", "voise20.mp3"];

// متغير لتتبع الصوت الحالي
var currentSound = 0;

// استدعاء الزر وإضافة حدث النقر
var startButton = document.getElementById("next-question");
startButton.addEventListener("click", playNextSound);

// تشغيل الصوت التالي في المصفوفة
function playNextSound() {
var audio = new Audio(sounds[currentSound]);
audio.play();
currentSound++;
if (currentSound >= sounds.length) {
    currentSound = 0;
}
}

