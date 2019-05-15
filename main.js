(function() {
    'use strict'

    // 要素(id)の取得
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');

    // 変数の宣言
    var startTime;
    var elapsedTime; // 経過時間
    var diff;
    var isStarted = false; // 初期値をfalseに設定

    // Startボタンを押した時の処理
    start.addEventListener('click', function() {

        if (isStarted === true) {
            return; // Startボタンが押されたら処理を再実行させない
        }

        isStarted = true; // Startボタンが押されたらtrueに変更

        startTime = Date.now(); // 基準日からの経過ミリ秒
        this.className = 'pushed'; // Startボタンが押されたらclass追加
        stop.className = ''; // Startボタンが押されたらstopのclass 'pushed'を空にして外す
        result.textContent = '0.000'; // Startボタンが押された時に初期化
        result.className = 'stanby'; // Startボタンが押されたらstanbyに戻す
        comment.className = '';
        document.getElementById('comment').textContent = '・・・';
    });

    // Stopボタンを押した時の処理
    stop.addEventListener('click', function() {

        if (isStarted === false) {
            return; // ゲームが始まっていない時は処理を行わない
        }

        isStarted = false; // Stopボタンが押されたらfalseに変更

        // 経過時間は、現在の時間からスタートボタンが押された時間を引く
        elapsedTime = (Date.now() - startTime) / 1000; // 1000で割ってミリ秒から秒に変換
        this.className = 'pushed'; // Stopボタンが押されたらclass追加
        start.className = ''; // Stopボタンが押されたらstartのclass 'pushed'を空にして外す

        // 結果表示
        // toFixedを使い、ピッタリでも小数点第三位まで表示させる
        result.textContent = elapsedTime.toFixed(3);
        result.className ='';

        diff = elapsedTime - 5.0;

        // 結果が５秒+-0.5秒なら表示を変える（Math.absでdiffの+-絶対値を取得）
        if (Math.abs(diff) <= 0.5) {
            result.className = 'excellent'; // 条件に当てはまればresultのclassを上書き
            comment.className = 'message';
            document.getElementById('comment').textContent = 'excellent!!';
        }
    });
})();