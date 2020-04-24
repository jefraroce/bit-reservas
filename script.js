

guardarLocalstorage();

function guardarLocalstorage(){

let informacion = {
  ciudad: document.querySelector('select#ciudades option'), 
  numeroHuespedes: document.querySelector ('input#inputPersonas') , 
  diaDeLlega: document.querySelector ('input#FechaLlegada'),  
  diaDeIda: document.querySelector ('input#inputFechaSalida') , 
  numeroDiasEstadia: diaDeIda - diaDeLlega 
}

console.log(informacion.option)



localStorage.setItem( "datosReserva",JSON.stringify(informacion) );

};







