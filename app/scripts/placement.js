function startPlacement(){
  clearSelected();
  $('.hex').unbind();
  $('.hex').click(function(){
    placeImage(this);
  });
};

function placeImage(obj){
  var $obj = $(obj);
  if (!$obj.hasClass('arrow1')) {
    $obj.toggleClass('arrow1');
    $obj.toggleClass('ur');
  } else if ($obj.hasClass('ur')) {
    $obj.toggleClass('ur');
    $obj.toggleClass('right');
  } else if ($obj.hasClass('right')) {
    $obj.toggleClass('right');
    $obj.toggleClass('lr');
  } else if ($obj.hasClass('lr')) {
    $obj.toggleClass('lr');
    $obj.toggleClass('ll');
  } else if ($obj.hasClass('ll')) {
    $obj.toggleClass('ll');
    $obj.toggleClass('left');
  } else if ($obj.hasClass('left')) {
    $obj.toggleClass('left');
    $obj.toggleClass('ul');
  } else if ($obj.hasClass('ul')) {
    $obj.toggleClass('ul');
    $obj.toggleClass('arrow1');
  }
};



$(document).ready(function(){
  startPlacement();
});
