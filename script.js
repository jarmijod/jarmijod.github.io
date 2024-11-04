const div = document.querySelector(".text");
texto = "Hola! Soy Juan Pablo Armijo.";

function EfectoTextTyping(elemento,texto,i=0){
    elemento.textContent += texto[i];
    if(i==texto.length-1) return;

    setTimeout(() => EfectoTextTyping(div,texto,i+1),100);
}

EfectoTextTyping(div,texto)

