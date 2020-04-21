// CONSTANTES GLOBALES
const HOTELES = [{
  nombre: '',
  direccion: '',
  ciudades: ['Bogota D.C.', 'Ibagué', 'Barranquilla'],
  pais: '',
  descripcion: '',
  precioPorPersona: 1,
  promocion: true,
  imagenVistaPrevia: '', // 300px x 300px
  imagenPrincipal: '', // 1280px x 400px
  caracteristicas: [{
      nombre: 'wifi',
      icono: ''
    },
    {
      nombre: 'piscina',
      icono: ''
    },
    {
      nombre: 'desayuno',
      icono: ''
    },
    {
      nombre: 'transporte',
      icono: ''
    }
  ]
}]

const CIUDADES = [{
    nombre: 'Bogotá D.C.',
    departamento: 'Bogotá D.C.'
  },
  {
    nombre: 'Ibagué',
    departamento: 'Tolima'
  },
  {
    nombre: 'Barranquilla',
    departamento: 'Atlántico'
  },
  {
    nombre: 'Cali',
    departamento: 'Valle del Cauca'
  },
  {
    nombre: 'Medellin',
    departamento: 'Antioquia'
  },
  {
    nombre: 'Cucuta',
    departamento: 'Norte de Santander'
  },
  {
    nombre: 'Armenia',
    departamento: 'Quindio'
  },
  {
    nombre: 'Tunja',
    departamento: 'Boyacá'
  },
  {
    nombre: 'Leticia',
    departamento: 'Amazonas'
  },
  {
    nombre: 'Cartagena de Indias',
    departamento: 'Bolívar'
  },
  {
    nombre: 'Manizales',
    departamento: 'Caldas'
  }
]

// Funciones Globales
const cargarReserva = function () {
  return JSON.parse(localStorage.getItem('reserva'))
}