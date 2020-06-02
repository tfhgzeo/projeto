onLoadFunction();

usuarioLogado();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var uid = user.uid;
        querryProdutos(uid);
    } else {
    }
});

function querryProdutos(uid) {
    let db = firebase.firestore();

    let produtosRef = db.collection("produtos")

    produtosRef.where("loja", "==", uid).get()
        .then((snapshot) => {
           for (let x = 0; x < snapshot.size; x++) {
                var doc = snapshot.docs[x];
                console.log(doc);
                adiconarCard(doc.data().produto, doc.data().descricao, doc.data().preco, doc.data().img, doc.data().id);
           }
            
    })
}