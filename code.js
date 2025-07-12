/* Boton menú superior izquierdo */
const boton__menu = document.querySelector('#boton__menu');
const menu_desplegable = document.querySelector('#menu_desplegable');
const cont__menu = document.querySelector('.cont-menu');

boton__menu.addEventListener('click', (e) => {
  
  if (boton__menu.checked) {
    console.log('menu activado');
    menu_desplegable.style.visibility = 'visible';
    menu_desplegable.style.opacity = '1';
    cont__menu.style.transform = 'translateX(0%)'; 

  } else {
    console.log('menu desactivado');
    menu_desplegable.style.visibility = 'hidden';
    menu_desplegable.style.opacity = '0';
    cont__menu.style.transform = 'translateX(-15%)'; 
  }
});




/* Boton que copia el email al portapapeles */
const btn__copiar = document.getElementById("btn__copiar");
const miCorreo = document.getElementById("miCorreo");

btn__copiar.onclick = copiarAlclipboard;
let correoElectronico = miCorreo.innerHTML;

function copiarAlclipboard(e) {
  navigator.clipboard.writeText(correoElectronico)
  .then(() => {
      alert('Correo electrónico copiado al portapapeles.')
})
  .catch(err => {
  console.log("algo fallo", err);
})
};