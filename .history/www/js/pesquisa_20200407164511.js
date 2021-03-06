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
                var produtoDiv = document.querySelector(".produtos");

                var produto = document.createElement("div");
                produto.id = id;

                produtoDiv.appendChild(produto);


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
}

function parametroComposto(parametro) {

    const produtos = undefined;

    var parametroComposto = parametro.split(" ");
    parametroComposto.forEach(element => {

        var db = firebase.firestore();
        db.collection("produtos")
            .get().then((snapshot) => {

                var parametro = element;
                var docs = snapshot.docs;

                for (var i = 0; i < docs.length; i++) {
                    var produto = docs[i].data().produto;
                    var id = docs[i].id;

                    arrayProduto = produto.split(" ");
                    arrayProduto.forEach(element => {
                        if (element.toLowerCase() == parametro.toLowerCase()) {
                            console.log("Achou produto");

                            verificacao(id, produtos);

                        } else {

                        }
                    })
                }
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.error("Codigo de erro: ", errorCode);
                console.error(errorMessage);

            });
    })
}

function verificacao(id) {

    var produto = document.getElementById(id);
    console.log(produto);

    if (produto == null) {
        console.log("produto não adicionado");
        adicionaProduto(id);
    }

}