'use strict';
var timerFunction;
var $selected;
var $target;

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
}

var fruitArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

$(document).ready(init);

function init(){
  $('#start').click(initBoard);
  $('#table').on('click', '.hidden', selectCard);
  fruitArr = randomizeArr(fruitArr);

}

function initBoard(){
  countDown();
  fruitArr.forEach(function(n){[]
    var $div = $('<div>');
    $div.addClass(fruits[n]);
    $div.addClass('square');
    $div.addClass('hidden');
    // $div.attr('id', n)nsole.log($div);
    $('#table').append($div);

    // console.log($div);

  });

}


// Fisher-Yates algorithm
function randomizeArr(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
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
    //  console.log(time);
    //  console.log(typeof(time));
     $('#timer').text(time);
     if (time <= 0){
       alert('YOU LOSE!!!!!!!')
       clearInterval(timerFunction);
     }
   }, 1000);



}

function selectCard(){

  $selected = $(this);
  console.log($selected);
  $selected.removeClass('hidden');
  $selected.addClass('shown');
  
}

function checkCard(){

  if (!$selected){
    return;
  }

  console.log('enter selectCard');

  // select card 1
    // if card 1 === card 2
      // flipCard()
    // else
      // peekCard()
}

function flipCard(){
  // toggle class .found for card1 and card2
  checkWin()
}

function peekCard(){
  // show card for moment, then return to .hidden
  // set timeout
}

function checkWin(){
  if ($('.hidden').length === 0){
    alert('win')
  }
}
