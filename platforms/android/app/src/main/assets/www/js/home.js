onLoadFunction();

var card = document.querySelectorAll(".card");

for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        window.location.href = "index.html";
    })
}

var db = firebase.firestore();

db.collection("produtos").doc("Teste")
    .onSnapshot(function (doc) {
        console.log(" Nome do Produto: ", doc.data().nome);
    });


var produtosRef = db.collection("produtos");

produtosRef.where("nome", "==", "Iphone 11")
    .get()
    .then(function (snapshot) {
        snapshot.forEach(function (doc) {
            console.log(doc.id, ' => ', doc.data());
            document.querySelector(".card-title").textContent = doc.data().nome;
            
            var img = document.querySelector(".card-img");
            var imgUrl = doc.data().img;
            img.src = imgUrl;
            
            var descricao = doc.data().descricao;
            var cardDescription = document.querySelector(".card-text");
            cardDescription.textContent = descricao;

            var preco = doc.data().preco;
            var cardPreco = document.querySelector(".preco");
            cardPreco.textContent = "R$ "+preco;

        })
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });