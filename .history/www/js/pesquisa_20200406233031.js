onLoadFunction();

function buscaProdutos() {

    var parametro = parametroPesquisa();

    var db = firebase.firestore();

    db.collection("produtos")
        .get().then((snapshot) => {

            var docs = snapshot.docs;

            var arrayProduto;
            var objetoProduto;
            for (var i = 0; i < docs.length; i++) {
                var produto = docs[i].data().produto;

                arrayProduto = produto.split(" ");
                console.log(arrayProduto);
                arrayProduto.forEach(element => {
                    if (element == parametro) {
                        pesquisa bate
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