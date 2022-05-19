<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php if(isset($_GET['status'])){if($_GET['status']=="success"){echo("Envío Completado");}}else{ echo("Error Envío");} ?></title>
    <link rel="stylesheet" href="../../css/result.css">
    <script src="https://kit.fontawesome.com/d3ce3e727e.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="../../img/webIcon.png" type="image/x-icon">
</head>
<body>
    <div class="spacer">
        <img src="../../img/logoBlancoLinea.svg " alt="Casa Rural Aire" id="logo">
    </div>
    <div id="content">
        <div id="imgContainer">
        <!--<img id="logo" src="./casaRuralBlueLogo.jpg" alt="LogoCasaRuralAzul">-->
        <img id="resultImg" src="<?php if(isset($_GET['status'])){if($_GET['status']=="success"){echo("../../img/check verde.png");}}else{ echo("../../img/check rojo.png");} ?>" alt="result">
        <!--<img id="resultImg" src="./x.svg" alt="success">-->
        </div>
        <h2><?php if(isset($_GET['status'])){if($_GET['status']=="success"){echo("¡Formulario Enviado Correctamente!");}}else{ echo("No Se Ha Enviado el Formulario");} ?></h2>
        <!--<h2>Error Enviando El Formulario</h2>-->

        <h2 class="h2Light"><?php if(isset($_GET['status'])){if($_GET['status']=="success"){echo("Su formulario se ha enviado con éxito. En breve nos pondremos en contacto con usted.");}}else{ echo("Por alguna razón no se ha podido enviar el formulario, Inténtalo de nuevo más tarde.");} ?></h2 .class="h2Light">
        <!--<p><b>Por alguna razón no se ha podido enviar el formulario, Inténtalo de nuevo más tarde</b></p>-->
        
    </div>
    <div class="spacer2">
        <p><a href="../CasaRuralAire.html">Volver a la <u>Página Principal.</u></a></p>
    </div>
</body>
</html>