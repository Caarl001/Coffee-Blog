// console.log('Funciona correctamente');

// // QuerrySelector
// const header = document.querySelector('#heading'); // retorna 0 o un elemento
// console.log(header);

// // querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
// // enlaces[0].textContent = "wea";

// //getELementById
//  const heading2 = document.getElementById('heading');
//  console.log(heading2);




// // Generar codigo HTML
//   const nuevoEnlace = document.createElement('A');

// // Agregando el href
//     nuevoEnlace.href ='nuevo-enlace.html';

// // Agregar la clase
//     nuevoEnlace.classList.add('navegacion__enlace');

// // Agregar el texto
//     nuevoEnlace.textContent = "Nuevo Enlace";

// // Agregarlo al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);
    
//   console.log(nuevoEnlace);

//   // 

//   console.log(1);
//   window.addEventListener('load', function() {
      
//       console.log(2);
//   });

//   window.onload = function() {
//     console.log(3);

//   }

//    document.addEventListener('DOMContentLoaded' , function() {
//     console.log(4);
//    });
//   console.log(5);

// window.onscroll = function() {
//     console.log('scrolling....');
// }

// // Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//   console.log(evento.target);
//   evento.preventDefault();
//   console.log('Enviando formulario');
// });
// El evento de Submit

const datos = {
    nombre:'',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  // Validar el formulario
  const { nombre, email, mensaje } = datos; 

  if (nombre === '' || email === '' || mensaje === '') {
    mostrarError('Todos los campos son obligatorios');
    return; 
  } 
  // Crear la alerta correctamente
  mostrarMensaje('Formulario llenado Correctamente');

  // Enviar el formulario
  function mostrarFormularioLLeno (mensaje) {
  const FormularioLLeno = document.createElement('p');
  FormularioLLeno.textContent = mensaje;
  FormularioLLeno.classList.add('FormularioLLeno');

  formulario.appendChild(FormularioLLeno);
  console.log('Enviando Formulario');
  }
});

// Eventos de los Inputs y Textarea


function leerTexto(evento) {
  datos[evento.target.id] = evento.target.value;
  // console.log(datos);
}

// Muestra una alerta que se envio correctamente
  function mostrarMensaje (mensaje) {
  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.classList.add('correcto');

  formulario.appendChild(alerta);
// Desaparezca despues de tales segundos
setTimeout(() => {
  alerta.remove();
}, 2500);  
};

function mostrarError (mensaje) {
  const error = document.createElement('P');
  error.textContent = mensaje;
  error.classList.add('error');

  formulario.appendChild(error);

  // Desaparezca despues de tales segundos
  setTimeout(() => {
    error.remove();
  }, 3000);
};

