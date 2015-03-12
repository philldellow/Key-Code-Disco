describe('FullstopCont()', function() {
  beforeAll(function(){
    this.fullstopCont = new FullstopCont();
  });

  describe('count',function(){

    it('should equal zero', function(){
      expect(this.fullstopCont.count).toEqual(0)
    });

  });

});


describe('FullstopView()', function() {
  beforeAll(function(){
    this.body = $('body')
    this.fullstopView = new FullstopView();
  });


  describe('background color',function(){

    beforeAll(function(){
      this.fullstopView.redBackground();
    })

    it('background color should become red', function(){
      expect(this.body.css('background-color')).toEqual('rgb(255, 0, 0)')
    });

  });

  describe('background color',function(){

    beforeAll(function(){
      this.fullstopView.whiteBackground();
    })

      it('background color should become white', function(){
        expect(this.body.css('background-color')).toEqual('rgb(255, 255, 255)')
      });

    });
});
