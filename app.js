function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
       section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma receita</p>" 
       return
    }

    campoPesquisa = campoPesquisa.toLowerCase() 

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento 
            resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descricao-meta">${dado.descricao}</p> 
                <a href=${dado.link} target="_blank">Mais informações</a> 
            </div> 
            `;
        }  
        // Cria uma nova div para cada resultado
        
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}