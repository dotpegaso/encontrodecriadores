/* global $ */

if(window.localStorage.getItem('validation') != 'true'){
    window.location = "https://encontrodecriadores.art/heitor";
}

$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
      
        var form = $(this);
        
        $.ajax({
         url: '../../src/admin.php',
         method: 'POST',
         data: $(form).serialize(),
         beforeSend: $('form button').text('Salvando...'),
         success: function(data){
             alert('Alterações salvas, a página será recarregada');
             window.location.reload();
         }
        });
    });

});