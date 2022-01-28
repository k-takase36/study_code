'use strict'

 // ③axiosを使用した書き方
  // ◆手順
  // 1 要素の取得→変数へ格納（ボタン、画像、APIのURL）
  // 2 初期状態を非表示
  // 3 ボタン要素のclickイベント作成（ボタンクリック後、API画像が表示される処理）
  // 4 loadイベントで画像読み込み完了時に画像表示する処理記述
  // 5 axios.getメソッドでAPIを読込
  // 6 response.dataでJSONのデータを取得
  // 7 画像要素の属性にJSONのURL（message）を代入

//   let weatherElm = document.getElementById('weather-btn');
//   // let imgElm = document.getElementById('img-box');
//   let apiElm = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m';


//   // weatherElm.addEventListener('click', function () {

//   //   axios.get(apiElm)
//   //   .then(response => response.data)
//   //   .then(apiData => imgElm.src = apiData.message)

//   // });

// weatherElm.addEventListener('click', function () {
  
//     // JSON
//     // const option = {responseType: "blob"};
//     axios.get(apiElm)
//     .then(response => {response.data.text()
//     .then(apiData => {
//         let arr = JSON.parse(apiData);
//         imgElm.src
//     });
  
//   });


let apiElm = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m';

	axios.get(apiElm)
	.then(response => console.log(response.data));
