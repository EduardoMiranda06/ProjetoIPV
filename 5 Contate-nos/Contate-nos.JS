document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card-contato').forEach(card => {
    const imageUrl = card.getAttribute('data-image');
    const link = card.getAttribute('data-link');

    card.addEventListener('mouseenter', () => {
      card.style.backgroundImage = `url('${imageUrl}')`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.backgroundImage = '';
    });

    card.addEventListener('click', () => {
      if (link) window.open(link, '_blank');
    });
  });
});
