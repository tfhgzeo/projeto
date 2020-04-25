onLoadFunction();

function buscaProdutos() {

    var parametro = parametroPesquisa();

    var db = firebase.firestore();

    db.collection("produtos")
        .get().then((snapshot) => {

            var docs = snapshot.docs;

            for (var i = 0; i < docs.length; i++) {
                var produto = docs[i].data().produto;

                var arrayProduto = [produto.split(" ")];

                var nomeSeparado = [{
                    "0": arrayProduto[0][0],
                    "1": arrayProduto[0][1],
                    "2": arrayProduto[0][2]
                }]

                console.log(nomeSeparado);


            }
        })

}

function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}