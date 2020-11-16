<?php

    class Participant {
        private $id_part;
        private $nom_part;
        private $primer_cognom;
        private $segon_cognom;
        private $dni_part;
        private $data_naix;
        private $sexe;

        public function __construct($dni_part,$nom_part,$primer_cognom,$segon_cognom,$data_naix,$sexe)
        {
            $this->nom_part=$nom_part;
            $this->primer_cognom=$primer_cognom;
            $this->segon_cognom=$segon_cognom;
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
         * Get the value of primer_cognom
         */ 
        public function getPrimer_cognom()
        {
                return $this->primer_cognom;
        }

        /**
         * Set the value of primer_cognom
         *
         * @return  self
         */ 
        public function setPrimer_cognom($primer_cognom)
        {
                $this->primer_cognom = $primer_cognom;

                return $this;
        }

        /**
         * Get the value of segon_cognom
         */ 
        public function getSegon_cognom()
        {
                return $this->segon_cognom;
        }

        /**
         * Set the value of segon_cognom
         *
         * @return  self
         */ 
        public function setSegon_cognom($segon_cognom)
        {
                $this->segon_cognom = $segon_cognom;

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