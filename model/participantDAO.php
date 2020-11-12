<?php

    require_once 'participant.php';
    class ParticipantDao {
        private $pdo;

        public function __construct()
        {
            require_once 'connexion.php';
            $this->pdo=$pdo;
        }

        public function insertarParticipante($participante){
            
            try {
                $this->pdo->beginTransaction();

                $query="INSERT INTO `tbl_participante` (`id_part`, `nom_part`, `cognom_part`, `DNI_part`, `data_naix_part`, `sexe`) VALUES (NULL, ?, ?, ?, ?, ?);";
                $nom_part=$participante->getNom_part();
                $cognom_part=$participante->getCognom_part();
                $dni_part=$participante->getDni_part();
                $data_naix=$participante->getData_naix();
                $sexe=$participante->getSexe();
                
                $sentencia=$this->pdo->prepare($query);
                $sentencia->bindParam(1,$nom_part);
                $sentencia->bindParam(2,$cognom_part);
                $sentencia->bindParam(3,$dni_part);
                $sentencia->bindParam(4,$data_naix);
                $sentencia->bindParam(5,$sexe);
                $sentencia->execute();

                $this->pdo->commit();

            } catch (PDOException $ex) {

                echo $ex->getMessage();
            }
            

            
        }
    }