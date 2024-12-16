document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Camiseta Básica", price: "R$ 20,00", img: "../../images/camiseta.webp" },
        { id: 2, name: "Camiseta Feminina", price: "R$ 30,00", img: "../../images/camisetafeminina.webp" },
        { id: 3, name: "Conjunto Feminino", price: "R$ 40,00", img: "../../images/conjuntofeminino.webp" },
        { id: 4, name: "Conjunto Liso", price: "R$ 50,00", img: "../../images/conjunto-liso.webp" },
        { id: 5, name: "Moletom Masculino", price: "R$ 60,00", img: "../../images/moletommasc.webp" },
        { id: 6, name: "Vestido Casual", price: "R$ 70,00", img: "../../images/vestido.webp" },
        { id: 7, name: "Camisa Social", price: "R$ 80,00", img: "../../images/camisa.webp" },
        { id: 8, name: "Jaqueta Jeans", price: "R$ 90,00", img: "../../images/jaquetajeans.webp" },
        { id: 9, name: "Macacão Colorido", price: "R$ 100,00", img: "../../images/macacaocolorido.webp" },
        { id: 10, name: "Macacão Feminino", price: "R$ 110,00", img: "../../images/macacaofem.webp" },
    ];

    const productContainer = document.querySelector("#products-page .row");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">ID: ${product.id}</p>
                    <p class="card-text">Preço: ${product.price}</p>
                </div>
            </div>
        `;

        productContainer.appendChild(productCard);
    });
});