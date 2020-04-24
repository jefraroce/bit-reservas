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
  {
      nombre: 'Hotel Estelar Altamira',
      direccion: 'Carrera 1 No 45-50',
      ciudades: 'Ibague','Leticia','Armenia',
      pais: 'Colombia',
      descripcion: 'El Estelar Altamira está situado junto al centro financiero de Ibagué, a 5 minutos en coche del aeropuerto, y ofrece alojamiento con conexión Wi-Fi y aparcamiento gratuitos. Cuenta con pistas de tenis, gimnasio y piscina. Las habitaciones del Hotel Estelar Altamira, de 5 estrellas, son amplias y luminosas y disponen de TV por cable, minibar y aire acondicionado. Además, cuentan con circuito privado de TV.El Estelar Altamira alberga una sala de juegos y se puede solicitar servicio de lavandería y de transporte. El hotel ofrece varias opciones gastronómicas. La Toscana y Le Bistrot sirven cocina italiana, francesa y argentina. También cuenta con cafetería, bar El Aceituno y parrilla Las Palmas para aperitivos y comidas ligeras. El Hotel Estelar Altamira se encuentra a 10 calles del popular estadio Manuel Murillo Toro.',
      precioPorPersona: 269500,
      promocion: false,
      imagenVistaPrevia: 'img/altamira-hotel-small.jpg', // 300px x 300px
      imagenPrincipal: 'img/altamira-hotel-big.jpg', // 1280px x 400px
      caracteristicas: [
        { nombre: 'wifi', icono: 'fas fa-wifi' },
        { nombre: 'piscina', icono: 'fas fa-swimming-pool' },
        { nombre: 'desayuno', icono: 'fas fa-utensils' },
        { nombre: 'transporte', icono: 'fas fa-shuttle-van' }
      ],
  },
  {
      nombre: 'Hotel Estelar El Cable',
      direccion: 'Carrera 23 C No 64A-60',
      ciudades: 'Cucuta','Manizales','Tunja',
      pais: 'Colombia',
      descripcion: 'El Hotel Estelar El Cable ofrece habitaciones amplias con vistas a la ciudad y cuenta con gimnasio y WiFi gratuita. El establecimiento se encuentra en el centro de Manizales y es ideal para estancias de negocios o de ocio. Las habitaciones presentan una decoración moderna y disponen de ventanas grandes que dan una sensación de amplitud y luminosidad. También incluyen aire acondicionado y TV LCD por cable. El Estelar El Cable Hotel alberga un restaurante pequeño donde se sirve un desayuno buffet. El hotel se halla a 37 km del aeropuerto internacional Matecaña y a 3 km del estadio Palogrande. Además, se facilita aparcamiento privado gratuito.',
      precioPorPersona: 218500,
      promocion: false,
      imagenVistaPrevia: 'img/cable-hotel-small.jpg', // 300px x 300px
      imagenPrincipal: 'img/cable-hotel-big.jpg', // 1280px x 400px
      caracteristicas: [
        { nombre: 'wifi', icono: 'fas fa-wifi' },
        { nombre: 'piscina', icono: 'fas fa-swimming-pool' },
        { nombre: 'desayuno', icono: 'fas fa-utensils' },
      ]
    }
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

// localStorage:



function agregarOption(selector) {
  const select = document.querySelector(selector);
  if (select) {
    const reserva = cargarReserva();
    let opciones = '<option value=""></option>';
    for (let i = 0; i < CIUDADES.length; i++) {
      const ciudad = CIUDADES[i];
      opciones += `<option ${
        reserva.ciudad === ciudad.nombre ? "selected" : ""
      } value="${ciudad.nombre}">${ciudad.nombre}, ${
        ciudad.departamento
      }</option>`;
    }
    select.innerHTML = opciones;
  } else {
    console.error("No se encontró el selector hacia el select de ciudades.");
  }
}

function guardarLocalstorage() {
  let informacion = {
    ciudad: document.querySelector("select#ciudades").value,
    numeroHuespedes: document.querySelector("input#inputPersonas").value,
    diaDeLlega: document.querySelector("input#inputFechaLlegada").value,
    diaDeIda: document.querySelector("input#inputFechaSalida").value,
    //numeroDiasEstadia: diaDeIda - diaDeLlega
  };

  localStorage.setItem("reserva", JSON.stringify(informacion));

  location.href = "pages/search.html";
}

//----------------------------------------
