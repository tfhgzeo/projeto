onLoadFunction();

function buscaProdutos() {

    var parametro = parametroPesquisa();

    var db = firebase.firestore();

    console.log(db.collection("produtos").docs());

}

function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}