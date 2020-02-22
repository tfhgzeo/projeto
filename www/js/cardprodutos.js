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

    produtosRef.where("nome", "==", " 11")
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

function criarCards() {
    let db = firebase.firestore();

    let produtosRef = db.collection("produtos").limit(3);

    produtosRef
        .get()
        .then(function (snapshot) {
            var tamanho = snapshot.size;
            for (var x = 0; x < tamanho; x++) {
                console.log(snapshot.docs[x]);
                var doc = snapshot.docs[x];
            }

            for(var x = 0; x < 1; x++){
                var doc = snapshot.docs[x];

                adiconarCard(doc.produto, doc.descricao, doc.preco, doc.img)
            }
        })
}

function cardtest() {
    let db = firebase.firestore(); /* Variavel do Firesore (Banco de dados ) */

    let produtosRef = db.collection("produtos").limit(3);

    produtosRef
        .get()
        .then(function (snapshot) {
            var tamanho = snapshot.size;
            console.log(tamanho)
            for (var x = 0; x < tamanho; x++) {
                console.log(snapshot.docs[x].data().produto);
            }

        })
}