<?php

    class Participant {
        private $id_part;
        private $nom_part;
        private $cognom_part;
        private $dni_part;
        private $data_naix;
        private $sexe;

        public function __construct($id_part,$nom_part,$cognom_part,$dni_part,$data_naix,$sexe)
        {
            $this->id_part=$id_part;
            $this->nom_part=$nom_part;
            $this->cognom_part=$cognom_part;
            $this->dni_part=$dni_part;
            $this->data_naix=$data_naix;
            $this->sexe=$sexe;
        }

        /**
         * Get the value of id_part
         */ 
        public function getId_part()
        {
                return $this->id_part;
        }

        /**
         * Set the value of id_part
         *
         * @return  self
         */ 
        public function setId_part($id_part)
        {
                $this->id_part = $id_part;

                return $this;
        }

        /**
         * Get the value of nom_part
         */ 
        public function getNom_part()
        {
                return $this->nom_part;
        }

        /**
         * Set the value of nom_part
         *
         * @return  self
         */ 
        public function setNom_part($nom_part)
        {
                $this->nom_part = $nom_part;

                return $this;
        }

        /**
         * Get the value of cognom_part
         */ 
        public function getCognom_part()
        {
                return $this->cognom_part;
        }

        /**
         * Set the value of cognom_part
         *
         * @return  self
         */ 
        public function setCognom_part($cognom_part)
        {
                $this->cognom_part = $cognom_part;

                return $this;
        }

        /**
         * Get the value of dni_part
         */ 
        public function getDni_part()
        {
                return $this->dni_part;
        }

        /**
         * Set the value of dni_part
         *
         * @return  self
         */ 
        public function setDni_part($dni_part)
        {
                $this->dni_part = $dni_part;

                return $this;
        }

        /**
         * Get the value of data_naix
         */ 
        public function getData_naix()
        {
                return $this->data_naix;
        }

        /**
         * Set the value of data_naix
         *
         * @return  self
         */ 
        public function setData_naix($data_naix)
        {
                $this->data_naix = $data_naix;

                return $this;
        }

        /**
         * Get the value of sexe
         */ 
        public function getSexe()
        {
                return $this->sexe;
        }

        /**
         * Set the value of sexe
         *
         * @return  self
         */ 
        public function setSexe($sexe)
        {
                $this->sexe = $sexe;

                return $this;
        }
    }