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
        icono: '<i class="fas fa-wifi"></i>',
      },
      {
        nombre: "piscina",
        icono: '<i class="fas fa-swimming-pool"></i>',
      },
      {
        nombre: "desayuno",
        icono: '<i class="fas fa-coffee"></i>',
      },
      {
        nombre: "transporte",
        icono: '<i class="fas fa-bus"></i>',
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
      "Macondo guest house es un espacio pensado especialmente para los viajeros del exterior, que buscan un lugar con muchas comodidades a un o precio económico, Aquí encontrara áreas para el descanso, la socialización y el total disfrute de tu estadía en la ciudad de Medellín, estamos situados en una calle con muy poco flujo vehicular, especial para el descanso.<br>Servicio de recepción las 24 horas, Wifi gratis, habitaciones personales o compartidas, agua caliente, cocina para el uso de los huéspedes, patio cubierto, barbacoa, entre otros.",
    precioPorPersona: 120000,
    promocion: false,
    imagenVistaPrevia: "img/macondo-medellin-small.webp", // 300px x 300px
    imagenPrincipal: "img/macondo-medellin-big.webp", // 1280px x 400px
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
      "A common space created for travelers experiences in Medellín, Colombia / Un espacio común creado para las experiencias de ciudad de los viajeros en Medellín, Colombia🌍 Gastón es un nuevo espacio para vivir y trabajar de una forma poco convencional en Medellín. Un lugar no solo para compartir espacios, si no experiencias. Aquí compartimos proyectos y disfrutamos de las vivencias de los viajeros.",
    precioPorPersona: 90000,
    promocion: true,
    imagenVistaPrevia: "img/macondo-medellin-small.webp", // 300px x 300px
    imagenPrincipal: "img/macondo-medellin-big.webp", // 1280px x 400px
    caracteristicas: [
      { nombre: "wifi", icono: "fas fa-wifi" },
      { nombre: "desayuno", icono: '<i class="fas fa-coffee"></i>' },
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
