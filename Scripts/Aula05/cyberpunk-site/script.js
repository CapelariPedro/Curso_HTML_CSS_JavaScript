// Lista de hackers famosos
const hackers = ["Neo", "Trinity", "Elliot Alderson", "Kevin Mitnick", "Anonymous"];
const hackerList = document.getElementById("hacker-list");

// Adiciona hackers à lista
hackers.forEach(hacker => {
    let li = document.createElement("li");
    li.textContent = hacker;
    hackerList.appendChild(li);
});

// Efeito Glitch no botão
const glitchButton = document.getElementById("glitchButton");

glitchButton.addEventListener("mouseover", () => {
    glitchButton.style.transform = "rotate(5deg)";
    glitchButton.style.boxShadow = "0 0 20px #f0f";
});

glitchButton.addEventListener("mouseout", () => {
    glitchButton.style.transform = "rotate(0deg)";
    glitchButton.style.boxShadow = "0 0 10px #0ff";
});

// Validação de Formulário
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    if (nome && email && mensagem) {
        mensagemSucesso.classList.remove("hidden");
        setTimeout(() => mensagemSucesso.classList.add("hidden"), 3000);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});