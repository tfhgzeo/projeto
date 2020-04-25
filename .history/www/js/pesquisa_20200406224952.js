onLoadFunction();

function buscaProdutos() {

    var parametro = parametroPesquisa();

    var db = firebase.firestore();

    db.collection("produtos")
        .get().then((snapshot) => {

            var docs = snapshot.docs;

            for (var i = 0; i < docs.length; i++) {
                console.log(docs[i].data().produto);
                var produto = docs[i].data().produto;

                console.log(produto.split(" "));
                var arrayProduto = [arrayProduto, produto.split(" ")];
            }
        })

}

function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}