// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu + 1;
  let span = document.querySelector('span#kaisu');
  span.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  if(kaisu<3){
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="yoso"]');
  let n = Number(yoso.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(n===kotae){
    let m = document.querySelector('p#result')
    m.textContent = "おめでとう正解。"
  }else if(n<kotae){
  let m = document.querySelector('p#result');
  m.textContent = "残念答えはもっと大きいよ。"
} else{
  let m = document.querySelector('p#result');
  m.textContent = "残念答えはもっと小さいよ。"
}
  }else{
    let m = document.querySelector('p#result');
    m.textContent = "もうゲームは終わり。"
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#print');
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
b = b.addEventListener('click', hantei); 