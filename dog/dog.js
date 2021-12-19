'use strict'

// ①XMLHttpRequestを使用した書き方

// ◆手順
// 1 要素の取得（ボタン、画像）
// 2 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
// 3 XMLHttpRequestを作成して代入
// 4 openメソッドでAPIを取得
// 5 sendメソッドでリクエストを送る
// 6 loadイベントでAPIデータを読み込む
// 7 this.responseTextでJSONの中身を確認 → JSON.parseで使えるよう変換して代入
// 8 画像要素の属性にAPIのURL（message）を代入

let dogBtnElm = document.getElementById('dog-btn');
let imgElm = document.getElementById("image");

dogBtnElm.addEventListener('click', function () { 
  let request = new XMLHttpRequest(); 
  request.open('GET', 'https://dog.ceo/api/breeds/image/random'); 
  request.send(); 
  
  request.addEventListener('load', function () { // loadイベント
    let apiData = JSON.parse(this.responseText);
    imgElm.src = apiData.message;

  });
  
});

// ②Fetchを使用した書き方

// ◆手順
// 1 要素の取得（ボタン、画像）
// 2 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
// 3 fetchメソッドでAPIを取得
// 4 jsonを呼び出す
// 5 画像要素の属性にAPIのURL（message）を代入

let dogBtnElm2 = document.getElementById('dog-btn2');
let imgElm2 = document.getElementById("image2");

dogBtnElm2.addEventListener('click', function () { 
  
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    return response.json();
  })
  .then(apiData2 => {
    imgElm2.src = apiData2.message;
  })

});