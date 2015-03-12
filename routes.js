$(document).ready(function(){
  var spaceBarController = new SpaceBarController();
    $(document).on('keyup', function(e){
    if(e.keyCode === 32){
      spaceBarController.Display();
      console.log("a");
    }

  });

});
