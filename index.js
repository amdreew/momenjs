const moment = require('moment');

var fechaCrate = moment('2019-07-15T15:38:40.032Z', "YYYY-MM-DD HH:mm:ss");
ahora = moment(new Date());
var year = ahora.diff(fechaCrate, 'y');
var month = ahora.diff(fechaCrate, 'M');
var day = ahora.diff(fechaCrate, 'd');
var hours = ahora.diff(fechaCrate, 'h');
var minut = ahora.diff(fechaCrate, 'm');
var second = ahora.diff(fechaCrate, 's');

var fecha;

 //esto es cuando ha pasado años
 if (year > 0) {
    month = month % 12;
    if (year == 1 && month == 1) {
        fecha = `hace un Año y un Mes`;
    } else {
        if (year > 1 && month >= 0) {
            fecha `hace ${years} Años y ${month} Meses`;
        } else {
            if (year == 1 && month >= 0) {
                fecha = `hace un Año y ${month} Meses`;
            } else {
                if (year > 1 && month == 1) {
                    fecha = `hace ${year} Años y un Mes`;
                }
            }
        }
    }

}

 //esto es cuando ha pasado meses 
 if (year == 0 && month > 0) {
    if (month == 1) {
        fecha = `hace un mes`;
    } else {
        fecha = `hace ${month} meses`
    }
}

//esto es cuando han pasado dias               
if (year == 0 && month == 0 && day > 0) {
    hours = hours % 24;
    if (day == 1 && hours == 1) {
        fecha = `hace un dia y una hora`;

    } else {
        if (day > 1 && hours >= 0) {
            fecha = `hace ${day} dias y ${hours}`;
        } else {
            if (day > 1 && hours == 1) {
                fecha = `hace ${day} dias y una hora`;
            } else {
                if (day == 1 && hours >= 0) {
                    fecha = `hace un dia y ${hours} horas`
                }
            }
        }
    }
}
//cuando solo han pasado horas
if (year == 0 && month == 0 && day == 0 && hours > 0) {
    minut = minut % 60;
    if (hours == 1 && minut == 1) {
        fecha = `hace una hora y un minuto`;
    } else {
        if (hours == 1 && minut >= 0) {
            fecha `hace una hora y ${minut} minutos`
        } else {
            if (hours > 1 && minut == 1) {
                fecha `hace ${hours} horas y un minuto`;
            } else {
                if (hours > 1 && minut >= 0) {
                    fecha = `hace ${hours} horas y ${minut} minutos`;
                }
            }
        }
    }
}

if (year == 0 && month == 0 && day == 0 && hours == 0 && minut > 0 ) {
    if(minut == 1){
        fecha = `hace un minuto`;
    }else{
        fecha = `hace ${minut} minutos`;
    }
}

if (year == 0 && month == 0 && day == 0 && hours == 0 && minut == 0 && second > 0 ) {
    if(second >= 0 & second <= 30){
        fecha = `justo ahora`;
    }else{
        if(second > 30){
            fecha = `hace ${second} segundos`
        }
    }
}

console.log(fecha);

