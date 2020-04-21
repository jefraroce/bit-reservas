# BIT Reservas #

Aplicación para la solicitud de reservas en hoteles de Colombia.

# Proceso de Reservas #

## Tareas a Desarrollar ##

### 0. Configuracion (Jeisson) ###

1. Crear listado de hoteles (2 cada uno)
2. Definir diseño general [Página de De Ejemplo](https://www.spanish.hostelworld.com/)
3. Crear archivo de funciones.js (tendra las funciones globales)

### 1. Pagina de aterrizaje (Camilo) ###

1. Diseño
2. Maquetación
3. Autocompletar para buscar y seleccionar la ciudad. (Campo de busquedas por ciudad)
4. Formulario Inicial (Ciudad, fecha de llegada, fecha de ida, # huespedes)

### 2. Selección de Hotel (Nicolas) ###

1. Listado de hoteles
2. Tarjeta del hotel (Vista preliminar del hotel y sus caracteristicas)
3. Formulario Inicial horizontal (Ciudad, fecha de llegada, fecha de ida, # huespedes)
4. Función para seleccionar un hotel
5. Carrusel fotos hotel (Opcional)

### 3. Información de Hotel (Yeison) ###

[Página de Ejemplo](https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Vivo-Hostel/Bogota/295006?from=2020-04-21&to=2020-04-24&guests=2)

1. Diseño
2. Listado de Caracteristicas
3. Listado de Fotos (Carrusel o Galeria)
4. Formulario Inicial horizontal (Ciudad, fecha de llegada, fecha de ida, # huespedes)
5. Resumen de la Reserva (Con boton para continuar)

### 4. Formulario de Huespedes (Jose Luis) ###

[Página de Ejemplo](https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Vivo-Hostel/Bogota/295006?from=2020-04-21&to=2020-04-24&guests=2)

1. Formulario de Registro por Huesped (Tipo de Documento, Numero de Documento, Nombre, Celular)
2. Resumen de la Reserva (Con boton de ir a revisar reserva, confirmación)

### 5. Confirmación y Pago (Enrique) ###

1. Resumen de Reserva (Con boton de pagar)
2. Listado de Huespedes

### 6. Página de agradecimiento (Enrique) ###

1. Mensaje de agradecimiento
2. Banner de servicios adicionales (Playa, Bares, Restaurantes, Paseos, etc.)

## Información Adicional ##

### Tecnologias ###

- Estilos generales [Bootstrap](https://getbootstrap.com)
- Alertas [SweetAlert](https://sweetalert.js.org/)

### Estructuras de Datos ###

#### Estructura del listado de Hoteles

```
const hoteles = [
  {
    nombre: '',
    direccion: '',
    ciudades: ['Bogota D.C.', 'Ibagué', 'Barranquilla'],
    pais: '',
    descripcion: '',
    precioPorPersona: 1,
    promocion: true,
    imagenVistaPrevia: '', // 300px x 300px
    imagenPrincipal: '', // 1280px x 400px
    caracteristicas: [
      { nombre: 'wifi', icono: '' },
      { nombre: 'piscina', icono: '' },
      { nombre: 'desayuno', icono: '' },
      { nombre: 'transporte', icono: '' }
    ]
  },
  // ...
]
```

#### Listado de Ciudades

```
const ciudades = [
  {
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
```

#### localStorage (global var)

```
// localStorage:

var reserva = {
  ciudad: '',
  numeroHuespedes: 2,
  diaDeLlega: '2012-05-10',
  diaDeIda: '2012-05-20'
  numeroDiasEstadia: 10,
  indiceHotelSeleccionado: 0,
  valorNoche: 1000,
  huspedes: [
    {
      tipoDeDocumento: '',
      numeroDocumento: '',
      nombres: '',
      apellidos: ''
    },
    {
      tipoDeDocumento: '',
      numeroDocumento: '',
      nombres: '',
      apellidos: ''
    }
  ]
}
```
### Guia para actualizar repositorio ###

[https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/](https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/)
