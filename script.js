document.getElementById("abrirConvite").addEventListener("click", function() {
  var imagem = document.getElementById("imagem");
  var abrirConvite = document.getElementById("abrirConvite");

  imagem.classList.add("tamanho-imagem");
  imagem.src = "secre.jpg";

  document.getElementById("opcoes").classList.remove("hidden");
  
  abrirConvite.style.display = "none";
});
document.getElementById("nao").addEventListener("click", function() {
  
  var botaoFugitivo = document.getElementById("nao");

  var larguraJanela = window.innerWidth;
  var alturaJanela = window.innerHeight;
  var novoX = Math.random() * (larguraJanela - botaoFugitivo.offsetWidth);
  var novoY = Math.random() * (alturaJanela - botaoFugitivo.offsetHeight);

  botaoFugitivo.style.left = novoX + 'px';
  botaoFugitivo.style.top = novoY + 'px';
})

document.getElementById("sim").addEventListener("click", function() {
  window.alert('Retorne ao zap com a resposta')})