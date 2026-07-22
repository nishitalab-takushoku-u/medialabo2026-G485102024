
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('・検索結果1件目');
  console.log("・名前：" + data.results.shop[0].name); 
  console.log("・アクセス：" + data.results.shop[0].access); 
  console.log("・住所：" + data.results.shop[0].address); 
  console.log("・予算：" + data.results.shop[0].budget.name); 
  console.log("・キャッチコピー：" + data.results.shop[0].catch);
  console.log("・ジャンル：" + data.results.shop[0].genre.name); 
  console.log("・営業時間：" + data.results.shop[0].open); 
  console.log("・最寄駅：" + data.results.shop[0].station_name); 
  console.log("・サブジャンル：" + data.results.shop[0].sub_genre.name); 
  console.log(data.results.shop[0].logo_image);
  console.log("・検索結果2件目"); 
  console.log("名前：" + data.results.shop[1].name); 
  console.log("アクセス：" + data.results.shop[1].access); 
  console.log("住所：" + data.results.shop[1].address); 
  console.log("・予算：" + data.results.shop[1].budget.name); 
  console.log("・キャッチコピー：" + data.results.shop[1].catch);
  console.log("・ジャンル：" + data.results.shop[1].genre.name)
  console.log("・営業時間：" + data.results.shop[1].open); 
  console.log("・最寄駅：" + data.results.shop[1].station_name); 
  console.log("・サブジャンル：" + data.results.shop[1].sub_genre.name); 
  console.log(data.results.shop[1].logo_image);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  console.log("print");
  let p = document.querySelector('#result');
  if(p){
    p.remove();
  }
  let div = document.createElement('div');
  div.classList.add('result');
  let body = document.querySelector('body'); 
 
  body.insertAdjacentElement('beforeend',div);
  div.setAttribute('id','result');
  let span = document.querySelector('#span');
  if(span){
    span.textContent = data.results.shop.length;
  }
  let cont = 1;
  for(let s of data.results.shop){
  let h2 = document.createElement('h2');
  div.insertAdjacentElement('beforeend',h2);
  h2.textContent = "・検索結果" + cont + "件目";
  let ul = document.createElement('ul');
  div.insertAdjacentElement('beforeend',ul);
  let li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.innerHTML = "<strong>名前: " + s.name + "</strong>";
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "アクセス：" + s.access;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "住所：" + s.address;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "予算：" + s.budget.name;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "キャッチコピー：" + s.catch;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "ジャンル：" + s.genre.name;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "営業時間：" + s.open;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  li.textContent = "最寄駅：" + s.station_name;
  li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  if (s.sub_genre) {
      li.textContent = "サブジャンル：" + s.sub_genre.name;
  } else {
    li.textContent = "サブジャンル：なし";
  }
  let img = document.createElement('img');
  div.insertAdjacentElement('beforeend', img);
  img.src = s.logo_image;
  img.width = 100;
  cont ++;
}
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let button = document.querySelector('#search');
button.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義

function sendRequest() {
  let genre = document.querySelector('#genre').value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';

    axios.get(url)
      .then(showResult)  
      .catch(showError)   
      .then(finish);      
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
        data = JSON.parse(data);
  }
  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


