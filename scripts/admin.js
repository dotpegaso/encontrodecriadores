/* global $ */

if(window.localStorage.getItem('validation') != 'true'){
    window.location = "https://encontrodecriadores.art/heitor";
}

$('form').on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
  
    var form = $(this);
    
    $.ajax({
     url: '../../src/admin.php',
     method: 'POST',
     data: $(form).serialize(),
     success: function(data){}
    });
}); 