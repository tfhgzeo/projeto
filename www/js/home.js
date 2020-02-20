onLoadFunction();

var card = document.querySelectorAll(".card");

for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        window.location.href = "index.html";
    })
}

var db = firebase.firestore();

var produtosRef = db.collection("produtos");

produtosRef.where("nome", "==", "Iphone 11")
    .get()
    .then(function (snapshot) {
        snapshot.forEach(function (doc) {
            console.log(doc.id, ' => ', doc.data());
            document.querySelector(".card-title").textContent = doc.data();
        })
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });