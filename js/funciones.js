// CONSTANTES GLOBALES
const HOTELES = [
  {
    nombre: "Hotel Nutibara",
    direccion: "Calle 52A #50-46",
    ciudades: ["Bogota D.C.", "Ibagué", "Barranquilla"],
    pais: "Colombia",
    descripcion:
      "Hotel Nutibara es un hotel de negocios amigable con el medio ambiente ubicado en el centro histórico de la ciudad de Medellín. Este tradicional hotel está ubicado frente a la Plaza de Las Esculturas, el Museo de Antioquia y del Palacio de la Cultura Rafael Uribe Uribe a 300 metros de la Estación Parque Berrío.",
    precioPorNoche: 130000,
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
    precioPorNoche: 250000,
    promocion: true,
    imagenVistaPrevia: "../img/hotelLasAmericasVistaPrevia.jpg", // 300px x 300px
    imagenPrincipal: "../img/americasPrincipal.webp", // 1280px x 400px
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
    precioPorNoche: 120000,
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
    precioPorNoche: 90000,
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
/* var reserva = {
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
} */
// Funciones Globales
const cargarReserva = function () {
  return JSON.parse(localStorage.getItem("reserva")) || {};
};

const guardarReserva = function (reserva) {
  localStorage.setItem("reserva", JSON.stringify(reserva));
};

// localStorage:


function agregarOption(selector) {
  const select = document.querySelector(selector)
  if (select) {
    const reserva = cargarReserva()
    let opciones = '<option value=""></option>'
    for(let i = 0 ; i < CIUDADES.length; i++){
      const ciudad= CIUDADES[i]
      opciones += `<option ${reserva.ciudad === ciudad.nombre ? 'selected' : ''} value="${ciudad.nombre}">${ciudad.nombre}, ${ciudad.departamento}</option>`
    }
    select.innerHTML = opciones
  } else {
    console.error('No se encontró el selector hacia el select de ciudades.')
  }
}

const calcularDiasEstadia = function(textoFechaDeLlegada, textoFechaDeIda) {
  const fechaDeLlegada = new Date(`${textoFechaDeLlegada} 00:00:00`)
  const fechaDeIda = new Date(`${textoFechaDeIda} 00:00:00`)
  return Math.floor( (fechaDeIda - fechaDeLlegada) / 1000 / 60 / 60 / 24 )
}

function guardarLocalstorage() {
  const ciudad = document.querySelector('select#ciudades').value
  const numeroHuespedes = document.querySelector('input#inputPersonas').value
  const diaDeLlega = document.querySelector('input#inputFechaLlegada').value
  const diaDeIda = document.querySelector('input#inputFechaSalida').value
  const numeroDiasEstadia = calcularDiasEstadia(diaDeLlega, diaDeIda)

  let informacion = {
    ciudad: ciudad,
    numeroHuespedes: numeroHuespedes,
    diaDeLlega: diaDeLlega,
    diaDeIda: diaDeIda,
    numeroDiasEstadia: numeroDiasEstadia
  }

  guardarReserva(informacion)
  location.href = (location.href.endsWith('index.html') || location.href.endsWith('/') ? 'pages/' : '') + 'search.html'
}

document.getElementById("huesped").addEventListener("submit", function (event) {
  event.preventDefault();
  guardarLocalstorage();
});


//----------------------------------------
