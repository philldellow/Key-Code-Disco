function FullstopView() {

  var selectBackground = $('body')

  this.redBackground = function(){
    selectBackground.css("background-color","red")
  }
  this.whiteBackground = function(){
    selectBackground.css("background-color","white")
  }

}
