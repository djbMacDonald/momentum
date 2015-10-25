var mode = '';

function clearSelected(){
  $('*').removeClass('selected').removeClass('adj');
  $('.hex').unbind()
};

function setMenu(){
  $('.hamburger').click(function(){
    $('#menu').toggleClass('hidden');
  });
};

function setMode(mode){
  console.log(mode);
  clearSelected();
  $('button').removeClass('active');
  var btnText = buttonText(mode);
  $('button:contains('+btnText+')').addClass('active');
  switch(mode){
    case "placeObstacles":
      obstacleMenu();
    break;
    case "placeTroops":
      setUpTroops();
    break;
    case "object":
      objectMenu();
    break;
    case "wall":
      setUpBorder();
    break;
  }
};

function buttonText(text){
  var first = /\w+[A-Z]/;
  var second = /[A-Z]\w+/;
  var result = first.exec(text);
  if (result) {
    result = capitalize(result[0]).slice(0,-1);
    result += " " + second.exec(text)[0];
  } else {
    result = capitalize(text);
  };
  return result;
};

function capitalize(text){
  return text.substring(0,1).toUpperCase() + text.substring(1);
};

function obstacleMenu(){
  $('.base').toggleClass('hidden');
  $('.obstacle').toggleClass('hidden');
};

function objectMenu(){
  $('.obstacle').toggleClass('hidden');
  $('.object').toggleClass('hidden');
};

function advanceShips(){
  console.log('advance');
};

function back(){
  $('.base').removeClass('hidden');
  $('.obstacle').addClass('hidden');
  $('.object').addClass('hidden');
};

$(document).ready(function(){
  setMenu();
});
