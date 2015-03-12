$(bindKeys);

function bindKeys(){};
$(document).on('keypress', function(e){
  console.log(e.keyCode)
  
  if (e.keyCode === 46){

    test = new FullstopCont();
    test.delayFlash();
  }

if (e.keyCode === 59){
	v = new semiColon();
	v.semi();
}
});
/*function getRandomLocation(){
  var height = $('#container').height();
  var width = $('#container').width();
  var left = Math.floor(Math.random() * (width - 1) + 1);
  var top = Math.floor(Math.random() * (height - 1) + 1);
  return {left: left, top: top}
}*/
