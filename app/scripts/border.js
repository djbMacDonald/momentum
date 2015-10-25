function setUp(){
  clearSelected();
  $('.hex').unbind();
  $('.hex').click(function(){
    startBorder(this);
  });
};


function startBorder(obj){
  clearSelected();
  $(obj).addClass('selected');
  selectAdj(obj);
};

function selectAdj(obj){
  var adj = findAdj(obj);
  for (var i = 0; i < adj.length; i++){
    var hex = $(adj[i]['hex']);
    hex.addClass('adj');
    hex.unbind();
    (function(i){
      hex.click(function(){
        createBorder(obj, adj[i]['direction']);
        setUp();
      });
    })(i);
  };
};

function findAdj(obj){
  var adj = [];
  var row = $(obj).data().row;
  var col = $(obj).data().col;

  var a = verifiedHex(row-1, col+1);
  if (a){
    adj.push({'hex': a, 'direction': 1});
  };

  a = verifiedHex(row, col+1);
  if (a){
    adj.push({'hex': a, 'direction': 2});
  };

  a = verifiedHex(row+1, col);
  if (a){
    adj.push({'hex': a, 'direction': 3});
  };

  a = verifiedHex(row+1, col-1);
  if (a){
    adj.push({'hex': a, 'direction': 4});
  };

  a = verifiedHex(row, col-1);
  if (a){
    adj.push({'hex': a, 'direction': 5});
  };

  a = verifiedHex(row-1, col);
  if (a){
    adj.push({'hex': a, 'direction': 6});
  };

  return adj;
};

function verifiedHex(row, col){
  var results = $('.hex[data-row="'+row+'"][data-col="'+col+'"]');
  return results.length > 0 ? results.first() : false;
};

function createBorder(obj, direction){
  var border = $('<div>');
  switch(direction){
    case 1:
      border.addClass('ur border');
      break;
    case 2:
      border.addClass('right border');
      break;
    case 3:
      border.addClass('lr border');
      break;
    case 4:
      border.addClass('ll border');
      break;
    case 5:
      border.addClass('left border');
      break;
    case 6:
      border.addClass('ul border');
      break;
  }
  $(obj).append(border);
};

$(document).ready(function(){
  setUp();
});
