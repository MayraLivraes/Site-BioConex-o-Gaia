function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    
    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.título}</a>
                </h2>
                <p class="descrição-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Me siga no Instagram</a>
            </div> 
        `
    }
    
    section.innerHTML = resultados   
}