const API_URL = "http://localhost:5000/api/produtos";

$(document).ready(function(){

    $("#produtoForm").submit(function(e){
        e.preventDefault();

        $.ajax({
            url : "http://localhost:5000/api/produtos",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                nome: $("#nome").val(),
                quantidade: Number($("#quantidade").val()),
                preco: Number($("#preco").val())
            }),
            success: function(response){
                alert("Produto Cadastrado com sucesso!");
                console.log(response);
            },
            error: function(err){
                alert("Erro ao cadastrar produto");
                console.error(err);
            }
        });
    });

    if ($("#tabelaProdutos").length){
        function carregarProdutos(){
            $.get(API_URL, function(produtos){
                $("#tabelaProdutos").empty();
                produtos.forEach(produto =>{
                    $("#tabelaProdutos").append(`
                        <tr>
                            <td>${produto.nome}</td>
                            <td>${produto.quantidade}</td>
                            <td>${produto.preco}</td>
                            <td><button class="delete" data-id="${produto._id}">Excluir</button></td>
                        </tr>
                        `);
                });
            });
        }

        $(document).on("click", ".delete", function(){
            $.ajax({
                url: API_URL + "/" + $(this).data("id"),
                type: "DELETE",
                success: carregarProdutos
            });
        });

        carregarProdutos();
    }

});