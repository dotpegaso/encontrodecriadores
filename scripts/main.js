$(document).ready(function(){
    
    console.warn("Ahoy dev! \n Achou algum bug? \n Me manda no twitter: @dotpegaso ;)");
    
    new Clipboard('#footer .box span.mail');
    
    //newsletter + mailchimp
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
                    $(div).removeClass('success');
                    $(div).addClass('fail');
                    $(div).html('Algo deu errado! :(');
                    $(div).slideToggle();
                    setTimeout(function(){
                        $(div).slideToggle();
                    }, 5000);
                }else{
                    $(div).removeClass('fail');
                    $(div).addClass('success');
                    $(div).html('<p>Email cadastrado com sucesso! :)</p>');
                    $(div).find('p').css({'opacity' : '1'});
                    setTimeout(function(){
                        $(div).find('p').css({'opacity' : '0'});
                    }, 5000);
                }
            }
    });
    });
    
    //cadastro
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
    
    $('.navbar .hamburger').on('click', function(){
        $('.navbar .menu').fadeToggle();
        $('.navbar .hamburger').toggleClass('close');
    });
    
    //Analitycs
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'UA-102815619-1', 'auto');
    ga('send', 'pageview');

    //maps
    $('.gmaps').append('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14581.718642803455!2d-46.368919!3d-23.9806002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d2e0d361828709e!2sEspa%C3%A7o+Plataforma!5e0!3m2!1spt-BR!2sbr!4v1527922091532" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>')
});