$(document).ready(function(){
    let produtos = [];

    function renderizarTabela(){
        $("#tableProdutos").empty();

        produtos.forEach((produtos, index) =>{
            $("#tableProdutos").append(`
                <tr>
                    <td>${produtos.nome}</td>
                    <td>${produtos.quantidade}</td>
                    <td>
                        <button class="btn btn-danger" onclick="removerProduto(${index})">Remover</button>
                    </td>
                </tr>
                `)
        });
    };

    window.removerProduto = function(index){
        produtos.splice(index, 1);
        renderizarTabela();
    };

    $("#formProduto").submit(function(event){
        event.preventDefault();

        const nome = $("#nomeProduto").val();
        const quantidade = $("#quantidadeProduto").val();

        if(nome && quantidade){
            produtos.push({nome, quantidade});

            renderizarTabela();

            $("#formProduto")[0].reset;
        }else{
            alert("Por Favor, Preencha todos os campos!");
        }
    });
});