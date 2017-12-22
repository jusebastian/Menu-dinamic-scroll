$(document).ready(function(){

  var flag =false;
  var scroll;
  $(window).scroll(function(){
      scroll = $(window).scrollTop();

      if(scroll > 10){
        $("#logo").css({"margin-top":"-5px", "width":"50px", "height":"50px"});
        $("header").css({"background-color":"#fff"});
      }else{
        $("#logo").css({"margin-top":"230px", "width":"250px", "height":"250px"});
        $("header").css({"background-color":"transparent"});
      }

      
  });
});