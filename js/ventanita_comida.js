// ../js/ventanita_comida.js
const preview  = document.querySelector('.preview');
const descBox  = preview.querySelector('.desc');
const priceBox = preview.querySelector('.price-out');

document.querySelectorAll('.menu-list li').forEach(li => {
  li.addEventListener('mouseenter', () => {
    // extraemos data-atributos
    const img   = li.dataset.img;
    const price = li.dataset.price;
    const desc  = li.dataset.desc;

    // actualizamos contenido de la ventana
    preview.style.backgroundImage = `url('${img}')`;
    priceBox.textContent          = price;
    descBox.textContent           = desc;

    // la mostramos
    preview.style.opacity        = '1';
    preview.style.pointerEvents  = 'auto';
  });

  li.addEventListener('mouseleave', () => {
    // la ocultamos
    preview.style.opacity        = '0';
    preview.style.pointerEvents  = 'none';
  });
});
