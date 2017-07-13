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
                    $(div).removeclass('success');
                    $(div).addClass('fail');
                    $(div).html('Algo deu errado! :(');
                    $(div).show();
                }else{
                    $(div).removeclass('fail');
                    $(div).addClass('success');
                    $(div).html('Email cadastrado com sucesso! :)');
                    $(div).show();
                }
            }
      });
      
    });
    
    $('form#edcData').on('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
        
        var formData = new FormData(this);

        $.ajax({
            beforeSend: function(){
                $('.navbar .modal .overlay').show();
            },
            url: 'src/mail.php',
            type: 'POST',
            data: formData,
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            success: function(data){
                $('.navbar .modal .overlay .begin').hide();
                $('.navbar .modal .overlay .success').show();
            }
        });
        
        
    });
    
});