/* Funçao de click para todos os cards */
function cardClicavel() {
    var card = document.querySelectorAll(".card"); /* Cria uma variavel de todos os cards na tela */

    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function () {
            window.location.href = "index.html";
        })
    }
}


function cardInformations() {
    var db = firebase.firestore(); /* Variavel do Firesore (Banco de dados ) */


    var produtosRef = db.collection("produtos");

    produtosRef.where("nome", "==", "Iphone 11")
        .get()
        .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                document.querySelector(".card-title").textContent = doc.data().nome;

                var img = document.querySelector(".card-img");
                var imgUrl = doc.data().img;
                img.src = imgUrl;

                var descricao = doc.data().descricao;
                var cardDescription = document.querySelector(".descricaoProduto");
                cardDescription.textContent = descricao;

                var preco = doc.data().preco;
                var cardPreco = document.querySelector(".precoProduto");
                cardPreco.textContent = "R$ " + preco;

           })
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

        cardClicavel(); 
    
}

function cardtest() {
    var db = firebase.firestore(); /* Variavel do Firesore (Banco de dados ) */

    var produtosRef = db.collection("produtos").where("nome", "==", "Iphone 11");
    var tamanhoDoBanco = produtosRef.length;
    console.log(tamanhoDoBanco);
    
    
    for(var x = 0; x < tamanhoDoBanco; x++){
        console.log(produtosRef.get);
    }
    
}