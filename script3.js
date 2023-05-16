// Obtener todos los elementos de día de la agenda
const dayElements = document.querySelectorAll('.day');

// Agregar evento de clic a cada día
dayElements.forEach(dayElement => {
  dayElement.addEventListener('click', () => {
    // Obtener la lista de tareas del día clickeado
    const taskList = dayElement.querySelector('ul');

    // Toggle para mostrar/ocultar la lista de tareas
    taskList.classList.toggle('show');
  });
});
