var numRows = 0;

function addRow(){
  if (numRows % 2 == 1) {
    var offBox = $('<div>');
    offBox.addClass('offBox');
    $('body').append(offBox);
  } else {
    var heightBox = $('<div>');
    heightBox.addClass('heightBox');
    $('body').append(heightBox);
  };

  for(var i = 0; i < 10; i++) {
    var mid = $('<div>');
    mid.addClass('hex');
    $('body').append(mid);
  };

  var rowBox = $('<div>');
  rowBox.addClass('rowBox');
  $('body').append(rowBox);

  numRows++;

};

$(document).ready(function(){
  console.log('ready');

  for (var i = 0; i < 5; i++) {
    addRow();
  };

  $('#circle').click(function(){
    console.log('circle');
  });
  $('.hex').click(function(){
    $(this).toggleClass('blue');
  });

});
