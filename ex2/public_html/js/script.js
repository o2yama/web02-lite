var digitCollection = document.getElementsByClassName('digit');//HTMLCollection（配列じゃない）
var digits = Array.from(digitCollection);//forEach使うために配列に変換

digits.forEach(function (digit) {
  digit.addEventListener('click', function () {
    var newValue = changeNum(this.innerText);
    this.innerText = newValue;

    //足される数
    var digit1 = document.getElementById('digit1').innerText.toString();
    var digit2 = document.getElementById('digit2').innerText.toString();
    var digit3 = document.getElementById('digit3').innerText.toString();
    var digit4 = document.getElementById('digit4').innerText.toString();
    var num1 = digit1 + digit2 + digit3 + digit4;
    
    //足す数
    var digit5 = document.getElementById('digit5').innerText.toString();
    var digit6 = document.getElementById('digit6').innerText.toString();
    var digit7 = document.getElementById('digit7').innerText.toString();
    var digit8 = document.getElementById('digit8').innerText.toString();
    var num2 = digit5 + digit6 + digit7 + digit8;

    //答え
    var answer = document.getElementById('answer');

    var result = toBinary(num1) + toBinary(num2);
    answer.innerText = ('00000' + result.toString(2)).slice(-5);
  });
});

const toBinary = (n) => parseInt(n, 2);

const changeNum = (n) => {
  if (n === '0') {
    return '1';
  } else {
    return '0';
  }
}