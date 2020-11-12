CREATE DATABASE bd_cursa;

USE bd_cursa;

CREATE TABLE tbl_participante(
    id_part INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_part VARCHAR(50) NOT NULL,
    cognom_part VARCHAR(50) NOT NULL,
    DNI_part VARCHAR(9) NOT NULL,
    data_naix_part DATE,
    sexe ENUM('Masculino', 'Femenino') NOT NULL
);

CREATE TABLE tbl_inscripcio(
    id_dorsal INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cursa INT(10) NOT NULL,
    id_part INT(10) NOT NULL,
    pagat ENUM('Pagado','Pendiente') NOT NULL,
    id_cat INT(10) NULL
);

CREATE TABLE tbl_cursa(
    id_cursa INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_cursa DATE NOT NULL
);

CREATE TABLE tbl_categoria(
    id_cat INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_cat VARCHAR(50) NOT NULL
);

CREATE TABLE tbl_usuario(
    id_usu INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email_usu VARCHAR(50) NOT NULL,
    pwd_usu VARCHAR(50) NOT NULL
);


ALTER TABLE tbl_inscripcio
ADD CONSTRAINT FK_inscripcio_cursa FOREIGN KEY (id_cursa)
REFERENCES tbl_cursa (id_cursa);

ALTER TABLE tbl_inscripcio
ADD CONSTRAINT FK_inscripcio_participante FOREIGN KEY (id_part)
REFERENCES tbl_participante (id_part);

ALTER TABLE tbl_inscripcio
ADD CONSTRAINT FK_inscripcio_categoria FOREIGN KEY (id_cat)
REFERENCES tbl_categoria (id_cat);

INSERT INTO tbl_categoria (nom_cat) 
VALUES  ('Juvenil: Masculina'),
        ('Juvenil: Femenina'),
        ('Júnior: Masculina'),
        ('Júnior: Femenina'),
        ('Elite: Masculina'),
        ('Elite: Femenina'),
        ('Veterano: Masculina'),
        ('Veterano: Femenina');


INSERT INTO tbl_usuario (email_usu,pwd_usu) VALUES  ('administrador@admin.com',' 827ccb0eea8a706c4c34a16891f84e7b');
