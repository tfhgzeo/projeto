/* Funçao de click para todos os cards */
function cardClicavel() {
    var cards = document.querySelectorAll(".card"); /* Cria uma variavel de todos os cards na tela */
    var cardId = document.querySelectorAll(".nomeProduto");

    for (var i = 0; i < cards.length; i++) {
        var id = cardId[i].id;
        console.log(id);

    }
}

function criarCards() {
    let db = firebase.firestore();
    console.log(db);
    
    let produtosRef = db.collection("produtos");

    produtosRef
        .get()
        .then(function (snapshot) {
            var tamanho = snapshot.size;
            for (var x = 0; x < tamanho; x++) {
                var doc = snapshot.docs[x];
                adiconarCard(doc.data().produto, doc.data().descricao, doc.data().preco, doc.data().img, doc.data().id);
            }
            cardClicavel();
        })
}