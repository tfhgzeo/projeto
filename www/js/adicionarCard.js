function adiconarCard(produto, descricao, preco, img, id) {
    var cards = document.querySelector(".cards");

    var container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("cardTop");

    var rowPrimary = document.createElement("div")
    rowPrimary.classList.add("row");

    var cardBody = document.createElement("div")
    cardBody.classList.add("card");
    cardBody.classList.add("mb-3")
    cardBody.style = "max-width: 540px;";

    var rowSecundary = document.createElement("div");
    rowSecundary.classList.add("row");
    rowSecundary.classList.add("no-gutters");

    var imgBox = document.createElement("div");
    imgBox.classList.add("col-md-4-teste");

    var imgCard = document.createElement("img");
    imgCard.classList.add("card-img");
    imgCard.classList.add("h-25");
    imgCard.src = img;

    var informationBox = document.createElement("div");
    informationBox.classList.add("col-md-8-teste");

    var cardInformationBody = document.createElement("div");
    cardInformationBody.classList.add("card-body");

    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("nomeProduto")
    cardTitle.textContent = produto;
    cardTitle.id = id;

    var cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.classList.add("descricaoProduto");
    cardDescription.textContent = descricao;

    var cardPreco = document.createElement("p");
    cardPreco.classList.add("card-text");
    cardPreco.classList.add("precoProduto");
    cardPreco.textContent = "R$ " + preco;

    /* Adicionando as informações ao card */
    cardInformationBody.appendChild(cardTitle);
    cardInformationBody.appendChild(cardDescription);
    cardInformationBody.appendChild(cardPreco);
    informationBox.appendChild(cardInformationBody);

    /* Adicionando img a imgBox */
    imgBox.appendChild(imgCard);

    /* Adiconando a imagem e as informalções a box do card */
    rowSecundary.appendChild(imgBox);
    rowSecundary.appendChild(informationBox);

    /* Adcionando imagem e informações ao card */
    cardBody.appendChild(rowSecundary);
    rowPrimary.appendChild(cardBody);

    /* Adicionando o card ao Container */
    container.appendChild(rowPrimary);
    cards.appendChild(container);
}