function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("secao_reatores");
    // Limpa a seção antes de adicionar novos resultados
    let textoReatores = "";
    // Obtém o texto da pesquisa digitado pelo usuário
    let textoPesquisado = document.getElementById("barra_de_pesquisa").value;
    textoPesquisado = textoPesquisado.toLowerCase()

    // Itera sobre os dados dos reatores para encontrar os que correspondem à pesquisa
    for (let dado of dados) {
        titulo = dado.titulol.toLowerCase()
        caracteristica = dado.titulol.toLowerCase()
        if (titulo.includes(textoPesquisado) || caracteristica.includes(textoPesquisado)) {
            // Cria um novo elemento div para cada reator encontrado e adiciona as informações
            textoReatores += `
                <div class="coluna">
                    <img src=${dado.imagem} alt="" class="imagem">
                    <div class="reator">
                        <h3> ${dado.titulo} </h3>
                        <p><b>Funcionamento:</b> ${dado.funcionamento} </p>
                        <p><b>Características:</b> ${dado.caracteristica} </p>
                        <p><b>Vantavens:</b> ${dado.vantagens} </p>
                        <p><b>Desvantavens:</b> ${dado.desvantagens} </p>
                    </div>
                </div>`
        };
    };
    // Adiciona a div do reator à seção de resultados
    section.innerHTML = textoReatores;
};

function mostrar_dados_reator(topico) {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("secao_reatores");
    // Limpa a seção antes de adicionar novos resultados
    let textoReatores = "";
    // Obtém o texto da pesquisa digitado pelo usuário

    // Itera sobre os dados dos reatores para encontrar os que correspondem à pesquisa
    for (let dado of dados) {
        if (dado.titulo.includes(topico)) {
            // Cria um novo elemento div para cada reator encontrado e adiciona as informações
            textoReatores += `
                <div class="coluna">
                    <img src=${dado.imagem} alt="" class="imagem">
                    <div class="reator">
                        <h3> ${dado.titulo} </h3>
                        <p><b>Funcionamento:</b> ${dado.funcionamento} </p>
                        <p><b>Características:</b> ${dado.caracteristica} </p>
                        <p><b>Vantavens:</b> ${dado.vantagens} </p>
                        <p><b>Desvantavens:</b> ${dado.desvantagens} </p>
                    </div>
                </div>`
        };
    };
    // Adiciona a div do reator à seção de resultados
    section.innerHTML = textoReatores;
};
