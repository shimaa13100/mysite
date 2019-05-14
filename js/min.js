

var position = $(window).scrollTop(); 

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        $("nav").css({"background-color":"#464545"});
        console.log('scrollDown');
          
    } else {
         console.log('scrollUp');
         $("nav").css({"background-color":"transparent"}); 
         
    }
    position = scroll;
});

