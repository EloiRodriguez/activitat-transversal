window.onload = function() {
    var dni = document.getElementsByClassName('validar')[0];
    var edad = document.getElementsByClassName('validar')[7];
    dni.addEventListener("focusout", validarDNI);
    edad.addEventListener("focusout", autorellenarEdad);

}

function validarDNI() {

    var dni = document.getElementsByClassName('validar')[0].value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (!(numeracion < 0) || !(numeracion >= 99999999)) {
        var numeracion = dni.slice(0, 8);
        var letraInicial = dni.charAt(8);
        var letraMayuscula = letraInicial.toUpperCase();

        if (letraInicial != letraMayuscula) {
            document.getElementById('dni').style.border = "2px solid red";
        } else {
            var letraFinal = numeracion % 23;
            //alert(letras[letraFinal]);

            if (letraInicial != letras[letraFinal]) {
                document.getElementById('dni').style.border = "2px solid red";
            } else {
                document.getElementById('dni').style.border = "2px solid green";
            }
        }
    }
}

function autorellenarEdad() {
    var edad = document.getElementsByClassName('validar')[7].value;
    var sexo = document.getElementById(sexe).value;

    if (sexo == "") {
        document.getElementById('mensaje').innerHTML = "<p>No se ha especificado el sexo</p>";
        document.getElementById('mensaje').style.color = "black";
        document.getElementById('mensaje').style.backgroundColor = '#FA788D';
        document.getElementById('mensaje').style.borderRadius = "4px";
        document.getElementById('mensaje').style.padding = "0.5%";
    } else {
        if (edad >= 8 && edad <= 12) {
            if (sexo == 'Masculino') {
                $cat = 1;
            } else if (sexo == 'Femenino') {
                $cat = 2;
            }
        } else if (edad >= 13 && edad <= 15) {
            if (sexo == 'Masculino') {
                $cat = 3;
            } else if (sexo == 'Femenino') {
                $cat = 4;
            }
        } else if (edad >= 16 && edad <= 25) {
            if (sexo == 'Masculino') {
                $cat = 5;
            } else if (sexo == 'Femenino') {
                $cat = 6;
            }
        } else if (edad >= 26 && edad <= 50) {
            if (sexo == 'Masculino') {
                $cat = 7;
            } else if (sexo == 'Femenino') {
                $cat = 8;
            }
        } else if (edad >= 51 && edad <= 80) {
            if (sexo == 'Masculino') {
                $cat = 9;
            } else if (sexo == 'Femenino') {
                $cat = 10;
            }
        }

        return $cat
    }
}


function validacionForm() {
    var validados = document.getElementsByClassName('validar');
    for (let i = 0; i < validados.length; i++) {
        console.log(validados[i].value);
        let valor = "";
        if (validados[i].value == '') {
            validados[i].style.borderColor = 'red';
            valor = "false";
        } else {
            validados[i].style.borderColor = '#DCDCDC';
        }

        if (valor == "") {
            return true;
        } else {
            return false;
        }
    }
}