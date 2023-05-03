// SCROLL 

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scroll", window.scrollY > 0); /* Agregar la clase "scroll" a la barra de navegación cuando la página hace scroll, y removerla cuando se encuentra en la parte superior */
  });



// MOSTRAR POR AREA 

function mostrarPorArea(area) {
    // Mostrar el indicador de carga
    var loader = document.getElementById("loader");
    loader.style.display = "block";
  
    // Ocultar todos los contenedores
    var contenedores = document.getElementsByClassName("container1");
    for (var i = 0; i < contenedores.length; i++) {
      contenedores[i].classList.remove("visible");
    }
  
    // Cambiar el estilo del botón seleccionado
    var botones = document.getElementsByTagName("button");
    for (var i = 0; i < botones.length; i++) {
      botones[i].classList.remove("selected");
    }
    var botonSeleccionado = document.querySelector("button[data-area='" + area + "']");
    botonSeleccionado.classList.add("selected");
  
    setTimeout(function() {
        loader.style.display = "none";
        // Mostrar los contenedores asociados al área después de ocultar el loader
        for (var i = 0; i < contenedores.length; i++) {
          if (contenedores[i].classList.contains(area)) {
            contenedores[i].classList.add("visible");
          }
        }
      }, 1000); // Tiempo en milisegundos de la animación de carga
  }
  

//   SCROLLTIME


const contenedor = document.getElementById("contenedores");
const buscador = document.getElementById("buscador");

  
let isScrolling = false;

// Cambiamos el valor de isScrolling a true de una vez
isScrolling = true;

// Verificamos si llegamos al final del scroll y luego lo reseteamos
function checkScroll() {
  if (contenedor.scrollTop + contenedor.clientHeight >= contenedor.scrollHeight) {
    contenedor.scrollTop = 0;
  }

}

// Detenemos el scroll cuando el cursor está encima del contenedor
function stopScroll() {
  isScrolling = false;
}

// Continuamos el scroll cuando el cursor sale del contenedor
function startScroll() {
  isScrolling = true;
}

// Agregamos los listeners al contenedor
contenedor.addEventListener("mouseover", stopScroll);
contenedor.addEventListener("mouseout", startScroll);
buscador.addEventListener("focus", stopScroll);
buscador.addEventListener("blur", startScroll);
buscador.addEventListener("keyup", stopScroll);



// Creamos un bucle que hace scroll en el contenedor
setInterval(() => {
  if (isScrolling) {
    checkScroll();
    contenedor.scrollTop += 2;
  }
}, 100);


// BUSCAR 

const inputBuscador = document.getElementById('buscador');
const contenedores = document.querySelectorAll('.container1 .card');

inputBuscador.addEventListener('keyup', () => {
  const textoBuscado = inputBuscador.value.toLowerCase();

  contenedores.forEach((card) => {
    const categoria = card.querySelector('.category').textContent.toLowerCase();
    const coincide = categoria.includes(textoBuscado);
    card.style.display = coincide ? 'block' : 'none';
  });
});


  
  // scrollbtn

  // Selecciona el div que contiene el contenido con scroll
  var myDiv = document.getElementById("contenedores");

  // Agrega un listener al evento scroll del div
  myDiv.addEventListener('scroll', function() {
    // Si el usuario hace scroll hacia abajo más de 20px, se muestra el botón
    if (myDiv.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      // Si el usuario está en la parte superior del div, se oculta el botón
      document.getElementById("myBtn").style.display = "none";
    }
  });

  // Cuando el usuario hace clic en el botón, se ejecuta la función
  document.getElementById("myBtn").onclick = function() {topFunction()};
  
  function topFunction() {
    // Hace scroll hacia arriba del div con animación
    myDiv.scrollTo(contenedor.scrollTop = 0);
    // myDiv.scrollTo({top: 0, behavior: 'smooth'});
  }


  // typed

const typed = new Typed('.typed',{

  strings:[
      
          '<b class="escritura">SIGNIFICATIVO.</b>',
          '<b class="escritura">ESTRATEGICO.</b>',
          '<b class="escritura">PRACTICO.</b>',
          '<b class="escritura">PROFECIONAL.</b>'
],

//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
shuffle: false, // Alterar el orden en el que escribe las palabras.
backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
loop: true, // Repetir el array de strings
loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
showCursor: true, // Mostrar cursor palpitanto
cursorChar: '|', // Caracter para el cursor
contentType: 'html', // 'html' o 'null' para texto sin formato


})


// NUMEROTYPED 2

let numeroActual1 = 0;
let intervalo1;
let numeroActual2 = 0;
let intervalo2;

const observer1 = new IntersectionObserver((entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      iniciarAnimacion1();
    } else {
      detenerAnimacion1();
      numeroActual1 = 0;
      document.getElementById("numero1").textContent = numeroActual1.toString();
    }
  });
});

const elemento1 = document.getElementById("numero1");
observer1.observe(elemento1);

function iniciarAnimacion1() {
  const incremento = 500;
  const duracion = 340000;
  const iteraciones = duracion / incremento;
  let iteracionActual = 0;

  intervalo1 = setInterval(() => {
    numeroActual1 += incremento;
    iteracionActual++;

    let numeroFormateado;
    if (debeFormatear(numeroActual1)) {
      numeroFormateado = numeroActual1.toLocaleString("de-DE");
    } else {
      numeroFormateado = numeroActual1.toString();
    }

    document.getElementById("numero1").textContent = numeroFormateado;

    if (iteracionActual >= iteraciones || numeroActual1 >= 430000) {
      clearInterval(intervalo1);
    }
  }, 1);
}

function detenerAnimacion1() {
  clearInterval(intervalo1);
}

const observer2 = new IntersectionObserver((entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      iniciarAnimacion2();
    } else {
      detenerAnimacion2();
      numeroActual2 = 0;
      document.getElementById("numero2").textContent = numeroActual2.toString();
    }
  });
});

const elemento2 = document.getElementById("numero2");
observer2.observe(elemento2);

function iniciarAnimacion2() {
  const incremento = 1;
  const duracion = 120;
  const iteraciones = duracion / incremento;
  let iteracionActual = 0;

  intervalo2 = setInterval(() => {
    numeroActual2 += incremento;
    iteracionActual++;

    let numeroFormateado;
    if (debeFormatear(numeroActual2)) {
      numeroFormateado = numeroActual2.toLocaleString("de-DE");
    } else {
      numeroFormateado = numeroActual2.toString();
    }

    document.getElementById("numero2").textContent = numeroFormateado;

    if (iteracionActual >= iteraciones || numeroActual2 >= 1000000) {
      clearInterval(intervalo2);
    }
  }, 22);
}

function detenerAnimacion2() {
  clearInterval(intervalo2);
}

function debeFormatear(numero) {
  return (numero >= 1000 && numero < 10000) ||
         (numero >= 10000 && numero < 100000) ||
         numero >= 100000;
}
