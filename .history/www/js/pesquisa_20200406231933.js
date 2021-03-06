onLoadFunction();

function buscaProdutos() {

    var parametro = parametroPesquisa();

    var db = firebase.firestore();

    db.collection("produtos")
        .get().then((snapshot) => {

            var docs = snapshot.docs;

            var arrayProduto = [{}];
            for (var i = 0; i < docs.length; i++) {
                var produto = docs[i].data().produto;

                objetoProdutos(arrayProduto)

            }
        })

}

function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}

function objetoProdutos() {

    if (arrayProduto === null) {
        log.error("Array of produto is null");
    }
}