// Função para carregar categorias dinamicamente
function carregarCategorias() {
    var categorias = ["Acessórios", "Calças", "Blusas", "Shorts", "Vestidos"];
    var dropdownContent = document.getElementById("categoriasDropdownContent");
    dropdownContent.innerHTML = "";

    categorias.forEach(function (categoria) {
        var link = document.createElement("a");
        link.href = categoria.toLowerCase() + ".html";
        link.textContent = categoria;
        link.addEventListener('click', function () {
            // Redirecione para a URL desejada
            window.location.href = link.href;
        });
        dropdownContent.appendChild(link);

        console.log("Link gerado para", categoria);
    });

    console.log("Função carregarCategorias chamada.");
}

document.addEventListener('DOMContentLoaded', function () {
    // Aguarde o carregamento do DOM

    // Adicione um ouvinte de clique ao link de Categorias
    document.getElementById('categoriasDropdown').addEventListener('mouseover', function () {
        // Log para verificar se o clique está sendo detectado
        console.log("Mouse sobre Categorias");

        // Adicione a classe "hover" para simular o evento de mouseover
        carregarCategorias();
    });
});