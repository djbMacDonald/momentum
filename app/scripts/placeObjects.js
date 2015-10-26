function setObject(mode){
  clearSelected();
  $('.hex').unbind();
  $('button').removeClass('active');
  $('.' + mode).addClass('active');
  $('.hex').click(function(){
    placeObject(this, mode);
  });
};

function placeObject(obj, mode){
  $(obj).removeClass('barrier').removeClass('bio').removeClass('bomb').removeClass('crowd').removeClass('fire').removeClass('radiation').removeClass('rocks').removeClass('skull').removeClass('storm').removeClass('table');
  $(obj).addClass('object').addClass(mode);
};
