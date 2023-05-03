
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scroll", window.scrollY > 0); /* Agregar la clase "scroll" a la barra de navegación cuando la página hace scroll, y removerla cuando se encuentra en la parte superior */
  });


  // RUTA 
  const modulos = document.querySelectorAll('.modulo');
  const progreso = document.querySelector('.progreso');
  const modulos1 = document.querySelectorAll('.modulo');
  const progreso1 = document.querySelector('.progreso1');
  
  modulos.forEach(modulo => {
    modulo.addEventListener('click', () => {
      modulo.classList.toggle('completado');
      const porcentaje = (document.querySelectorAll('.completado').length / modulos.length) * 100;
      progreso.style.width = `${porcentaje}%`;
      const porcentaje1 = (document.querySelectorAll('.completado').length / modulos1.length) * 100;
      progreso1.style.height = `${porcentaje1}%`;
      // modulo.style.background = 'red';
    });
  });


  // NUMEROTYPED 2

let numeroActual1 = 0;
let intervalo1;
let numeroActual2 = 0;
let intervalo2;
let numeroActual3 = 0;
let intervalo3;

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
  const duracion = 60000;
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
  const duracion = 30;
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

const observer3 = new IntersectionObserver((entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      iniciarAnimacion3();
    } else {
      detenerAnimacion3();
      numeroActual3 = 0;
      document.getElementById("numero3").textContent = numeroActual3.toString();
    }
  });
});


const elemento3 = document.getElementById("numero3");
observer3.observe(elemento3);

function iniciarAnimacion3() {
  const incremento = 1;
  const duracion = 93;
  const iteraciones = duracion / incremento;
  let iteracionActual = 0;

  intervalo3 = setInterval(() => {
    numeroActual3 += incremento;
    iteracionActual++;

    let numeroFormateado;
    if (debeFormatear(numeroActual3)) {
      numeroFormateado = numeroActual3.toLocaleString("de-DE");
    } else {
      numeroFormateado = numeroActual3.toString();
    }

    document.getElementById("numero3").textContent = numeroFormateado;

    if (iteracionActual >= iteraciones || numeroActual3 >= 1000000) {
      clearInterval(intervalo3);
    }
  }, 8);
}

function detenerAnimacion3() {
  clearInterval(intervalo3);
}

function debeFormatear(numero) {
  return (numero >= 1000 && numero < 10000) ||
         (numero >= 10000 && numero < 100000) ||
         numero >= 100000;
}
  


