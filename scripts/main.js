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
               if(data == 'false'){
                   $('#newsletter .response').addClass('fail', function(){
                       $(this).html('Algo deu errado! :(');
                       $(this).show();
                   });
               }else{
                   $('#newsletter .response').addClass('success', function(){
                       $(this).html('Email cadastrado com sucesso! :)');
                       $(this).show();
                   });
               }
            }
      });
      
    });
    
});