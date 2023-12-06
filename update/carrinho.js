// Recupera o carrinho do armazenamento local
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Exibe os produtos do carrinho
var cartProducts = document.getElementById("cartProducts");

function updateCartDisplay() {
    // Limpa o conteúdo atual do carrinho
    cartProducts.innerHTML = "";

    // Adiciona os produtos atualizados
    cart.forEach(function (product, index) {
        var cartProduct = document.createElement("div");
        cartProduct.className = "cart-product";
        cartProduct.innerHTML = `
            <img src="img/${product.name.toLowerCase().replace(' ', '-')}.png" alt="" style="width: 100%;">
            <h3 style="text-align: center;">${product.name}</h3>
            <p><b>${product.price}</b></p>
            <label for="productQuantity${index}">Quantidade:</label>
            <select id="productQuantity${index}" name="productQuantity${index}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onclick="removeFromCart(${index})">Remover do Carrinho</button>
        `;
        cartProducts.appendChild(cartProduct);
    });
}

// Exibe os produtos iniciais do carrinho
updateCartDisplay();

function addToCart(productName, productPrice) {
    var productId = "product_" + Date.now(); // Cria um ID único para o produto
    cart.push({ id: productId, name: productName, price: productPrice });

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualiza a exibição do carrinho
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualiza a exibição do carrinho
    updateCartDisplay();
}