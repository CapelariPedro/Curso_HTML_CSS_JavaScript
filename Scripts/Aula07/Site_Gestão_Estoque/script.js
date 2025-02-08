$(document).ready(function(){
    let robos = []; //Array ou vetor que armazena os robôs por meio de documentos
    let roboEditadoIndex = null; // Para o robo que está sendo editado

    $("#formRobo").submit(function(event){
        event.preventDefault();

        let modelo = $("#modelo").val();
        let quantidade = $("#quantidade").val();
        let fabricante = $("#fabricante").val();

        if(modelo && quantidade && fabricante){
            robos.push({modelo, quantidade, fabricante});
            atualizarTabela();
            $("#formRobo")[0].reset();
        }
    });


    function atualizarTabela(){
        $("#tabelaRobos").empty();

        robos.forEach((robo, index) => {
            $("#tabelaRobos").append(`
                    <tr>
                        <td>${robo.modelo}</td>
                        <td>${robo.quantidade}</td>
                        <td>${robo.fabricante}</td>
                        <td>
                            <button class="edit" data-index="${index}">Editar</button>
                            <button class="delete" data-index="${index}">Deletar</button>
                        </td>
                    </tr>
            `);
        });
    }

    $(document).on("click", ".edit", function(){
        let index = $(this).data("index");
        roboEditadoIndex = index;
        let robo = robos[index];

        $("#editModelo").val(robo.modelo);
        $("#editQuantidade").val(robo.quantidade);
        $("#editFabricante").val(robo.fabricante);
        $("#modalEdicao").fadeIn();
    });
    

    $(document).on("click", ".delete", function(){
        let index = $(this).data("index");
        robos.splice(index, 1);
        atualizarTabela();
    });

    $("#fecharModal").click(function(){
        $("#modalEdicao").fadeOut();
    });

    $("#salvarEdicao").click(function(){
        if(roboEditadoIndex !== null){
            robos[roboEditadoIndex].quantidade = $("#editQuantidade").val();
            robos[roboEditadoIndex].fabricante = $("#editFabricante").val();

            atualizarTabela()
            $("#modalEdicao").fadeOut();
        }
    });
});