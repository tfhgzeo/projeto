onLoadFunction();

buscaProdutos();

function buscaProdutos() {

    var parametro = parametroPesquisa();
    var parametroSplit = parametro.split(" ");
    var tamanhoParametro = parametroSplit.length;

    if (tamanhoParametro > 1) {
        parametroComposto(parametro);
    } else {
        console.log("Paramentro simples");

        var db = firebase.firestore();

        db.collection("produtos")
            .get().then((snapshot) => {

                var docs = snapshot.docs;

                var arrayProduto;
                for (var i = 0; i < docs.length; i++) {
                    var produto = docs[i].data().produto;
                    var id = docs[i].id;

                    arrayProduto = produto.split(" ");
                    arrayProduto.forEach(element => {

                        if (element.toLowerCase() == parametro.toLowerCase()) {
                            adicionaProduto(id);
                        } else {}
                    });

                }
            })

    }


}

function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var parametro = url.searchParams.get("pesquisa");

    return parametro;
}

function adicionaProduto(id) {

    var db = firebase.firestore();

    db.collection("produtos").doc(id)
        .get().then((doc) => {

            if (doc.exists) {

                var produto = doc.data().produto;
                alert(produto);


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
}

function parametroComposto(parametro) {

    var parametroComposto = parametro.split(" ");
    console.log(parametroComposto);


}