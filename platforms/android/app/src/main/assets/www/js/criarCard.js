function criarCards() {
    let db = firebase.firestore();

    let produtosRef = db.collection("produtos");

    produtosRef
        .get()
        .then(function (snapshot) {
            var tamanho = snapshot.size;
            for (var x = 0; x < tamanho; x++) {
                var doc = snapshot.docs[x];
                adiconarCard(doc.data().produto, doc.data().descricao, doc.data().preco, doc.data().img, doc.data().id);
            }
        })
}
