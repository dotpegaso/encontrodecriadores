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
                var div = $('#newsletter .response');
                
                if(data == 'false'){
                    $(div).addClass('fail');
                    $(div).html('Algo deu errado! :(');
                    $(div).show();
                }else{
                    $(div).addClass('success');
                    $(div).html('Email cadastrado com sucesso! :)');
                    $(div).show();
                }
            }
      });
      
    });
    
});