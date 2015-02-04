<?php

// Get values from form
$name=$_POST['Name'];
$email=$_POST['Email'];
$text=$_POST['Text'];
$to = 'c040120@gmail.com';
$subject = "Sent from my Personal Website";
$message = " Name: " . $name . "\r\n Email: " . $email . "\r\n Text: " . $text;

if(mail($to,$subject,$message))
{
	echo "<script type=\"text/javascript\">".
        "alert('success');".
        "</script>";
// Created by Future Tutorials
}else{
	echo '<p>Error! Please try again.</p>;
}	
?>
