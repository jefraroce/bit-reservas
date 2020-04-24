// CONSTANTES GLOBALES
const HOTELES = [
  {
    nombre: "Hotel Nutibara",
    direccion: "Calle 52A #50-46",
    ciudades: ["Bogota D.C.", "Ibagué", "Barranquilla"],
    pais: "Colombia",
    descripcion:
      "Hotel Nutibara es un hotel de negocios amigable con el medio ambiente ubicado en el centro histórico de la ciudad de Medellín. Este tradicional hotel está ubicado frente a la Plaza de Las Esculturas, el Museo de Antioquia y del Palacio de la Cultura Rafael Uribe Uribe a 300 metros de la Estación Parque Berrío.",
    precioPorPersona: 130000,
    promocion: true,
    imagenVistaPrevia: "../img/hotelNutivaraVistaPrevia.JPG", // 300px x 300px
    imagenPrincipal: "../img/hotelNutivaraPrincipal.JPG", // 1280px x 400px
    caracteristicas: [
      {
        nombre: "wifi",
        icono: "fas fa-wifi",
      },
      {
        nombre: "piscina",
        icono: "fas fa-swimming-pool",
      },
      {
        nombre: "desayuno",
        icono: "fas fa-coffee",
      },
      {
        nombre: "transporte",
        icono: "fas fa-bus",
      },
    ],
  },
  {
    nombre: "Las Americas Casa de Playa",
    direccion: "Anillo Vial, Sector Cielo Mar",
    ciudades: ["Cartagena de Indias", "Barranquilla"],
    pais: "Colombia",
    descripcion:
      "Las Américas Casa de Playa ofrece un refugio tropical frente al mar Caribe, al norte de Cartagena de Indias. Este hotel de playa posee tres piscinas, incluyendo una con tobogán y otra para niños, golfito, dos canchas de tenis y club de niños.",
    precioPorPersona: 250000,
    promocion: true,
    imagenVistaPrevia: "../img/hotelLasAmericasVistaPrevia.jpg", // 300px x 300px
    imagenPrincipal: "../img/hotelLasAmericasPrincipal.JPG", // 1280px x 400px
    caracteristicas: [
      {
        nombre: "wifi",
        icono: "fas fa-wifi",
      },
      {
        nombre: "piscina",
        icono: "fas fa-swimming-pool",
      },
      {
        nombre: "desayuno",
        icono: "fas fa-coffee",
      },
      {
        nombre: "transporte",
        icono: "fas fa-bus",
      },
    ],
  },
  {
    nombre: "Macondo guest house",
    direccion: "Tv. 5a ## 45 - 104",
    ciudades: ["Cali", "Ibagué", "Cucuta"],
    pais: "Colombia",
    descripcion:
      "Macondo guest house es un espacio pensado especialmente para los viajeros del exterior, que buscan un lugar con muchas comodidades a un o precio económico, Aquí encontrara áreas para el descanso, la socialización y el total disfrute de tu estadía en la ciudad de Medellín.",
    precioPorPersona: 120000,
    promocion: false,
    imagenVistaPrevia: "../img/macondo-medellin-small.webp", // 300px x 300px
    imagenPrincipal: "../img/macondo-medellin-big.webp", // 1280px x 400px
    caracteristicas: [
      { nombre: "wifi", icono: "fas fa-wifi" },
      { nombre: "desayuno", icono: "fas fa-coffee" },
      { nombre: "transporte", icono: "fas fa-car" },
    ],
  },
  {
    nombre: "GASTON COLIVING",
    direccion: "Carrera 83 # 46-35",
    ciudades: ["Medellin", "Tunja"],
    pais: "Colombia",
    descripcion:
      "A common space created for travelers experiences in Medellín, Colombia / Un espacio común creado para las experiencias de ciudad de los viajeros en Medellín, Colombia🌍 Gastón es un nuevo espacio para vivir y trabajar de una forma poco convencional en Medellín.",
    precioPorPersona: 90000,
    promocion: true,
    imagenVistaPrevia: "../img/GASTON-SMALL.webp", // 300px x 300px
    imagenPrincipal: "../img/GASTON-BIG.webp", // 1280px x 400px
    caracteristicas: [
      { nombre: "wifi", icono: "fas fa-wifi" },
      { nombre: "desayuno", icono: "fas fa-coffee" },
    ],
  },
];

const CIUDADES = [
  {
    nombre: "Bogotá D.C.",
    departamento: "Bogotá D.C.",
  },
  {
    nombre: "Ibagué",
    departamento: "Tolima",
  },
  {
    nombre: "Barranquilla",
    departamento: "Atlántico",
  },
  {
    nombre: "Cali",
    departamento: "Valle del Cauca",
  },
  {
    nombre: "Medellin",
    departamento: "Antioquia",
  },
  {
    nombre: "Cucuta",
    departamento: "Norte de Santander",
  },
  {
    nombre: "Armenia",
    departamento: "Quindio",
  },
  {
    nombre: "Tunja",
    departamento: "Boyacá",
  },
  {
    nombre: "Leticia",
    departamento: "Amazonas",
  },
  {
    nombre: "Cartagena de Indias",
    departamento: "Bolívar",
  },
  {
    nombre: "Manizales",
    departamento: "Caldas",
  },
];

// Funciones Globales
const cargarReserva = function () {
  return JSON.parse(localStorage.getItem("reserva"));
};

// localStorage:

var reserva = {
  ciudad: 'bogota',
  numeroHuespedes: 2,
  diaDeLlega: '2012-05-10',
  diaDeIda: '2012-05-20',
  numeroDiasEstadia: 10,
  indiceHotelSeleccionado: 0,
  valorNoche: 1000,
  huespedes: [
    {
      tipoDeDocumento: '',
      numeroDocumento: '',
      nombre: '',
      celular: ''
    },
    {
      tipoDeDocumento: '',
      numeroDocumento: '',
      nombe: '',
      celular: ''
    }
  ]
}
//--------------Funcion Filtrar hoteles por Ciudad-------//


let sugerenciasHoteles = document.querySelector("main.hoteles-disponibles")





function ValoresAgregados () {
  var formulario = document.querySelector("#huesped")
  formulario.querySelector("#ciudades").placeholder = reserva.ciudad;
  formulario.querySelector("#inputFechaLlegada").value = reserva.diaDeLlega;
  formulario.querySelector("#inputFechaSalida").value = reserva.diaDeIda;
  formulario.querySelector("#inputPersonas").value = reserva.numeroHuespedes;
}


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
  window.location.href = '../hotel-review.html'
 
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

function agregarOption(selector){
  let opciones = ""
  const reserva = cargarReserva()
  for(let i = 0 ; i < CIUDADES.length; i++){
    const ciudad= CIUDADES[i]
    opciones += `<option ${reserva.ciudad===ciudad.nombre ? 'selected' : ''} value="${ciudad.nombre}">${ciudad.nombre}, ${ciudad.departamento}</option>`
  }
  document.querySelector(selector).innerHTML = opciones
}


function guardarLocalstorage() {

  let informacion = {
    ciudad: document.querySelector('select#ciudades').value,
    numeroHuespedes: document.querySelector('input#inputPersonas').value,
    diaDeLlega: document.querySelector('input#inputFechaLlegada').value,
    diaDeIda: document.querySelector('input#inputFechaSalida').value,
    //numeroDiasEstadia: diaDeIda - diaDeLlega 
  }


  localStorage.setItem("reserva", JSON.stringify(informacion));

  location.href="pages/search.html"
 
}



//----------------------------------------