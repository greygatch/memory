'use strict';
var timerFunction;
var $selected;
var selectedFruits = [];

var fruits = {
  1: 'apple',
  2: 'banana',
  3: 'strawberry',
  4: 'cherry',
  5: 'kiwi',
  6: 'pear',
  7: 'watermelon',
  8: 'lemon',
  9: 'grape',
  10: 'orange',
  11: 'apple',
  12: 'banana',
  13: 'strawberry',
  14: 'cherry',
  15: 'kiwi',
  16: 'pear',
  17: 'watermelon',
  18: 'lemon',
  19: 'grape',
  20: 'orange'
};

var fruitArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

$(document).ready(init);

function init(){
  $('#start').click(initBoard);
  $('#table').on('click', '.hidden', checkCard);
  fruitArr = randomizeArr(fruitArr);
}

function initBoard(){
  if (timerFunction){
    clearInterval(timerFunction);
  }
  $('#timer').text('60');
  countDown();
  $('#table').children().remove();
  fruitArr.forEach(function(n){
    var $div = $('<div>');
    $div.addClass(fruits[n]);
    $div.addClass('square');
    $div.addClass('hidden');
    $('#table').append($div);
  });
}


// Fisher-Yates algorithm
function randomizeArr(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function countDown(){
  var time = parseInt($('#timer').text());

  timerFunction = setInterval(function(){

     time = (time - 1) * 1;
     $('#timer').text(time);
     if (time <= 0){
       alert('YOU LOSE!!!!!!!');
       clearInterval(timerFunction);
     }
   }, 1000);
}

function checkCard(){
  if (selectedFruits.length >= 2){
    return;
  }

  $(this).removeClass('hidden');
  $(this).addClass('shown');

  $selected = $(this).attr('class').split(' ')[0];
  selectedFruits.push($selected);

  console.log(selectedFruits);
  if (selectedFruits.length === 2){
    if (selectedFruits[0] === selectedFruits[1]){
      console.log("hooray!");
      $('.shown').addClass('found');
      $('.found').removeClass('hidden');
      $('.found').removeClass('shown');
      $selected = null;
      selectedFruits = [];
      checkWin();
    }
    else{
      setTimeout(function(){
        $('.shown').addClass('hidden');
        $('.hidden').removeClass('shown');
        selectedFruits = [];
      }, 1000);
    }
  }
}

function checkWin(){
  if ($('.hidden').length === 0){
    alert('YOU WIN!!');
    clearInterval(timerFunction);
    setTimeout(function(){
      location.reload();
    }, 4000);
  }
}
