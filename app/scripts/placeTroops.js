function setTroop(mode){
  clearSelected();
  $('.hex').unbind();
  $('button').removeClass('active');
  $('.' + mode).addClass('active');
  $('.hex').click(function(){
    placeTroop(this, mode);
  });
};

function placeTroop(obj, mode){
  $(obj).removeClass('axe').removeClass('book').removeClass('bow').removeClass('doctor').removeClass('knight').removeClass('pistol').removeClass('shoe').removeClass('shotgun').removeClass('shovel').removeClass('sword');
  $(obj).removeClass('ur').removeClass('right').removeClass('lr').removeClass('ll').removeClass('right').removeClass('ul');
  $(obj).addClass('troop').addClass(mode);
};
