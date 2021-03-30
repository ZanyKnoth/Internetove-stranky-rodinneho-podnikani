<?php
  if($_POST['antispam'] != 10)
  {
    echo('<script type="text/javascript">alert("Anti-spam chybně vyplněn."); window.location.href = "http://localhost/ProMamku/index#Kontakty"; </script>');

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
      echo('<script type="text/javascript">alert("E-mail byl úspěšně odeslán. Za nějaký ten okamžik se Vám ozveme :)"); window.location.href = "http://localhost/ProMamku/index#Kontakty"; </script>');
      
    } else {
    
       echo('<script type="text/javascript">alert("Něco se pokazilo a e-mail nebyl odeslán. Zkuste to prosím znovu."); window.location.href = "http://localhost/ProMamku/index#Kontakty"; </script>');
       
    }
  }
?>                            