//<-------------------------------------------- Auditorios ------------------------------------------->

function traerInformacionAudience() {
    $.ajax({
        url: "http://localhost:8080/api/Audience/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta1) {
            console.log(respuesta1);
            pintarRespuesta1(respuesta1);
        }
    });
}

function pintarRespuesta1(respuesta1) {

    let myTable = "<table>";

    myTable += "<tr>";
    myTable += "<th>" + "NAME" + "</th>";
    myTable += "<th>" + "OWNER" + "</th>";
    myTable += "<th>" + "CAPACITY" + "</th>";
    myTable += "<th>" + "DESCRIPTION" + "</th>";
    myTable += "</tr>";

    for (i = 0; i < respuesta1.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta1[i].name + "</td>";
        myTable += "<td>" + respuesta1[i].owner + "</td>";
        myTable += "<td>" + respuesta1[i].capacity + "</td>";
        myTable += "<td>" + respuesta1[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
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
        success: function (response1) {
            console.log(response1);
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


//<-------------------------------------------- Categorias ------------------------------------------->
function traerInformacionCategorias() {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta0) {
            console.log(respuesta0);
            pintarRespuesta0(respuesta0);
        }
    });
}

function pintarRespuesta0(respuesta0) {

    let myTable = "<table>";

    myTable += "<tr>";
    myTable += "<th>" + "NAME" + "</th>";
    myTable += "<th>" + "DESCRIPTION" + "</th>";
    myTable += "</tr>";

    for (i = 0; i < respuesta0.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta0[i].name + "</td>";
        myTable += "<td>" + respuesta0[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}


function guardarInformacionCategorias() {
    let var0 = {
        name: $("#Cname").val(),
        description: $("#Cdescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var0),

        url: "http://localhost:8080/api/Category/save",
        success: function (response0) {
            console.log(response0);
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

//<-------------------------------------------- Clientes ------------------------------------------->

function traerInformacionClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta2) {
            console.log(respuesta2);
            pintarRespuesta2(respuesta2);
        }
    });
}

function pintarRespuesta2(respuesta2) {

    let myTable = "<table>";

    myTable += "<tr>";
    myTable += "<th>" + "EMAIL" + "</th>";
    myTable += "<th>" + "PASSWORD" + "</th>";
    myTable += "<th>" + "NAME" + "</th>";
    myTable += "<th>" + "AGE" + "</th>";
    myTable += "</tr>";

    for (i = 0; i < respuesta2.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta2[i].email + "</td>";
        myTable += "<td>" + respuesta2[i].password + "</td>";
        myTable += "<td>" + respuesta2[i].name + "</td>";
        myTable += "<td>" + respuesta2[i].age + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}


function guardarInformacionClientes() {
    let var2 = {
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://localhost:8080/api/Client/save",
        success: function (response2) {
            console.log(response2);
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

//<-------------------------------------------- Mensajes ------------------------------------------->

function traerInformacionMensajes() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta4) {
            console.log(respuesta4);
            pintarRespuesta4(respuesta4);
        }
    });
}

function pintarRespuesta4(respuesta4) {

    let myTable = "<table>";

    myTable += "<tr>";
    myTable += "<th>" + "MENSAGGE" + "</th>";
    myTable += "</tr>";


    for (i = 0; i < respuesta4.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta4[i].messageText + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}


function guardarInformacionMensajes() {
    let var4 = {
        messageText: $("#messageText").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://localhost:8080/api/Message/save",
        success: function (response4) {
            console.log(response4);
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

//<-------------------------------------------- Reservaciones ------------------------------------------->

function traerInformacionReservaciones() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta3) {
            console.log(respuesta3);
            pintarRespuesta3(respuesta3);
        }
    });
}

function pintarRespuesta3(respuesta3) {

    let myTable = "<table>";

    myTable += "<tr>";
    myTable += "<th>" + "STARDATE" + "</th>";
    myTable += "<th>" + "DEVOLUTION DATE" + "</th>";
    myTable += "<th>" + "CREATED" + "</th>";
    myTable += "</tr>";


    for (i = 0; i < respuesta3.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta3[i].startDate + "</td>";
        myTable += "<td>" + respuesta3[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta3[i].created + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}


function guardarInformacionReservaciones() {
    let var3 = {
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
        created: $("#Rcreated").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),

        url: "http://localhost:8080/api/Reservation/save",
        success: function (response3) {
            console.log(response3);
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

