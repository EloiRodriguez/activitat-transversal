function validacionForm() {
    var dni=document.getElementById('dni').value;
    var nom=document.getElementById('nom').value;
    var cognom1=document.getElementById('cognom1').value;
    var cognom2=document.getElementById('cognom2').value;
    var data_naix=document.getElementById('data_naix').value;
    var sexe=document.getElementById('sexe').value;
    var edad=document.getElementById('edad').value;

    // alert (dni);
    // alert (nom);
    // alert (cognom1);
    // alert (cognom2);
    // alert (data_naix);
    // alert (sexe);
    // alert (edad);

    if (dni == "" || nom == "" || cognom1 == "" || cognom2 == "" || data_naix == "" || sexe == "" || edad == "") {

        if (dni == "") {
            //alert ("No se ha especificat ningun dni");
            document.getElementById('dni').style.border = "2px solid red";
        }else{
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            var numeracion = dni.slice(0, 8);
            
            if (!(numeracion < 0) || !(numeracion >= 99999999)) {
                var letraInicial = dni.charAt(8);
                var letraMayuscula = letraInicial.toUpperCase();
                alert (letraInicial);
                alert (letraMayuscula);

                if (letraInicial != letraMayuscula) {
                    document.getElementById('dni').style.border = "2px solid red";
                }else{
                    var letraFinal = numeracion % 23;
                    alert (letras[letraFinal])

                    if (letraInicial != letras[letraFinal]) {
                        document.getElementById('dni').style.border = "2px solid red"; 
                    }else{
                        document.getElementById('dni').style.border = "2px solid grey"; 
                    }
                } 
            }
        }
        
        if (nom == "") {
            //alert ("No se ha especificat ningun Nom");
            document.getElementById('nom').style.border = "2px solid red";
        }
        
        if (cognom1 == "") {
            //alert ("No se ha especificat el Primer Cognom");
            document.getElementById('cognom1').style.border = "2px solid red";
        }

        if (cognom2 == "") {
            //alert ("No se ha especificat el Segon Cognom");
            document.getElementById('cognom2').style.border = "2px solid red";
        }
        
        if (data_naix == "") {
            //alert ("No se ha especificat la data de naixement");
            document.getElementById('data_naix').style.border = "2px solid red";
        }
        
        if (sexe == "") {
            //alert ("No se ha especificat ningun sexe");
            document.getElementById('sexe').style.border = "2px solid red";
        }
        
        if (edad == "") {
            //alert ("No se ha especificado ningun valor");
            document.getElementById('edad').style.border = "2px solid red";
        }

        document.getElementById('mensaje').innerHTML="<p>No se ha especificat ningun valor</p>";
        document.getElementById('mensaje').style.color = "black"; document.getElementById('mensaje').style.backgroundColor = '#FA788D'; document.getElementById('mensaje').style.borderRadius = "4px"; document.getElementById('mensaje').style.padding = "0.5%";
        return false;

    }else{
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var numeracion = dni.slice(0, 8);
        
        if (!(numeracion < 0) || !(numeracion >= 99999999)) {
            var letraInicial = dni.charAt(8);
            var letraMayuscula = letraInicial.toUpperCase();
            alert (letraInicial);
            alert (letraMayuscula);

            if (letraInicial != letraMayuscula) {
                document.getElementById('dni').style.border = "2px solid red";
            }else{
                var letraFinal = numeracion % 23;
                alert (letras[letraFinal])

                if (letraInicial != letras[letraFinal]) {
                    document.getElementById('dni').style.border = "2px solid red"; 
                }else{
                    document.getElementById('dni').style.border = "2px solid grey"; 
                }
            } 
        }
        
        document.getElementById('nom').style.border = "2px solid grey";
        document.getElementById('cognom1').style.border = "2px solid grey";
        document.getElementById('cognom2').style.border = "2px solid grey";
        document.getElementById('data_naix').style.border = "2px solid grey";
        document.getElementById('sexe').style.border = "2px solid grey";
        document.getElementById('error').style.border = "2px solid grey";
        document.getElementById('error').style.border = "none";

        return true;
    }
}