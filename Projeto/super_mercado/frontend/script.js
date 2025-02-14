const API_URL_Pd = "http://localhost:5000/api/produtos";
const API_URL_Au = "http://localhost:5000/api/usuarios";

$(document).ready(function(){

    $("#cadastroForm").submit(function(e){
        e.preventDefault();

        $.ajax({
            url: "http://localhost:5000/api/usuarios/register",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                nome: $("#nome").val(),
                senha: $("#senha").val(),
                email: $("#email").val()
            }),
            success: function(response){
                alert("Cadastro relizado com sucesso!");
                window.location.href = "login.html";
            },
            error: function(err){
                alert("Erro ao Cadastrar" + err.responseJSON.error);
            }
        });
    });

    $("#loginForm").submit(function(e){
        e.preventDefault();

        $.ajax({
            url: "http://localhost:5000/api/usuarios/login",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: $("#email").val(),
                senha: $("#senha").val()
            }),
            success: function(response){
                alert("Login relizado com sucesso!");
                window.location.href = "index.html";
            },
            error: function(err){
                alert("Error no login: " + err.responseJSON.error);
            }
        });

    });
    

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
            $.get(API_URL_Pd, function(produtos){
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
                url: API_URL_Pd + "/" + $(this).data("id"),
                type: "DELETE",
                success: carregarProdutos
            });
        });

        carregarProdutos();
    }

});