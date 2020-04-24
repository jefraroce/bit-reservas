let reserva = JSON.parse(localStorage.getItem('reserva') || '{}')
let people = reserva.huespedes || []
drawPeople()

class Person {
 
  constructor(nombre, celular, tipoDeDocumento, numeroDocumento) {
   
    this.nombre = nombre
    this.celular = celular
    this.tipoDeDocumento = tipoDeDocumento
    this.numeroDocumento = numeroDocumento
  }

  huesped() {
    console.log(this.nombre)
  }

  celular() {
    console.log(this.celular)
  }

  yourTypeId() {
    console.log(this.tipoDeDocumento)
  }

  yourId() {
    console.log(this.numeroDocumento)
  }
}

function drawPeople() {
 
  const list = people.reduce(function (rows, person, index) {
    console.log('mirara acá', person)
    return rows + 
    `<tr>
      <td>${(index + 1)}</td>
      <td>${person.nombre}</td>
      <td>${person.celular}</td>
      <td>${person.tipoDeDocumento}</td>
      <td>${person.numeroDocumento}</td>
      <td><button class="btn btn-sm btn-danger" data-index="${index}" data-type="remove">Eliminar</button></td>
    </tr>`
  }, '')

  const tableBody = document.querySelector('table#people tbody')
  tableBody.innerHTML = list

  addEvents()
 
}

function addEvents() {
  const removeButtons = document.querySelectorAll('tbody button.btn-danger')

  for (let i = 0; i < removeButtons.length; i++) {
    const removeButton = removeButtons[i]
    removeButton.addEventListener('click', () => removePerson(removeButton.dataset.index))
  }
}

function updateDB() {

let reserva = cargarReserva() 

  reserva = Object.assign({}, reserva, {huespedes: people})
  console.log(reserva)
  
  localStorage.setItem('reserva', JSON.stringify(reserva))
}

function removePerson(index) {
  people.splice(index, 1)
  drawPeople()
  updateDB()
}

function addPerson(event) {
  event.preventDefault()
  event.stopPropagation()

  console.log(event)

  const form = event.target
  const inputName = form.querySelector('input#nombre')
  const inputcelular = form.querySelector('input#celular')

  const selectTpId = document.getElementById('tipoDeDocumento').value
  const inputnumeroDocumento = form.querySelector('input#numeroDocumento')

  const newPerson = new Person(inputName.value, inputcelular.value, selectTpId, inputnumeroDocumento.value)
  people.push(newPerson)
  drawPeople()

  inputName.value = ''
  inputcelular.value = ''
  selectTpId.value = ''
  inputnumeroDocumento.value = ''

  updateDB()
}

const form = document.querySelector('#form')
form.addEventListener('submit', () => addPerson(event))

// location.href="checkout.html"

