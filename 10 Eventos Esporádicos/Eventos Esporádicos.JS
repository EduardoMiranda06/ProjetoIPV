// Expansão de FAQ estilo Google
document.querySelectorAll(".faq-pergunta").forEach(btn => {
  btn.addEventListener("click", () => {
    const resposta = btn.nextElementSibling;
    resposta.style.display = resposta.style.display === "block" ? "none" : "block";
  });
});

function abrirLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.querySelector(".lightbox-img");
  img.src = src;
  lightbox.style.display = "block";
}

document.querySelector(".close").onclick = function () {
  document.getElementById("lightbox").style.display = "none";
};
function abrirLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.querySelector(".lightbox-img");
  img.src = src;
  lightbox.style.display = "flex";
}

document.querySelector(".close").onclick = function () {
  document.getElementById("lightbox").style.display = "none";
};

// Opcional: fechar ao clicar fora da imagem
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target.classList.contains("lightbox")) {
    this.style.display = "none";
  }
});


