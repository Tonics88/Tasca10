function NouAlumne() {
    this.dni = $('#1').val();
    this.nom = $('#2').val();
    this.llinatges = $('#3').val();
    this.email = $('#4').val();
    this.nota = $('#5').val();
}

function crearFila(nou){
    fila="";
    for (i in nou){
        console.log(nou[i]);
        fila+="<td>"+nou[i]+"</td>";
    }
    return fila;
}

function dataActual(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //Gener es 0!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var mn = today.getMinutes();
    var ss = today.getSeconds();

    if(dd<10) {
        dd = '0'+dd;
    } 

    if(mm<10) {
        mm = '0'+mm;
    }

    if(hh<10) {
        hh = '0'+hh;
    }

    if(mn<10) {
        mn = '0'+mn;
    }

    if(ss<10) {
        ss = '0'+ss;
    }

    return (dd + '/' + mm + '/' + yyyy+" "+hh+":"+mn+":"+ss);
}

var alumnes=[];

$(document).ready(function(){
    $("button").click(function(){
        alumnes.push(new NouAlumne());
        
        for (i in alumnes){
            for (j in alumnes[i]){
                console.log(j+" de la possicio d'array "+ i+" : "+alumnes[i][j]);
            }
        }

        //$("table").append("<tr><td>"+alumnes[alumnes.length-1].dni+"</td></tr>");
        var fila = crearFila(alumnes[alumnes.length-1]);
        $("table").append("<tr>"+fila+"</tr>"); 

        $("#darrerModificat").text("Darrer alummne afegit: "+dataActual());
    });
});
