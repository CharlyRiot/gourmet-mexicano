// js/ventanita_menu.js

const preview = document.querySelector('.preview');
const descBox = preview.querySelector('.desc');

document.querySelectorAll('.menu-list li').forEach(li => {
  li.addEventListener('mouseenter', () => {
    const img   = li.dataset.img;
    const price = li.dataset.price;
    const desc  = li.dataset.desc;

    // Pon la imagen de fondo
    preview.style.backgroundImage = `url('${img}')`;

    // Mete descripción + precio en el mismo contenedor
    descBox.innerHTML = `
      <p class="desc-text">${desc}</p>
      <p class="desc-text price-text">${price}</p>
    `;

    // Muestra la ventana
    preview.style.opacity       = '1';
    preview.style.pointerEvents = 'auto';
  });

  li.addEventListener('mouseleave', () => {
    // Oculta la ventana
    preview.style.opacity       = '0';
    preview.style.pointerEvents = 'none';
  });
});
