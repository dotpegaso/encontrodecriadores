$(document).ready(function(){
    
    $('.logotipo img').plaxify();
    $.plax.enable({ "activityTarget": $('#home')});
    
    
    var colors = ['#547A82', '#3EACA8', '#Ef4566', '#83AE9B', '#2F9395', '#A6206A', '#F7A7A6', '#7F5417'];
   
    function randomGen(min,max){
       return Math.floor(Math.random() * (max-min + 1) + min);
    }
        
    setInterval(function(){
       $('#home h1 em').css({
           'background-color' : colors[randomGen(1,8)],
           '-webkit-background-clip' : 'text',
           '-webkit-text-fill-color' : 'transparent',
           'transition-duration' : '.8s'
       });
    }, 250);
    
});