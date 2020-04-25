onLoadFunction();

document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector(".divLocalizacao").style.display = "none";

    var cesta = document.querySelector("#cesta");
    cesta.addEventListener("click", () => {
        window.location.href = "cesta.html";
    })

    var localiza = document.querySelector(".localizacao");
    localiza.addEventListener("click", () => {
        var divLocalizacao = document.querySelector(".divLocalizacao").style.display;

        if (divLocalizacao == "none") {
            document.querySelector(".divLocalizacao").style.display = "block";
        } else {
            document.querySelector(".divLocalizacao").style.display = "none";
        }

    });


    var pesquisar = document.querySelector(".pesquisa");
    pesquisar.addEventListener("click", () => {

        var divPesquisa = document.querySelector(".divPesquisa");
        divPesquisa.classList.add("mostrar");

        var topBar = document.querySelector(".topBar");
        topBar.classList.add("sumir");

        var inputPesquisa = document.querySelector("#pesquisa");
        inputPesquisa.focus();

    })

    var cancelar = document.querySelector(".cancelar");
    cancelar.addEventListener("click", () => {

        var topBar = document.querySelector(".topBar");
        topBar.classList.remove("sumir");

        var divPesquisa = document.querySelector(".divPesquisa");
        divPesquisa.classList.remove("mostrar");
    })


    criarCards();

    console.log("Pagina Carregada com Sucesso");

})