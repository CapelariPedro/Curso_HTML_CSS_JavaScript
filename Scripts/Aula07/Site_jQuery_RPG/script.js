$(document).ready(function(){
    const botoesClasse = $(".classe");
    const descricaoClasse = $("#descricaoClasse");
    const botaoMostrarMissoes = $("#mostrarMissoes");
    const missoes = $("#missoes");
    const missoesAtivas = $("#missoesAtivas");
    const listaMissoesAtivas = $("#listaMissoesAtivas");

    let classeSelecionada = "";

    const classes = {
        "Guerreiro": "🛡️ O Guerreiro é forte e resistente, especialista em combate corpo a corpo.",
        "Mago": "🔮 O Mago controla a magia e pode lançar feitiços poderosos.",
        "Arqueiro": "🏹 O Arqueiro é ágil e letal à distância, atacando com precisão."
    };

    botoesClasse.click(function(){
        classeSelecionada = $(this).data("classe");
        descricaoClasse.html(`<p><strong>${classeSelecionada}:</strong> ${classes[classeSelecionada]}</p>`);
        botaoMostrarMissoes.show();
    });

    botaoMostrarMissoes.click(function(){
        missoes.slideToggle();
    });

    $(".aceitarMissao").click(function(){
        let missao = $(this).parent().html().split("<button")[0];
        $(this).parent().fadeOut(300);
        listaMissoesAtivas.append(`<li>${missao} <button class="concluirMissao">Concluir</button></li>`)
        missoesAtivas.show();
    });

    $(document).on("click", ".concluirMissao", function(){
        $(this).parent().fadeOut(300, function(){
            $(this).remove();
            if($("#listaMissoesAtivas li").length === 0){
                missoesAtivas.hide();
            }
        });
    });

});