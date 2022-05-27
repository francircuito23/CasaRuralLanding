<?php 
    //print_r($_POST);
    $date = date('m/d/Y'); 
    $time = date('h:i a');

    header("Content-Type: text/html;charset=utf-8");
	if ($_SERVER['REQUEST_METHOD'] != "POST"){exit;}

    


    //Verificación captcha


    /*if (isset($_POST['g-recaptcha-response'])&&($_POST['g-recaptcha-response']!="")) {//Si se envia el formulario con recaptcha, lo verifico con google
        echo("captcha correcto");

        //guardo la clave enviada por el formulario
        $recaptcha = $_POST['g-recaptcha-response'];
    
        //clave secreta para la verificación con google
        $secret_key = '6LeACsMfAAAAAG-uzmCWpRKi9giyAS-3gNnJooDg';
    
        
        //Peticion a google para verificar el captcha, devuelve success or error
        $url = 'https://www.google.com/recaptcha/api/siteverify?secret='
            . $secret_key . '&response=' . $recaptcha;
    
        // Envio la peticion
        $response = file_get_contents($url);
    
        // LA respuesta viene en JSON, hacemos un parse
        $response = json_decode($response);
    
        // Verificamos la respuesta de google
        if ($response->success == true) {
            //echo '<script>alert("Google reCAPTACHA verified")</script>';
        } else {
            //header("location:" . "https://www.annualcongress-uae.lu/registration-error/");
            echo("error captcha");
            exit;
        }
    }
    else{//Error, no se envia captcha
        //header("location:" . "https://www.annualcongress-uae.lu/registration-error/");
        echo("error captcha");
        exit;
    }*/






    //MAIL BODY

    //$body = '<h1 style="color:red">Reserva / Contacto: </h1>';


    $body = '<h1 color="red">Reserva / Contacto: </h1>';

    
    $body = $body."<p><b>Persona de Contacto:</b> " .$_POST['personaContacto'] ."</p>" ;
    $body = $body."<p><b>Email:</b> " .$_POST['email'] ."</p>" ;
    $body = $body."<p><b>Teléfono:</b> " .$_POST['telefono'] ."</p>" ;
   // $body = $body.'<p  style="max-width: 350px"><b>Asunto:</b> ' .$_POST['asunto'] ."</p>" ;
    //$body = $body."<p><b>Fecha Reserva:</b> " .$_POST['fechaReserva'] ."</p>" ;
    $body = $body.'<p  style="max-width: 350px"><b>Mensaje:</b> ' .$_POST['mensaje'] ."</p><br>" ;
    $body = $body."<p><b>Formulario Enviado el :</b> " .$date." a las ".$time."</p>" ;



    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->SMTPDebug = false;                                      //Disable DEBUG and STMP MESSAGES
        $mail->isSMTP();                                            //Send using SMTP

        $mail->Host       = 'smtp-mail.outlook.com';                 //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'fansmarketing16@outlook.es';            //SMTP username
        
        $mail->Password   = 'Medac2021';                               //SMTP password
        $mail->SMTPSecure = "tls";            //Enable implicit TLS encryption
        $mail->Port       = 587;                       //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
        //Recipients

        $mail->setFrom('fansmarketing16@outlook.es', 'CASA RURAL AIRE');
        
        $mail->addAddress('fansmarketing16@gmail.com');              


        //Content
        $mail->isHTML(true);                                  //Set email format to HTML

        $mail->Subject = 'CASA RURAL AIRE: CONTACTO/RESERVA ';

        
        
        $body = utf8_decode($body);
        $mail->Body    = $body;
        $mail->AltBody = $body;  //non-HTML mail clients

        $mail->send();
        //echo 'Message has been sent';
        header("location:" . "./result.php?status=success");
        exit;
    } catch (Exception $e) {
        //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        header("location:" . "./result.php");
        exit;
    }


?>