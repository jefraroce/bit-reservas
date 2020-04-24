var reserva 
reserva = cargarReserva() 
agregarOption('#ciudades')
console.log(cargarReserva().ciudad)

//--------------Funcion Filtrar hoteles por Ciudad-------//


let sugerenciasHoteles = document.querySelector("main.hoteles-disponibles")


function ValoresAgregados () {

  var formulario = document.querySelector("#huesped")
  formulario.querySelector("#ciudades").placeholder = reserva.ciudad;
  formulario.querySelector("#inputFechaLlegada").value = reserva.diaDeLlega;
  formulario.querySelector("#inputFechaSalida").value = reserva.diaDeIda;
  formulario.querySelector("#inputPersonas").value = reserva.numeroHuespedes;

}

ValoresAgregados()

function imprimirCaracteristicas(h){
  var lista = ""
  h.forEach(caracteristica => {
    lista += `<li><i class="${caracteristica.icono}"></i>&nbsp;
    ${caracteristica.nombre}</li>`
    console.log(lista)
  })
  return lista 
  ;
}

function EncontrarIndexHotel(x){
reserva.indiceHotelSeleccionado = x
  localStorage.setItem("reserva",JSON.stringify(reserva))
  location.href="hotel-review.html"
 
}


function filtrarHoteles () {
  for (i=0 ;i < HOTELES.length; i++){
    for (x=0; x < HOTELES[i].ciudades.length; x++){
      var ciudadEvaluada = HOTELES[i].ciudades[x]
      if(reserva.ciudad == ciudadEvaluada){
        sugerenciasHoteles.innerHTML += `<div class=" row no-gutters border rounded overflow-hidden flex-md-row mt-10 mb-4 shadow-sm h-md-250 position-relative  d-flex align-items-center opcion">
        <div class="col-4">
            <img src="${HOTELES[i].imagenVistaPrevia}" alt="" class="img-preview w-100">
        </div>
        <div class="col-5 p-2">
            <h1 class="text-uppercase nombre-hotel text-primary">${HOTELES[i].nombre}</h1>
            <h4 class="ubicacion text-secondary">${HOTELES[i].direccion} | ${HOTELES[i].ciudades[x]} | ${HOTELES[i].pais} </h4>
            <p class="d-none d-lg-block d-lg-block descripcion">${HOTELES[i].descripcion}</p> 

            <ul class="lista-caracteristicas list-group list-group-horizontal-md">
            ${imprimirCaracteristicas(HOTELES[i].caracteristicas)}
            </ul>
        </div>
        
        <div class="col-3 text-right p-2">
            <p>Precio por noche</p>
            <h1 class="precio-noche">$ ${HOTELES[i].precioPorPersona.toLocaleString('de-DE')}</h1>
            <button onclick="EncontrarIndexHotel(${i})" type=" button" class="w-80 btn-reservar btn btn-success">Reservar</button>
        </div>
    </div>`
      }
    }
  }
}

filtrarHoteles ()

