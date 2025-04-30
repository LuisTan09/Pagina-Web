function agregarTarea() {
  const input = document.getElementById('nueva-tarea');
  const lista = document.getElementById('lista-tareas');
  if (input.value.trim() !== '') {
    const item = document.createElement('li');
    item.textContent = input.value;
    lista.appendChild(item);
    input.value = '';
  }
}