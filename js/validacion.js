function validacionForm() {

}

function validarFor() {
    //alert('hola')

    /**
     * Primera Forma
     */

    // var inputs = document.getElementsByTagName("input");

    // for (let i = 0; i < inputs.length; i++) {
    //     if (inputs[i].type == 'text' || inputs[i].type == 'date' || inputs[i].type == 'email') {

    //         if (inputs[i].type == 'text' && inputs[i].value == '') {
    //             inputs[i].style.borderColor = 'red';
    //         } else {
    //             inputs[i].style.borderColor = 'none';
    //         }

    //         if (inputs[i].type == 'date' && inputs[i].value == '') {
    //             inputs[i].style.borderColor = 'red';
    //         } else {
    //             inputs[i].style.borderColor = 'none';
    //         }

    //         if (inputs[i].type == 'email' && inputs[i].value == '') {
    //             inputs[i].style.borderColor = 'red';
    //         } else {
    //             inputs[i].style.borderColor = 'none';
    //         }
    //     }
    // }

    // var sexe = document.getElementById('sexe');

    // if (sexe.value == '') {
    //     sexe.style.borderColor = 'red';
    // } else {
    //     sexe.style.borderColor = 'none';
    // }

    // var edad = document.getElementById('edad');

    // if (edad.value == '') {
    //     edad.style.borderColor = 'red';
    // } else {
    //     edad.style.borderColor = 'none';
    // }

    /**
     * Segunda Forma
     */

    var validados = document.getElementsByClassName('validar');
    for (let i = 0; i < validados.length; i++) {
        if (validados[i].value == '') {
            validados[i].style.borderColor = 'red';
        } else {
            validados[i].style.borderColor = 'none';
        }
    }
    return false;
}