$(document).ready(function(){
    
   new Clipboard('#footer .box span.mail');
   
   
    $('form#news').on('submit', function(e){
      e.preventDefault();
      e.stopPropagation();
      
      var form = $(this);
      
      $.ajax({
         url: 'src/subscribe.php',
         method: 'POST',
         data: $(form).serialize(),
         success: function(data){
               console.log(data);
            }
      });
      
   });
    
});