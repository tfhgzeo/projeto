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

function adicionaProduto() {
    var db = firebase.firestore();

    db.collection("produto").doc(id).get().then((snapshot) => {
        console.log(snapshot.data());

    })
}