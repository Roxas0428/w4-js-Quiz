const quiz = [
  {
    question: "1問目　FF16の主人公は誰？",
    answers: ["クライヴ", "クラウド", "クラトス", "グラディオラス"],
    correct: "クライヴ",
  },
  {
    question: "2問目　FF7REMAKEは何部作？",
    answers: ["1部作", "2部作", "3部作", "4部作"],
    correct: "3部作",
  },
  {
    question: "3問目　FF15主人公ノクティスの名前を訳すと何になる？",
    answers: ["空", "夜空", "星", "星空"],
    correct: "夜空",
  },
  {
    question: "4問目　FF4主人公セシルの最初のジョブは？",
    answers: ["ニート", "パラディン", "格闘家", "暗黒騎士"],
    correct: "暗黒騎士",
  },
  {
    question: "5問目　FF15主人公ライトニングの妹の名前は？",
    answers: ["セラ", "セロ", "セロリ", "セラフ"],
    correct: "セラ",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;
  if (quizIndex < quizLength) {
    // 問題数があればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};
// ボタンをクリックしたら正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
