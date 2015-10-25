var mode = '';

function clearSelected(){
  $('*').removeClass('selected').removeClass('adj');
};

function setMenu(){
  $('.hamburger').click(function(){
    $('#menu').toggleClass('hidden');
  });
};

$(document).ready(function(){
  setMenu();
});
