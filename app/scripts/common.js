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
  $('button').removeClass('active');
  var btnText = buttonText(mode);
  $('button:contains('+btnText+')').addClass('active');
  // switch(mode){
  //   case "placeTroops":
  //     $('button:contains("Place Troops")').addClass('active');
  //   break;
  // }
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

function advanceShips(){
  console.log('advance');
};

$(document).ready(function(){
  setMenu();
});
