//<-------------------------------------------- Auditorios ------------------------------------------->

function traerInformacionAudience() {
    $.ajax({
        url: "http://localhost:8080/api/Audience/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table ID='AUDIENCE'>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].owner + "</td>";
        myTable += "<td>" + respuesta[i].capacity + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}


function guardarInformacionAudience() {
    let var1 = {
        name: $("#Bname").val(),
        owner: $("#Bowner").val(),
        capacity: $("#Bcapacity").val(),
        description: $("#Bdescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var1),

        url: "http://localhost:8080/api/Audience/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });

}



