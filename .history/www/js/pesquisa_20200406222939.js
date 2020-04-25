function buscaProdutos() {

}

function idDoProduto() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var produtoId = url.searchParams.get("produto");

    return produtoId;
}