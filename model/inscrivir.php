<?php
    require_once 'participant.php';
    require_once 'participantDAO.php';

    $dni_part=$_POST['dni'];
    $nom_part=$_POST['nom'];
    $primer_cognom=$_POST['cognom1'];
    $segon_cognom=$_POST['cognom2'];
    $data_naix=$_POST['data_naix'];
    $sexe=$_POST['sexe'];
    $cat=$_POST['categoria'];
    echo $cat;

    $part = new Participant($dni_part,$nom_part,$primer_cognom,$segon_cognom,$data_naix,$sexe);
    $partDAO = new ParticipantDao();

    $partDAO->insertarParticipante($part,$cat);

    echo "<div style='text-align: center; width: 100vw; height: 100vh;'>";
    echo "<div>";
    echo "<h2>Inscripcion Realizada con exito</h2>";
    echo "<h3>Le esperamos en la Carrera</h3>";
    echo "<button style='width: 15%; height: 10%; background-color: green;'><a style='text-decoration: none; color: white; font-size: 13px;' href='../view/inscripcion.html'>Volver</a></button>";
    echo "</div>";
    echo "</div>";

    