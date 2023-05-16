// Este es un script de ejemplo

// Obtener todos los elementos de botón con la clase "btn"

const buttons = document.querySelectorAll('.btn');

// Agregar evento de clic a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Agregar clase de animación al hacer clic
    button.classList.add('btn-clicked');

    // Esperar 300ms y luego eliminar la clase de animación
    setTimeout(() => {
      button.classList.remove('btn-clicked');
    }, 300);
  });
});

