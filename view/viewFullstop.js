function FullstopView() {

  var selectBackground = $('body')

  this.redBackground = function(){
    selectBackground.css("background-color","red")
  }
  this.blueBackground = function(){
    selectBackground.css("background-color","blue")
  }
  this.whiteBackground = function(){
    selectBackground.css("background-color","white")
  }

}
