function buscaProdutos() {

    var parametro = parametro();

    console.log(parametro);


}

function parametro() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("pesquisa");

    return produtoId;
}