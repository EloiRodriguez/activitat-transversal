let validacion;

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
            validacion = 'false';
        } else {
            var letraFinal = numeracion % 23;
            //alert(letras[letraFinal]);

            if (letraInicial != letras[letraFinal]) {
                document.getElementById('dni').style.border = "2px solid red";
                validacion = 'false';
            } else {
                document.getElementById('dni').style.border = "2px solid green";
                validacion = 'true';
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
        alert(cat.value);
    } else if (edad >= 13 && edad <= 15) {
        cat.value = "Júnior";
        alert(cat.value);
    } else if (edad >= 16 && edad <= 25) {
        cat.value = "Elite";
        alert(cat.value);
    } else if (edad >= 26 && edad <= 50) {
        cat.value = "Veterano";
        alert(cat.value);
    } else if (edad >= 51 && edad <= 80) {
        cat.value = "Senior";
        alert(cat.value);
    } else {
        cat.placeholder = "Edad demasiado temprana o muy mayor";
        alert(cat.value);
    }

    document.getElementById('sexe').disabled = false;
}

function autorellenarSexo() {
    var categoria = document.getElementById('categoria');
    var mensaje_cat = document.getElementById('mensaje_cat');
    var cat_num = "";
    var sexo = document.getElementById('sexe').value;

    if (categoria.value == "Juvenil") {
        if (sexo == 'Masculino') {
            cat_num = 1;
            alert(sexo);
            mensaje_cat.innerText = "Juvenil: Masculina";
            categoria.value = cat_num;
            alert(categoria.value);

        } else if (sexo == 'Femenino') {
            cat_num = 2;
            alert(sexo);
            mensaje_cat.innerText = "Juvenil: Femenina";
            categoria.value = cat_num;
            alert(categoria.value);
        }
    } else if (categoria.value == "Júnior") {
        if (sexo == 'Masculino') {
            cat_num = 3;
            alert(sexo);
            mensaje_cat.innerText = "Júnior: Masculina";
            categoria.value = cat_num;
            alert(categoria.value);
        } else if (sexo == 'Femenino') {
            cat_num = 4;
            alert(sexo);
            mensaje_cat.innerText = "Júnior: Femenina";
            categoria.value = cat_num;
            alert(categoria.value);
        }
    } else if (categoria.value == "Elite") {
        if (sexo == 'Masculino') {
            cat_num = 5;
            alert(sexo);
            mensaje_cat.innerText = "Elite: Masculina";
            categoria.value = cat_num;
            alert(categoria.value);
        } else if (sexo == 'Femenino') {
            cat_num = 6;
            alert(sexo);
            mensaje_cat.innerText = "Elite: Femenina";
            categoria.value = cat_num;
            alert(categoria.value);
        }
    } else if (categoria.value == "Veterano") {
        if (sexo == 'Masculino') {
            cat_num = 7;
            alert(sexo);
            mensaje_cat.innerText = "Veterano: Masculina";
            categoria.value = cat_num;
            alert(categoria.value);
        } else if (sexo == 'Femenino') {
            cat_num = 8;
            alert(sexo);
            mensaje_cat.innerText = "Veterano: Femenina";
            categoria.value = cat_num;
            alert(categoria.value);
        }
    } else if (categoria.value == "Senior") {
        if (sexo == 'Masculino') {
            cat_num = 9;
            alert(sexo);
            mensaje_cat.innerText = "Senior: Masculina";
            categoria.value = cat_num;
            alert(categoria.value);
        } else if (sexo == 'Femenino') {
            cat_num = 10;
            alert(sexo);
            mensaje_cat.innerText = "Senior: Femenina";
            categoria.value = cat_num;
            alert(categoria.value);
        }
    }
    document.getElementById('invalidez').disabled = false;
}

function autorellenarInvalidez() {
    var categoria = document.getElementById('categoria');
    var invalidez = document.getElementById('invalidez').value;
    var cat_num = "";
    var sexo = document.getElementById('sexe').value;

    if (invalidez == "si") {
        if (sexo == 'Masculino') {
            cat_num = 11;
            mensaje_cat.innerText = "Discapacidad: Masculino";
            categoria.value = cat_num;
            alert(categoria.value);

        } else if (sexo == 'Femenino') {
            cat_num = 12;
            mensaje_cat.innerText = "Discapacidad: Femenino";
            categoria.value = cat_num;
            alert(categoria.value);
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
        if (validacion == 'false') {
            document.getElementById('mensaje').style.display = "inline";
            document.getElementById('mensaje').innerHTML = "<p>DNI incorrecto porfavor reescriva o cambie el DNI</p>";
            document.getElementById('mensaje').style.color = "black";
            document.getElementById('mensaje').style.backgroundColor = '#FA788D';
            document.getElementById('mensaje').style.borderRadius = "4px";
            document.getElementById('mensaje').style.padding = "0.5%";
            return false

        } else {
            return true;
        }

    }
}