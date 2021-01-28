function textTime(time) {

    let numDiaSem = time.getDay();


    let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    let diaLetras = diasSemana[time.getDay()];


    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let mesLetras = meses[time.getMonth()];

    let diaMes = (time.getDate());
    let anho = time.getFullYear();
    let hora = time.getHours();
    let min = time.getMinutes();

    if ((min >= 0) && (min < 10)) { //añadde un cero cuando los minutostienen 1 dígito.
        min = "0" + min;
    }

    let devolver = "Hoy es " + diaLetras + ", " + diaMes + " de " + mesLetras + " de " + anho + " y son las " + hora + ":" + min + " horas.";
    return devolver;
}

let time = new Date();
date.innerHTML = textTime(time);