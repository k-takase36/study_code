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
// 4 loadイベントで画像読み込み完了時に画像表示する処理記述
// 5 fetchメソッドでAPIを読込
// 6 JSONを呼び出す
// 7 画像要素の属性にJSONのURL（message）を代入

let dogBtnElm2 = document.getElementById('dog-btn2');
let imgElm2 = document.getElementById('image2');
let imgApi2 = 'https://dog.ceo/api/breeds/image/random';
imgElm2.style.display = 'none';

dogBtnElm2.addEventListener('click', function () { 
  
  // 画像読み込み完了したときの処理
  imgElm2.addEventListener('load', displayImage)
  
  function displayImage() {
    // CSSを変更する処理
    imgElm2.style.display = '';
  };
  
  fetch(imgApi2)
  .then(response => {
    return response.json();
  })
  .then(apiData2 => {
    imgElm2.src = apiData2.message;
  })
  
});
  
  // ③axiosを使用した書き方
  // ◆手順
  // 1 要素の取得→変数へ格納（ボタン、画像、APIのURL）
  // 2 初期状態を非表示
  // 3 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
  // 4 loadイベントで画像読み込み完了時に画像表示する処理記述
  // 5 axios.getメソッドでAPIを読込
  // 6 response.dataでJSONのデータを取得
  // 7 画像要素の属性にJSONのURL（message）を代入
  
let dogBtnElm3 = document.getElementById('dog-btn3');
let imgElm3 = document.getElementById('image3');
let imgApi3 = 'https://dog.ceo/api/breeds/image/random';
imgElm3.style.display = 'none';

dogBtnElm3.addEventListener('click', function () {
  
  // 画像読み込み完了したときの処理①
  imgElm3.addEventListener('load', displayImage)
  
  function displayImage() {
    // CSSを変更する処理
    imgElm3.style.display = '';
  };
  
  // 画像読み込み完了時に画像表示する処理②
  // imgElm3.addEventListener('load', function () {
  //     imgElm3.style.display = '';
  // });
  
  axios.get(imgApi3)
  .then(response => response.data)
  .then(apiData3 => imgElm3.src = apiData3.message)
  
});