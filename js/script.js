document.querySelector(".custom-search").addEventListener("focus", function () {
    this.style.backgroundColor = ""; // Fundo rosa claro
    this.style.borderColor = "#fa7878"; // Borda rosa
    this.style.boxShadow = "0 0 8px rgba(250, 120, 120, 0.8)"; // Brilho rosa
  });
  
  document.querySelector(".custom-search").addEventListener("blur", function () {
    this.style.backgroundColor = ""; // Volta ao padrão do Bootstrap
    this.style.borderColor = "";
    this.style.boxShadow = "";
  });

  window.onload = function() {
    setTimeout(function() {
      document.querySelector('.flower').classList.add('show');
      document.querySelector('.welcome-text').classList.add('show');
    }, 1000); // Adiciona a classe 'show' após 1 segundo
  };