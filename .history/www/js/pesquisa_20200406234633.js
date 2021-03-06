onLoadFunction();

function buscaProdutos() {

    var parametro = parametroPesquisa();

    var db = firebase.firestore();

    db.collection("produtos")
        .get().then((snapshot) => {

            var docs = snapshot.docs;

            var arrayProduto;
            for (var i = 0; i < docs.length; i++) {
                var produto = docs[i].data().produto;
                var id = docs[i].id;

                arrayProduto = produto.split(" ");
                console.log(arrayProduto);
                arrayProduto.forEach(element => {
                    if (element == parametro) {
                        console.log("pesquisa bate");
                        adicionaProduto(id);
                    } else {
                        console.log("Presquisa não bate");
                    }
                });

            }
        })

}

function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}

function adicionaProduto(id) {
    console.log(id);

    var db = firebase.firestore();

    db.collection("produto").doc(id)
        .get().then((doc) => {
            console.log(doc.docs);

            if (doc.exists) {
                console.log("Document data:", doc.data());

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
}