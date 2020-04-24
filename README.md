# BIT Reservas #

Aplicación para la solicitud de reservas en hoteles de Colombia.

# Proceso de Reservas #

## Tareas a Desarrollar ##

### 0. Configuracion (Jeisson) ###

1. Crear listado de hoteles (2 cada uno)
2. Definir diseño general [Página de De Ejemplo](https://www.spanish.hostelworld.com/)
3. Crear archivo de funciones.js (tendra las funciones globales)

### 1. Pagina de aterrizaje (Camilo) - index.html ###

[Home Page](https://jefraroce.github.io/bit-reservas/)

1. Diseño
2. Maquetación
3. Autocompletar para buscar y seleccionar la ciudad. (Campo de busquedas por ciudad)
4. Formulario Inicial (Ciudad, fecha de llegada, fecha de ida, # huespedes)
5. Calcular el número de noches de estadia.
6. Almacenar la ciudad, fecha de llegada, fecha de partida, número de noches de estadia y número de huespedes en el objeto reserva del localStorage
7. Redireccionar al usuario a la página search.html

### 2. Selección de Hotel (Nicolas) - search.html ###

[Search Page](https://jefraroce.github.io/bit-reservas/pages/search.html)

1. Listado de hoteles
2. Tarjeta del hotel (Vista preliminar del hotel y sus caracteristicas)
3. Formulario Inicial horizontal (Ciudad, fecha de llegada, fecha de ida, # huespedes)
4. Función para seleccionar un hotel
5. Carrusel fotos hotel (Opcional)
6. Almacenar el indice del hotel seleccionado en el localStorage
7. Redireccionar al usuario a la página hotel-review.html

### 3. Información de Hotel (Yeison) - hotel-review.html ###

[Hotel Review Page](https://jefraroce.github.io/bit-reservas/pages/hotel-review.html)

[Página de Ejemplo](https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Vivo-Hostel/Bogota/295006?from=2020-04-21&to=2020-04-24&guests=2)

1. Diseño
2. Listado de Caracteristicas
3. Listado de Fotos (Carrusel o Galeria)
4. Formulario Inicial horizontal (Ciudad, fecha de llegada, fecha de ida, # huespedes)
5. Resumen de la Reserva (Con boton para continuar)
6. Crear función para calcular el valor total de la estadia.
7. Redireccionar al usuario a la página user-details.html

### 4. Formulario de Huespedes (Jose Luis) - user-details.html ###

[Hotel Review Page](https://jefraroce.github.io/bit-reservas/pages/user-details.html)

[Página de Ejemplo](https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Vivo-Hostel/Bogota/295006?from=2020-04-21&to=2020-04-24&guests=2)

1. Formulario de Registro por Huesped (Tipo de Documento, Numero de Documento, Nombre, Celular)
2. Resumen de la Reserva (Con boton de ir a revisar reserva, confirmación)
3. Almacenar los detalles de los huespedes en el objeto reservas almacenado en el localStorage
4. Redireccionar al usuario a la página checkout.html

### 5. Confirmación y Pago (Enrique) - checkout.html ###

[Checkout](https://jefraroce.github.io/bit-reservas/pages/checkout.html)

1. Resumen de Reserva (Con boton de pagar)
2. Listado de Huespedes

### 6. Página de agradecimiento (Enrique) - thanks.html ###

[Thanks](https://jefraroce.github.io/bit-reservas/pages/thanks.html)

1. Mensaje de agradecimiento
2. Banner de servicios adicionales (Playa, Bares, Restaurantes, Paseos, etc.)
3. Luego de cargada la página se debe crear una función que elimine el objeto reserva del localStorage

## Información Adicional ##

### Tecnologias ###

- Estilos generales [Bootstrap](https://getbootstrap.com)
- Alertas [SweetAlert](https://sweetalert.js.org/)
- Iconos [FontAwesome](https://fontawesome.com/)

### Estructuras de Datos ###

#### Estructura del listado de Hoteles

```js
const hoteles = [
  {
    nombre: '',
    direccion: '',
    ciudades: ['Bogota D.C.', 'Ibagué', 'Barranquilla'],
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

```js
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

```js
// localStorage:

var reserva = {
  ciudad: '', // Camilo
  numeroHuespedes: 2, // Camilo
  diaDeLlega: '2012-05-10', // Camilo
  diaDeIda: '2012-05-20', // Camilo
  numeroDiasEstadia: 9, // Camilo
  indiceHotelSeleccionado: 0, // Nicolas
  huespedes: [  // Jose Luis
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
```
### Guia para actualizar repositorio ###

[https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/](https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/)
