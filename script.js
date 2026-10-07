const pantalla = document.getElementById("pantalla");

document.querySelectorAll("button").forEach((boton) => {
  boton.addEventListener("click", () => {
    const texto = boton.textContent;

    if (texto === "C") {
      pantalla.textContent = "0";
    } else if (texto === "=") {
      pantalla.textContent = eval(pantalla.textContent);
    } else {
      if (pantalla.textContent === "0") {
        pantalla.textContent = texto;
      } else {
        pantalla.textContent += texto;
      }
    }
  });
});