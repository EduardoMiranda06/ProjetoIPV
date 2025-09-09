document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".galeria-grid img, .equipe-grid .membro img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.src, img.alt);
    });
  });

  function openModal(src, alt) {
    // Cria o overlay
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    // Cria o conteúdo do modal
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalImg = document.createElement("img");
    modalImg.src = src;
    modalImg.alt = alt;

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("modal-close");
    closeBtn.innerHTML = "&times;";

    // Monta o modal
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalImg);
    overlay.appendChild(modalContent);
    document.body.appendChild(overlay);

    // Fecha ao clicar no botão ou fora da imagem
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });

    function closeModal() {
      document.body.removeChild(overlay);
    }
  }
});
