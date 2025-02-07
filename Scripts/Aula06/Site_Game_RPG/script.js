const botoesClasse = document.querySelectorAll(".classe");
const descricaoClasse = document.getElementById("descricaoClasse");
const botaoIniciar = document.getElementById("iniciarAventura");
const aventura = document.getElementById("aventura")
const textoAventura = document.getElementById("textoAventura");
const botaoOpcao1 = document.getElementById("opcao1");
const botaoOpcao2 = document.getElementById("opcao2");




let classeSelecionada = "";

const classes = {
    "Guerreiro": " O Guerreiro é forte e resistente, especializado em combate corpo a corpo",
    "Mago": " O Mago domina feitiços poderosos, mas tem pouca resistência física",
    "Arqueiro": " O Arqueiro é ágil e mortal à distância, atacando com precisão"
};

botoesClasse.forEach(botao =>{
    botao.addEventListener("click", function(){
        classeSelecionada = botao.getAttribute("data-classe");
        descricaoClasse.innerHTML = `<p><strong>${classeSelecionada}:</strong> ${classes[classeSelecionada]}</p>`;
        botaoIniciar.style.display = "block";
    });
});

botaoIniciar.addEventListener("click", function(){
    aventura.style.display = "block";
    botaoIniciar.style.display = "none";
})

botaoOpcao1.addEventListener("click", function(){
    if(classeSelecionada === "Guerreiro"){
        textoAventura.innerText = "O Guerreiro segue pela trilha e encontra um grupo de bandidos. Ele se prepara para a batalha!"
    } else if (classeSelecionada === "Mago"){
        textoAventura.innerText = "O Mago sente uma forte energia na trilha. Ele percebe que está perto de uma torre mágica!"
    }else{
        textoAventura.innerText = "O Arqueiro segue a trilha silenciosamente e avista um inimigo, preparando seu arco."
    }
});

botaoOpcao2.addEventListener("click", function(){
    if(classeSelecionada === "Guerreiro"){
        textoAventura.innerText = "O Guerreiro explora o rio e encontra uma caverna. Algo brilha no fundo...";
    } else if (classeSelecionada === "Mago"){
        textoAventura.innerText = "O Mago vê reflexos estranhos no rio e descobre um antigo livro de feitiços.";
    }else{
        textoAventura.innerText = "O Arqueiro segue o rio e percebe pegadas na lama. Ele se prepara para rastrear.";
    }
});

