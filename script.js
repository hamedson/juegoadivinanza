
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intentos')
let intentos = 0


function checar() {
     let numeroIngresado = parseInt(numeroEntrada.value)
      intentos++
      intento.textContent = intentos

      if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
          mensaje.textContent = ('Ingresa un numero valido')
          mensaje.style.color = 'black'
          return
      } 
      
      if (numeroIngresado === numeroAleatorio) {
          mensaje.textContent = ('Felicidades hermano')
          mensaje.style.color = 'green'
          numeroEntrada.disbaled = true
          return
      }
    
      if (numeroIngresado > numeroAleatorio) {
          mensaje.textContent = ('Es menor viejo')
          mensaje.style.color = 'yellow'
      }


      if (numeroIngresado < numeroAleatorio) {
          mensaje.textContent = ('Es mayor viejo')
          mensaje.style.color = 'orange'
      }
    }











    // function checar() {
    //     if (numeroAleatorio = hola)                                              {

    // } else if (document.getElementById('numeroEntrada').value == numeroRandom) {
    //     document.getElementById('mensaje').innerHTML = 'Eres la macana'
    // } else if (document.getElementById('numeroEntrada').value <= numeroRandom) {
    //     document.getElementById('mensaje').innerHTML = 'Hermano es mas arriba'
    //     document.getElementById('numeroEntrada').value = ''
    // } else if (document.getElementById('numeroEntrada').value >= numeroRandom) {
    //     document.getElementById('mensaje').innerHTML = 'Hermano es mas abajo'
    //     document.getElementById('numeroEntrada').value = ''
    // }
    // 
