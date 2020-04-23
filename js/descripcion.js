const fotoPrincipalHotel = document.querySelector("#foto-principal");
const fotoPreviaHotel = document.querySelector("#foto-previa");
const nombreHotel = document.querySelector("#nombre-hotel-cabecera");
const nombreHotelMedio = document.querySelector("#nombre-hotel-medio");
const ciudadHotel = document.querySelector("#ciudad-hotel");
const direccionHotel = document.querySelector("#direccion-hotel");
const caracteristicasHotel = document.querySelector("#iconos");
const descripcionHotel = document.querySelector("#descripcion-hotel");

// ------------------------------------------------------------------------------------------OJO CAMBIAR
let indiceHotel = 1; //reserva.indiceHotelSeleccionado

fotoPrincipalHotel.style.backgroundImage = `url(${HOTELES[indiceHotel].imagenPrincipal})`;
fotoPreviaHotel.innerHTML = `<img src="${HOTELES[indiceHotel].imagenVistaPrevia}" alt="" srcset=""></img>`;

nombreHotel.innerHTML = `${HOTELES[indiceHotel].nombre}`;
nombreHotelMedio.innerHTML = `${HOTELES[indiceHotel].nombre}`;
direccionHotel.innerHTML = `${HOTELES[indiceHotel].direccion}`;
descripcionHotel.innerHTML = `${HOTELES[indiceHotel].descripcion}`;

HOTELES[indiceHotel].ciudades.forEach((elemento) => {
  ciudadHotel.innerHTML += `${elemento} | `;
});

HOTELES[indiceHotel].caracteristicas.forEach((elemento) => {
  caracteristicasHotel.innerHTML += `<span class="bg-primary rounded-circle text-white m-1 p-3"><i class="${elemento.icono}"></i></span> `;
});

function cargarDescripcion(indice) {
  HOTELES[indice].caracteristicas.values;
}
