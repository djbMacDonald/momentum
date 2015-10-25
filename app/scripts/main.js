

function createGrid(){
  for (var i = 0; i < 20; i++){
    createRow(i);
  };
};

function createRow(row){
  if (row % 2 == 1){
    var offBox = $('<div>');
    offBox.addClass('offBox');
    $('body').append(offBox);
  } else {
    var heightBox = $('<div>');
    heightBox.addClass('heightBox');
    $('body').append(heightBox);
  };

  for (var i = 0; i < 20; i++){
    createHex(row,i);
  };

  var rowBox = $('<div>');
  rowBox.addClass('rowBox');
  $('body').append(rowBox);
};

function createHex(row, col){
  var hex = $('<div>');
  hex.addClass('hex');
  hex.attr("data-row", row);
  hex.attr("data-col", col-Math.floor(row/2));
  $('body').append(hex);
};

$(document).ready(function(){
  createGrid();
});
