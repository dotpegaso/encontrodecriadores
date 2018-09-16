<?php

if(isset($_FILES['anexo']))
{
  date_default_timezone_set("Brazil/East"); //Definindo timezone padrão

  $ext = strtolower(substr($_FILES['anexo']['name'],-4)); //Pegando extensão do arquivo
  $new_name = date("Y.m.d-H.i.s") . $ext; //Definindo um novo nome para o arquivo
  $dir = '../res/'; //Diretório para uploads

  move_uploaded_file($_FILES['anexo']['tmp_name'], $dir.$new_name); //Fazer upload do arquivo
}
   
$nome = $_POST['nome'];
$negocio = $_POST['negocio'];
$email = $_POST['email'];
$categoria = $_POST['categoria'];
$ideia = $_POST['ideia'];

require_once("../vendor/autoload.php");
require_once("../vendor/phpmailer/phpmailer/PHPMailerAutoload.php");

$mail = new PHPMailer;

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'criadoresart@gmail.com';                 // SMTP username
$mail->Password = 'qwe123qwe';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('criadoresart@gmail.com', 'Encontro de Criadores');
$mail->addAddress('encontrodecriadores.adm@gmail.com');
$mail->addReplyTo('contato@encontrodecriadores.art', 'Encontro de Criadores');

$mail->addAttachment($dir.$new_name); // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Novo cadastro para categoria ' . $categoria;
$mail->Body    = '<strong>Email para contato:</strong> ' . $email .'<br>'. '<strong>Nome do interessado:</strong> ' . $nome .'<br>'. '<strong>Atividade:</strong> ' . $negocio .'<br>'. '<strong>Ideia:</strong> ' . $ideia . '<br/>'. '<strong>Categoria:</strong> ' . $categoria . '<br>';


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

array_map('unlink', glob($dir.$new_name));