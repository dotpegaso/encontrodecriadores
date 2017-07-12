$('a[href="#cadastro"]').on('click', function(){
   $('.navbar .modal').toggle();
});

$('.navbar .fechar').on('click', function(){
   $('.navbar .modal').hide();
});


$('#edcData').on('submit', function(e){
   e.preventDefault();
   e.stopPropagation();
   
   $.ajax({
      url: '../src/entry.php',
      method: 'POST',
      data: $('#edcData').serialize(),
      beforeSend: function(){
         $('.navbar .modal .overlay').show();
      },
      success:function(data){
         $('.navbar .modal .overlay .begin').hide();
         $('.navbar .modal .overlay .success').show();
      }
   });

})
