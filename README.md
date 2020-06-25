<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <title>LOGIN | INICIO</title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="asset/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="asset/menu/css/index.css">
  </head> 
  <body>
  <div id="Contenedor" >
  </br>
    <h2 class="text"><i class="fa fa-user icon-title"></i> Registra tus datos</h2>
    <hr color="#D8D8D8">
    <form  method="POST">
    <div align="center">
        <input type="text" class="form-control " name="nombres" placeholder="Nombre" />
    </div>
    <br/>
    <div align="center">
        <input type="text" class="form-control " name="apellidos" placeholder="Apellido" />
    </div>
    <br/>
    <div align="center">
        <input type="text" class="form-control " name="username" placeholder="Correo Electronico" />
    </div>
    <br/>
    <div align="center">
         <input type="password" class="form-control "  name="password" placeholder="Contraseña" />
    </div>
    <br/>
    <div align="center">
         <input type="text" class="form-control " name="roles" placeholder="Roles"  />
    </div>
    <br/>
    <div align="center">
          <input type="submit"  class="btn btn-primary btn-lg btn-block" name="enviar"  />
    </div>
    </form>
  </div>  
  <?php 
  include("correo.php")
   ?>
  </body>
  <script src="asset/menu/js/btn.js"></script>
  <script src="asset/bootstrap/js/bootstrap.js"></script>
  <script src="asset/bootstrap/js/bootstrap.min.js"></script>
  <script src="asset/menu/js/jquery.js"></script>
</html>
