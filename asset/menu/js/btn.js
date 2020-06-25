$('.icono').on('click', function(){
	$('.btn-menu').toggleClass('abrir');
});

function mostrarPassword(){
      var cambio = document.getElementById("Password");
        if(cambio.type == "password"){
          cambio.type = "text";
          $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
        }else{
          cambio.type = "password";
          $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
        }
    } 
      $(document).ready(function () {
      $('#ShowPassword').click(function () {
      $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
 });