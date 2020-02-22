function adiconarCard() {
    var container = document.querySelector(".container");

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

    var imgCard = document.createElement("div");
    imgCard.classList.add("card-img");
    imgCard.classList.add("h-25");

    var informationBox = document.createElement("div");
    informationBox.classList.add("col-md-8-teste");

    var cardInformationBody = document.createElement("div");
    cardInformationBody.classList.add("card-body");
    
    var cardTitle = document.createElement("div"); 
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("nomeProduto")

    var cardDescription = document.createElement("div");
    cardDescription.classList.add("card-text");
    cardDescription.classList.add("descricaoProduto");

    var cardPreco = document.createElement("div");
    cardPreco.classList.add("card-text");
    cardPreco.classList.add("precoProduto");

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

}