function parametroPesquisa() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}

function buscaProdutos() {

    var parametro = parametroPesquisa();

    console.log(parametro);


}