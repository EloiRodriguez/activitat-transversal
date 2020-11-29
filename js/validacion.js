window.onload = function() {
    var dni = document.getElementsByClassName('validar')[0];
    var fecha = document.getElementById('data_naix');
    var sexo = document.getElementById('sexe');
    var invalidez = document.getElementById('invalidez');
    dni.addEventListener("focusout", validarDNI);
    fecha.addEventListener("focusout", autorellenarCategoria);
    sexo.addEventListener("focusout", autorellenarSexo);
    invalidez.addEventListener("focusout", autorellenarInvalidez);
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

function autorellenarCategoria() {
    var fecha = document.getElementById('data_naix').value;
    var any = fecha.slice(0, 4);
    var anyo_actual = new Date().getFullYear();
    var edad = anyo_actual - any;
    var cat = document.getElementById('categoria');

    if (edad >= 8 && edad <= 12) {
        cat.value = "Juvenil";
    } else if (edad >= 13 && edad <= 15) {
        cat.value = "Júnior";
    } else if (edad >= 16 && edad <= 25) {
        cat.value = "Elite";
    } else if (edad >= 26 && edad <= 50) {
        cat.value = "Veterano";
    } else if (edad >= 51 && edad <= 80) {
        cat.value = "Senior";
    } else {
        cat.value = "Edad demasiado temprana";
    }
}

function autorellenarSexo() {
    var categoria = document.getElementById('categoria');
    var cat_num = "";
    var sexo = addEventListener("focusout", autorellenarSexo);

    if (sexo == "Juvenil") {
        if (sexo == 'Masculino') {
            cat_num = 1;
            categoria.placeholder = "Juvenil: Masculina";
            categoria.value = cat_num;

        } else if (sexo == 'Femenino') {
            cat_num = 2;
            categoria.placeholder = "Juvenil: Femenina";
            categoria.value = cat_num;
        }
    } else if (sexo == "Juvenil") {
        if (sexo == 'Masculino') {
            cat_num = 3;
            categoria.placeholder = "Júnior: Masculina";
            categoria.value = cat_num;
        } else if (sexo == 'Femenino') {
            cat_num = 4;
            categoria.placeholder = "Júnior: Femenina";
            categoria.value = cat_num;
        }
    } else if (sexo == "Juvenil") {
        if (sexo == 'Masculino') {
            cat_num = 5;
            categoria.placeholder = "Elite: Masculina";
            categoria.value = cat_num;
        } else if (sexo == 'Femenino') {
            cat = 6;
            categoria.placeholder = "Elite: Femenina";
            categoria.value = cat_num;
        }
    } else if (sexo == "Juvenil") {
        if (sexo == 'Masculino') {
            cat_num = 7;
            categoria.value = "Veterano: Masculina";
            categoria.value = cat_num;
        } else if (sexo == 'Femenino') {
            cat = 8;
            categoria.value = "Veterano: Femenina";
            categoria.value = cat_num;
        }
    } else if (sexo == "Juvenil") {
        if (sexo == 'Masculino') {
            cat_num = 9;
            categoria.value = "Senior: Masculina";
            categoria.value = cat_num;
        } else if (sexo == 'Femenino') {
            cat_num = 10;
            categoria.value = "Senior: Femenina";
            categoria.value = cat_num;
        }
    }
}

function autorellenarInvalidez() {
    var invalidez = document.getElementById('invalidez').value;
    var sexo = document.getElementById('sexe').value;

    if (invalidez == "si") {
        if (sexo == 'Masculino') {
            cat_num = 11;
            categoria.placeholder = "Discapacidad: Masculino";
            categoria.value = cat_num;

        } else if (sexo == 'Femenino') {
            cat_num = 12;
            categoria.placeholder = "Discapacidad: Femenino";
            categoria.value = cat_num;
        }
    }
}

function validacionForm() {
    var validados = document.getElementsByClassName('validar');
    let valor = "";
    for (let i = 0; i < validados.length; i++) {
        console.log(validados[i]);

        if (validados[i].value == '') {
            validados[i].style.borderColor = 'red';
            if (valor != "false") {
                valor = "false";
            }
        } else {
            validados[i].style.borderColor = 'transparent';
        }
    }
    if (valor == "false") {
        document.getElementById('mensaje').style.display = "inline";
        document.getElementById('mensaje').innerHTML = "<p>No se ha especificat algun valor</p>";
        document.getElementById('mensaje').style.color = "black";
        document.getElementById('mensaje').style.backgroundColor = '#FA788D';
        document.getElementById('mensaje').style.borderRadius = "4px";
        document.getElementById('mensaje').style.padding = "0.5%";
        return false;
    } else {
        return true;
    }
}