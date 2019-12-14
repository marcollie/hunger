$(document).ready(function() {

    var wdt = $('.gallery').width();
        boxwdt = $('.gallery-box').width();
        moved = false;
        imgnum = $('.gallery-box>img').length;

        setInterval(function() {
          $('.gallery-box').animate({
            left:-(wdt)
          },500);
          wdt = wdt*2;
          console.log(wdt);
        },1000)
}); 