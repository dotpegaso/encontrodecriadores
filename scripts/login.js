$(document).ready(function(){
    $('#pass').focus();
    
     $('form').on('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
      
        var form = $(this);
        
        $.ajax({
         url: '../src/login.php',
         method: 'POST',
         data: $(form).serialize(),
         success: function(data){
                if(data == 'false'){
                   alert('Palavra-chave incorreta');
                }
            }
    });
    });
})