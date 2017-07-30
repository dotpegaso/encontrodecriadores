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
                    window.localStorage.setItem('validation', '');
                    alert('Palavra-chave incorreta');
                    $('#pass').val('');
                    $('#pass').focus();
                }else{
                    window.localStorage.setItem('validation', 'true');
                    $('body').append(data);
                }
            }
        });
    });
})