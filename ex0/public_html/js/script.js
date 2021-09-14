window.addEventListener('load', function () {
  const count = document.getElementById('counter');

  const DURATION = 3000; //3秒間で処理実行
  const from = 0;
  const to = 100;
  const startTime = Date.now()

  const timer = setInterval(() => {
    const progress = Date.now() - startTime //進んだ秒数
    const progressStatus = progress / DURATION //3秒のうちの何%進んだか

    if (progressStatus < 1) {
      count.innerText = Math.floor(from + to * progressStatus);
    } else {
      count.innerText = to;
      clearInterval(timer);
    }
  });
  
});