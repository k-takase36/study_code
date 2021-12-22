'use strict'

// ①XMLHttpRequestを使用した書き方

// ◆手順
// 1 要素の取得→変数へ格納（ボタン、画像、APIのURL）
// 2 初期状態を非表示
// 3 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
// 4 XMLHttpRequestを作成して代入
// 5 openメソッドでAPIを読込
// 6 sendメソッドでリクエストを送る
// 7 loadイベントでAPIデータを読み込む
// 8 this.responseTextでJSONの中身を確認 → JSON.parseで使えるよう変換して代入
// 9 画像要素の属性にJSONのURL（message）を代入
// 10 画像表示

let dogBtnElm = document.getElementById('dog-btn');
let imgElm = document.getElementById('image');
let imgApi = 'https://dog.ceo/api/breeds/image/random';
imgElm.style.display = 'none';

dogBtnElm.addEventListener('click', function () { 
  let request = new XMLHttpRequest(); 
  request.open('GET', imgApi); 
  request.send(); 
  
  request.addEventListener('load', function () {
    let apiData = JSON.parse(this.responseText);
    imgElm.src = apiData.message;
    imgElm.style.display = '';

  });
  
});

// ②Fetchを使用した書き方

// ◆手順
// 1 要素の取得→変数へ格納（ボタン、画像、APIのURL）
// 2 初期状態を非表示
// 3 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
// 4 fetchメソッドでAPIを読込
// 5 JSONを呼び出す
// 6 画像要素の属性にJSONのURL（message）を代入
// 7 画像表示

let dogBtnElm2 = document.getElementById('dog-btn2');
let imgElm2 = document.getElementById('image2');
let imgApi2 = 'https://dog.ceo/api/breeds/image/random';
imgElm2.style.display = 'none';

dogBtnElm2.addEventListener('click', function () { 
  
  fetch(imgApi2)
  .then(response => {
    return response.json();
  })
  .then(apiData2 => {
    imgElm2.src = apiData2.message;
  })
  imgElm2.style.display = '';

});
  
  // ③axiosを使用した書き方
  
  // ◆手順
  // 1 要素の取得→変数へ格納（ボタン、画像、APIのURL）
  // 2 初期状態を非表示
  // 3 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
  // 4 axios.getメソッドでAPIを読込
  // 5 response.dataでJSONのデータを取得
  // 6 画像要素の属性にJSONのURL（message）を代入
  // 7 画像表示
  
let dogBtnElm3 = document.getElementById('dog-btn3');
let imgElm3 = document.getElementById('image3');
let imgApi3 = 'https://dog.ceo/api/breeds/image/random';
imgElm3.style.display = 'none';

dogBtnElm3.addEventListener('click', function () {

  axios.get(imgApi3)
  .then(response => response.data)
  .then(apiData3 => imgElm3.src = apiData3.message)
  imgElm3.style.display = '';

});