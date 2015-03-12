$(document).ready(function(){
  var spaceBarController = new SpaceBarController();
    $(document).on('keypress', function(e){
    if(e.keyCode === 32){
      spaceBarController.Display();
    }

  });

});
