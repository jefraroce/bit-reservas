const reserva = cargarReserva();
const optionCurrency = { style: "currency", currency: "cop" };
console.log();
const fotoPrincipalHotel = document.querySelector("#foto-principal");
//const fotoPreviaHotel = document.querySelector("#foto-previa");
const nombreHotel = document.querySelector("#nombre-hotel-cabecera");
const nombreHotelMedio = document.querySelector("#nombre-hotel-medio");
const ciudadHotel = document.querySelector("#ciudad-hotel");
const direccionHotel = document.querySelector("#direccion-hotel");
const caracteristicasHotel = document.querySelector("#iconos");
const descripcionHotel = document.querySelector("#descripcion-hotel");
const ciudadReserva = document.querySelector("#ciudad-reserva");
const numeroHuespedesReserva = document.querySelector("#numero-huespedes");
const diaLlegadaReserva = document.querySelector("#dia-llegada-reserva");
const diaSalidaReserva = document.querySelector("#dia-salida-reserva");
const numeroTotalDiasReserva = document.querySelector("#numero-total-dias");
const valorNocheReserva = document.querySelector("#valor-noche");
const valorTotalReserva = document.querySelector("#valor-total-estadia");

// ------------------------------------------------------------------------------------------OJO CAMBIAR
let indiceHotel = reserva.indiceHotelSeleccionado;
//---------------eliminar----------------
// var reserva = {
//   ciudad: "Bogotá",
//   numeroHuespedes: 2,
//   diaDeLlega: "2012-05-10",
//   diaDeIda: "2012-05-20",
//   numeroDiasEstadia: 10,
//   indiceHotelSeleccionado: 0,
//   valorNoche: 1000,
//   huspedes: [
//     {
//       tipoDeDocumento: "",
//       numeroDocumento: "",
//       nombres: "",
//       apellidos: "",
//     },
//     {
//       tipoDeDocumento: "",
//       numeroDocumento: "",
//       nombres: "",
//       apellidos: "",
//     },
//   ],
// };

//--------------------------

const hotel = HOTELES[indiceHotel]

fotoPrincipalHotel.style.backgroundImage = `url(${hotel.imagenPrincipal})`;
//fotoPreviaHotel.innerHTML = `<img src="${hotel.imagenVistaPrevia}" alt="" srcset=""></img>`;

nombreHotel.innerHTML = `${hotel.nombre}`;
nombreHotelMedio.innerHTML = `${hotel.nombre}`;
direccionHotel.innerHTML = `${hotel.direccion}`;
descripcionHotel.innerHTML = `${hotel.descripcion}`;

hotel.ciudades.forEach((elemento) => {
  ciudadHotel.innerHTML += `${elemento} | `;
});

hotel.caracteristicas.forEach((elemento) => {
  caracteristicasHotel.innerHTML += `<span class="bg-primary rounded-circle text-white m-1 p-3"><i class="${elemento.icono}"></i></span> `;
});

function cargarDescripcion(indice) {
  HOTELES[indice].caracteristicas.values;
}

//const reserva = cargarReserva();
if (reserva != undefined) {
  const valorTotal = hotel.precioPorNoche * reserva.numeroDiasEstadia;
  //ciudadReserva.innerHTML = `${reserva.ciudad}`;
  numeroHuespedesReserva.innerHTML = `${reserva.numeroHuespedes}`;
  diaLlegadaReserva.innerHTML = `${reserva.diaDeLlega}`;
  diaSalidaReserva.innerHTML = `${reserva.diaDeIda}`;
  valorNocheReserva.innerHTML = `${Intl.NumberFormat(
    "es-ES",
    optionCurrency
  ).format(hotel.precioPorNoche)}`;
  valorTotalReserva.innerHTML = `${Intl.NumberFormat(
    "es-ES",
    optionCurrency
  ).format(valorTotal)}`;
  numeroTotalDiasReserva.innerHTML = `${reserva.numeroDiasEstadia}`;
}

agregarOption("#ciudades");

///
