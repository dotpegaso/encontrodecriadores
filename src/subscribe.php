<?php

// Adiciona um email X em uma lista de email Y do MailChimp

$data = [
    'email'     => $_POST['email'], // recebe o email
    'status'    => 'subscribed' // possíveis status: subscribed, unsubscribed, cleaned, pending
];

syncMailchimp($data);

function syncMailchimp($data) {
    $apiKey = '742f8e45abcdcd25b9d8299ae54adc3e-us16';
    $listId = 'e8fdb4a991'; // id da lista que deverá receber o email

    $memberId = md5(strtolower($data['email']));
    $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

    $json = json_encode([
        'email_address' => $data['email'],
        'status'        => $data['status'] 
        // referência completa: http://developer.mailchimp.com/documentation/mailchimp/reference/lists/members
    ]);

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);                                                                                                                 

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $result_json = json_decode($result);
    
    if($result_json->status == 400){
        echo "false";
    }else{
        echo "true";
    }
    
}

?>