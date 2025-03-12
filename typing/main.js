//変数の初期化
let untyped = '';
let typed = '';

//必要なHTML要素から作られたオブジェクトの取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');

// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

//ランダムなテキストを表示する機能
const createText = () => {

  typed = '';
  typedfield.textContent = typed;

  //ランダムな値(整数)を配列の数だけ取得するメソッドを組み合わせる
  // 配列のインデックス数からランダムな数値を生成する
  let random = (Math.floor(Math.random() * textLists.length));

  // 配列からランダムにテキストを取得し画面に表示する
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};
createText();


//キー入力の判定ができる機能
const keyPress = e => {
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;

   // テキストがなくなったら新しいテキストを表示
  if(untyped === '') {
    createText();
  }
};

// タイピングスキルのランクを判定
const rankCheck = score => {};

// ゲームを終了
const gameOver = id => {};

// カウントダウンタイマー
const timer = () => {};

// キーボードのイベント処理
document.addEventListener('keypress', keyPress);