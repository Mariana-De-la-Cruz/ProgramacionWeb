const cajas = document.querySelectorAll('.caja');

// Quitar visibilidad al hacer clic
cajas.forEach(caja => {
  caja.addEventListener('click', () => {
    caja.classList.toggle('cajaClick');
  });
});

// Botón para restaurar todas las cajas
document.getElementById('btnLimpiar').addEventListener('click', () => {
  cajas.forEach(caja => caja.classList.remove('cajaClick'));
});