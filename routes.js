$(bindKeys);

function bindKeys(){};
$('body').on('keyup', function(e){
	
	if (e.keyCode === 59)
		{
			semicolonController;
		}
});
/*function getRandomLocation(){
  var height = $('#container').height();
  var width = $('#container').width();
  var left = Math.floor(Math.random() * (width - 1) + 1);
  var top = Math.floor(Math.random() * (height - 1) + 1);
  return {left: left, top: top}
}*/
