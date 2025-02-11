$(document).ready(function(){

    let lutadores = [];
    let chaves = [];

    function gerarChaves(){
        chaves = [];

        for(let i = 0; i< lutadores.length; i += 2){
            if(lutadores[i + 1]){
                chaves.push([lutadores[i], lutadores[i + 1]]);
            }else{
                chaves.push([lutadores[i], "BYE"]);
            }
        }

        renderizarChaves();
    };

    function renderizarChaves(){
        $("#tabelaChaves").empty();
        chaves.forEach((chaves, index) =>{
            $("#tabelaChaves").append(`
                <tr>
                    <td>${chaves[0]}</td>
                    <td>${chaves[1]}</td>
                    <td>
                        <button class="btn btn-warning" onclick="editarChave(${index})">Editar</button>
                        <button class="btn btn-danger" onclick="removerChave(${index})">Remover</button>
                    </td>
                </tr>
                `);
        });
    };

    window.editarChave = function(index){
        const novoLutador1 = prompt("Editar lutador 1:", chaves[index][0]);
        const novoLutador2 = prompt("Editar lutador 2:", chaves[index][1]);

        if(novoLutador1 && novoLutador2){
            chaves[index] = [novoLutador1, novoLutador2];
            renderizarChaves();
        }
    };

    window.removerChave = function(index){
        chaves.splice(index, 1);
        renderizarChaves();
    };

    $("#formLutador").submit(function(event){
        event.preventDefault();

        const nome = $("#nomeLutador").val();

        if(nome){
            lutadores.push(nome);

            $("#formLutador")[0].reset();

            alert("Lutador cadastrado com sucesso!")

            gerarChaves();
        }else{
            alert("Por favor preencha o campo Nome do Lutador");
        }
    });
});