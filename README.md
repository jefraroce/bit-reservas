# Estrategia Proyecto de JavaScript 20/04/2020

Proceso de Reservas

0. Configuracion (Jeisson)

0.1. Crear listado de hoteles (2 cada uno)
0.2. Definir diseño general (https://www.spanish.hostelworld.com/
)
0.3. Crear archivo de funciones.js (tendra las funciones globales)

1. Pagina de aterrizaje (Camilo)

1.1. Diseño
1.2. Maquetación
1.3. Formulario Inicial (Ciudad, fecha de llegada, fecha de ida, # huespedes)
1.3.1. Autocompletar para buscar y seleccionar la ciudad. (Campo de busquedas por ciudad)

2. Selección de Hotel (Nicolas)

2.1. Listado de hoteles
2.2. Tarjeta del hotel (Vista preliminar del hotel y sus caracteristicas)
2.3. Formulario Inicial horizontal (Ciudad, fecha de llegada, fecha de ida, # huespedes)
2.4. Función para seleccionar un hotel
2.5. Carrusel fotos hotel (Opcional)

3. Información de Hotel (Yeison)

3.1. Diseño
3.2. Listado de Caracteristicas
3.3. Listado de Fotos (Carrusel o Galeria)
3.4. Formulario Inicial horizontal (Ciudad, fecha de llegada, fecha de ida, # huespedes)
3.5. Resumen de la Reserva (Con boton para continuar)

4. Formulario de Huespedes (Jose Luis)

4.1. Formulario de Registro por Huesped (Tipo de Documento, Numero de Documento, Nombre, Celular)
4.2. Resumen de la Reserva (Con boton de ir a revisar reserva, confirmación)

5. Confirmación y Pago (Enrique)

5.1. Resumen de Reserva (Con boton de pagar)
5.2. Listado de Huespedes

6. Página de agradecimiento (Enrique)

6.1. Banner 


Tecnologias:
- Bootstrap

Datos:
- Hoteles:
const hoteles = [
  {
    nombre: '',
    direccion: '',
    ciudad: '',
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
  }
]

localStorage:

var reserva = {
  ciudad: '',
  numeroHuespedes: 2,
  diaDeLlega: '',
  diaDe
}
