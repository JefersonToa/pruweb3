const formulario = document.getElementById('evento');
const listaEventos = document.getElementById('eventos');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value.trim();
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const descripcion = document.getElementById('descripcion').value.trim();

  if (!nombre || !fecha || !hora || !descripcion) {
    alert('Por favor complete todos los campos');
    return;
  }

  const eventos = listaEventos.querySelectorAll('li');
  for (let evento of eventos) {
    
    const texto = evento.querySelector('strong').textContent;
    const textoFechaHora = evento.childNodes[2].textContent.trim(); 
    
    const fechaEvento = textoFechaHora.split(' ')[1]; 
    if (texto.toLowerCase() === nombre.toLowerCase() && fechaEvento === fecha) {
      alert('Ya existe un evento con ese nombre en la misma fecha.');
      return;
    }
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${nombre}</strong> - ${fecha} ${hora} <br/>
    <em>${descripcion}</em>
    <button class="btn-eliminar" style="margin-left: 10px;">Eliminar</button>
  `;

  listaEventos.appendChild(li);

  formulario.reset();

  const btnEliminar = li.querySelector('.btn-eliminar');
  btnEliminar.addEventListener('click', () => {
    li.remove();
  });
});


