$(document).ready(function(){
    
    // var scene = $('#mouseparallax').get(0);
    // var parallax = new Parallax(scene);
    
    // $('.gmaps').html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14587.213980722196!2d-46.332233!3d-23.9320115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb09d207341c1b80!2sCasa+da+Frontaria+Azulejada!5e0!3m2!1spt-BR!2sbr!4v1496585746943" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
    
//      $.fn.followTo = function (pos) {
//       var $this = this,    
//           $window = $(window);
   
//       $window.scroll(function (e) {
//           if ($window.scrollTop() > pos) {
//               $this.css({
//                   'opacity' : '0',
//               });
//           } else {
//               $this.css({
//                   'opacity' : '1'
//               });
//           }
//       });
//   };
   
//   $('.brain').followTo(400);

    var colors = ['#547A82', '#3EACA8', '#Ef4566', '#83AE9B', '#2F9395', '#A6206A', '#F7A7A6', '#7F5417'];
   
    function randomGen(min,max){
       return Math.floor(Math.random() * (max-min + 1) + min);
    }
        
    setInterval(function(){
       $('#home h1.pos-load em').css({
        //   'background':'url(../res/em_background/bg' + randomGen(1,3) + '.jpg',
            'background-color' : colors[randomGen(1,8)],
           '-webkit-background-clip' : 'text',
           '-webkit-text-fill-color' : 'transparent',
           'transition-duration' : '.8s'
       });
    }, 200);
    
    
    
});