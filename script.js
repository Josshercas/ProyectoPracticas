let respuestaComida = '';
let respuestaFecha = '';
let respuestaHora = '';
let respuestaLugar = '';

function procesarRespuesta(respuesta) {
    const pregunta = document.getElementById("pregunta");
    const opciones = document.getElementById("opciones");
    
    if (respuesta === "no") {
        pregunta.innerHTML = "No acepto que me digas que no. ¿Otra vez, quieres luchar por mi amor?";
    } else {
        pregunta.innerHTML = "¿Prefieres celebrarlo el viernes 14 o el sábado 15?";
        opciones.innerHTML = `
            <button onclick="elegirFecha('14')">Viernes 14</button>
            <button onclick="elegirFecha('15')">Sábado 15</button>
        `;
    }
}

function elegirFecha(dia) {
    const pregunta = document.getElementById("pregunta");
    const opciones = document.getElementById("opciones");
    respuestaFecha = dia;

    if (dia === "14") {
        pregunta.innerHTML = "¿Prefieres desayuno, comida o cena?";
        opciones.innerHTML = `
            <button onclick="elegirComida('desayuno')">Desayuno</button>
            <button onclick="elegirComida('comida')">Comida</button>
            <button onclick="elegirComida('cena')">Cena</button>
        `;
    } else {
        pregunta.innerHTML = "¿Prefieres comida o cena?";
        opciones.innerHTML = `
            <button onclick="elegirComida('comida')">Comida</button>
            <button onclick="elegirComida('cena')">Cena</button>
        `;
    }
}

function elegirComida(tipo) {
    const pregunta = document.getElementById("pregunta");
    const opciones = document.getElementById("opciones");
    respuestaComida = tipo;

    let botonesRestaurante = "";
    if (tipo === "desayuno") {
        botonesRestaurante = `
            <button onclick="pedirHora('Toks')">Toks</button>
            <button onclick="pedirHora('Tazcal')">Tazcal</button>
            <button onclick="pedirHora('Plazita')">Plazita</button>
        `;
    } else if (tipo === "comida") {
        botonesRestaurante = `
            <button onclick="pedirHora('Enchiladas La Tía')">Enchiladas La Tía</button>
            <button onclick="pedirHora('Picnic Bonito')">Picnic Bonito</button>
            <button onclick="pedirHora('Tazcal')">Tazcal</button>
        `;
    } else {
        botonesRestaurante = `
            <button onclick="pedirHora('Nolita')">Nolita</button>
            <button onclick="pedirHora('Sorpresa')">Sorpresa</button>
            <button onclick="pedirHora('Cenarnos')">Cenarnos</button>
        `;
    }

    pregunta.innerHTML = `Opciones para ${tipo}:`;
    opciones.innerHTML = botonesRestaurante;
}

function pedirHora(restaurante) {
    const pregunta = document.getElementById("pregunta");
    const opciones = document.getElementById("opciones");
    respuestaLugar = restaurante;

    pregunta.innerHTML = "¿A qué hora te gustaría que nos viéramos?";
    opciones.innerHTML = `
        <button onclick="mostrarResumen('1:00 PM')">1:00 PM</button>
        <button onclick="mostrarResumen('4:00 PM')">4:00 PM</button>
        <button onclick="mostrarResumen('8:00 PM')">8:00 PM</button>
    `;
}

function mostrarResumen(hora) {
    respuestaHora = hora;

    const contenedor = document.getElementById("contenedor");
    const resumen = document.getElementById("resumen");
    const detalle = document.getElementById("detalle");

    contenedor.style.display = "none";
    resumen.style.display = "block";
    detalle.innerHTML = `
        Tu cita será para el ${respuestaFecha} a las ${respuestaHora} en ${respuestaLugar}. 
        ¡Nos vemos ahí! <br>
        Aquí está el enlace al lugar: <a href="${obtenerEnlace(respuestaLugar)}" target="_blank">${respuestaLugar}</a>
    `;
}

function obtenerEnlace(lugar) {
    switch (lugar) {
        case "Toks": return "https://g.co/kgs/KBnqNT7";
        case "Tazcal": return "https://maps.app.goo.gl/FM6iGsFjCWN81pzK9";
        case "Plazita": return "https://g.co/kgs/foYFLrp";
        case "Enchiladas La Tía": return "https://g.co/kgs/XDyMVke";
        case "Picnic Bonito": return "https://g.co/kgs/hwhfMwq";
        case "Nolita": return "https://g.co/kgs/AVXUS2b";
        case "Sorpresa": return "https://g.co/kgs/vYoHyQ3";
        case "Cenarnos": return "https://www.google.com/travel/hotels/s/Art6Jqu9UT2vbH9Y9";
        default: return "#";
    }
}

function reiniciarEncuesta() {
    location.reload();
}
