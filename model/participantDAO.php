<?php

    require_once 'participant.php';
    class ParticipantDao {
        private $pdo;

        public function __construct()
        {
            require_once 'connexion.php';
            $this->pdo=$pdo;
        }

        public function insertarParticipante($participante,$cat){

            try {
                $this->pdo->beginTransaction();

                //Crear Participante
                $query="INSERT INTO `tbl_participante` (`id_part`, `nom_part`, `primer_cognom`, `segon_cognom`, `DNI_part`, `data_naix_part`, `sexe`) VALUES (NULL, ?, ?, ?, ?, ?, ?);";
                $nom_part=$participante->getNom_part();
                $primer_cognom=$participante->getPrimer_cognom();
                $segon_cognom=$participante->getSegon_cognom();
                $dni_part=$participante->getDni_part();
                $data_naix=$participante->getData_naix();
                $sexe=$participante->getSexe();

                $sentencia=$this->pdo->prepare($query);
                $sentencia->bindParam(1,$nom_part);
                $sentencia->bindParam(2,$primer_cognom);
                $sentencia->bindParam(3,$segon_cognom);
                $sentencia->bindParam(4,$dni_part);
                $sentencia->bindParam(5,$data_naix);
                $sentencia->bindParam(6,$sexe);
                $sentencia->execute();

                $id_part =$this->pdo->lastInsertId();

                
                //Cursa que se realiza
                // $cursa_actual=$this->pdo->prepare("SELECT MAX(id_cursa) FROM tbl_cursa;");
                // $cursa_actual->execute();
                // $cursa=$cursa_actual->fetch(PDO::FETCH_ASSOC);
                // echo $cursa;
                $cursa= 1;

                //Insertar datos de la inscripcion
                $query="INSERT INTO `tbl_inscripcio` (`id_dorsal`, `id_cursa`, `id_part`, `pagat`, `id_cat`) VALUES (NULL, ?, ?, `pagat`, ?);";
                $sentencia=$this->pdo->prepare($query);
                $sentencia->bindParam(1,$cursa);
                $sentencia->bindParam(2,$id_part);
                $sentencia->bindParam(3,$cat);
                $sentencia->execute();


                $this->pdo->commit();

            } catch (PDOException $ex) {
                $error= $ex->getMessage();
                header('Location:incrivir.php?{$error}');
            }
            
        }
    }