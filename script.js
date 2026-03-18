/* script.js — Proyecto Jirafa — Req. 5 */

document.addEventListener('DOMContentLoaded', function() {

  // Al cargar la página, revisar si el usuario tenía tema oscuro guardado
  var temaGuardado = localStorage.getItem('tema');
  var btn = document.getElementById('btn-tema');

  if (temaGuardado === 'oscuro') {
    document.body.classList.add('dark');
    if (btn) btn.textContent = '☀️ Modo Claro';
  }

});

// Función para cambiar entre modo oscuro y claro
// Es llamada desde onclick="cambiarTema()" en el HTML
function cambiarTema() {
  var body = document.body;
  var btn  = document.getElementById('btn-tema');

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    btn.textContent = '🌙 Modo Oscuro';
    localStorage.setItem('tema', 'claro');
  } else {
    body.classList.add('dark');
    btn.textContent = '☀️ Modo Claro';
    localStorage.setItem('tema', 'oscuro');
  }
}

// Función para mostrar u ocultar los datos curiosos
// Es llamada desde onclick="mostrarExtra()" en el HTML
function mostrarExtra() {
  var div = document.getElementById('extra-info');
  var btn = event.target;

  if (div.style.display === 'none' || div.style.display === '') {
    div.style.display = 'block';
    btn.textContent = '➖ Ocultar datos curiosos';
  } else {
    div.style.display = 'none';
    btn.textContent = '➕ Ver datos curiosos';
  }
}