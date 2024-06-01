import './style.css'
// 1

const nombre = 'Tomás';

// 2

let variable = {
  edad : 2,
  precio : 45.25,
  ciudad : 'Buenos Aires',
  esEstudiante : true
}

// 3

const nombre2 = 'Tomás';
const apellido = 'Marcos';
console.log(`Hola ${nombre2} ${apellido}`)

// 4

const num1 = 5
const num2 = 10

// Suma

const suma = num1 + num2
console.log(suma)

// Resta

const resto = num1 - num2
console.log(resto)

// Division

const division = num1 / num2
console.log(division)

// Multiplicacion

const multiplicacion = num1 * num2
console.log(multiplicacion)

// 5

let contador = 2

// Incremento

const incremento = contador++

// Decremento

const decremento = contador--

console.log(`${incremento}`)

console.log(`${decremento}`)

// 6

 let bienvenida = prompt('Ingrese su nombre')

 alert(`Bienvenido/a ${bienvenida}`)

// 7

 let radio = prompt('Dame el radio de un circulo')

 const area = 3.1415 * radio^2

 console.log(area)

// 8

 let celcius = prompt('Dame una temperatura en celcius')

 const F = celcius * 9/5 + 32
 console.log(F)

// 9

 let nums1 = parseInt(prompt('dame 1 numero'));
 let nums2 = parseInt(prompt('dame otro numero'));
 let nums3 = parseInt(prompt('dame otro numero'));

 const promedio = (nums1 + nums2 + nums3)/3

 console.log(promedio);
 
// 10

let num = 5

let posNeg = num > 0 ? "Es positivo" : "Es negativo";

console.log(posNeg);

// 11

 const edad = parseInt(prompt('Dame tu edad'));
 if (edad >= 18){
   console.log('Felicidades, sos mayor de edad');
 }else{
   console.log('Felicidades, sos menor de edad');
 }

// 12

const dia = parseInt(prompt('Dame un número del 1 al 7'))
switch (dia) {
  case 1:
    console.log('El día de la semana es Lunes')
    break;
  case 2:
      console.log('El día de la semana es Martes')
      break;
  case 3:
    console.log('El día de la semana es Miercoles')
    break;
  case 4:
    console.log('El día de la semana es Jueves')
    break
  case 5:
      console.log('El día de la semana es Viernes')
      break;
  case 6:
      console.log('El día de la semana es Sábado')
      break;
  case 7:
      console.log('El día de la semana es Domingo')
      break;

  default:
    console.log('Día de la semana no reconocido')
    break;
}