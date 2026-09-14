const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function () {
document.body.classList.toggle("modo-claro");

if (document.body.classList.contains("modo-claro")) {
botaoTema.textContent = "🌙";
} else {
botaoTema.textContent = "☀️";
}
});