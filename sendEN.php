<?php
  if($_POST['antispam'] != 10)
  {
    echo('<script type="text/javascript">alert("Anti-spam is not correct."); window.location.href = "http://localhost/ProMamku/indexEN#Contacts"; </script>');

  } else { 
      
    $jmenoOdesilatele = $_POST['names']; 
    $odesilatel = $_POST['email']; 
    $telefonOdesilatele = $_POST['phone'];
    $zprava = $_POST['message'];
    $zprava = wordwrap($zprava, 70);
    $zprava = str_replace(array(">", "<", "&"), array("&gt;", "&lt;", "&amp;"), $zprava);

    $prijemce = 'ilad@atlas.cz';
   
    $hlavicka = "Content-Type: text/html; charset=UTF-8\n";
    $hlavicka .= "From: " .$odesilatel;
    $predmetEmailu = "E-mail z internetovych stranek www.svatebniporadenstviknoth.cz";
    $teloEmailu = "Jméno odesílatele: $jmenoOdesilatele <br /> Telefonní číslo: $telefonOdesilatele <br /> Zpráva: $zprava";

    $uspech = mail($prijemce, $predmetEmailu, $teloEmailu, $hlavicka);
   
    if($uspech)
    {
      echo('<script type="text/javascript">alert("E-mail sent successfully. We will contact you in a while :)"); window.location.href = "http://localhost/ProMamku/indexEN#Contacts"; </script>');
      
    } else {
    
       echo('<script type="text/javascript">alert("An error occured during sending an e-mail. Please try it again."); window.location.href = "http://localhost/ProMamku/indexEN#Contacts"; </script>');
       
    }
  }
?>                            