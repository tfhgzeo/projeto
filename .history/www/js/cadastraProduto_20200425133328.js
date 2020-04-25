function cadastraProduto(objetoProduto) {
    var nomeProduto = objetoProduto.nome;
    var descricaoProduto = objetoProduto.descricao;
    var precoProduto = objetoProduto.preco;
    var uid = objetoProduto.uid;

    var db = firebase.firestore();

    db.collection("produtos").add({
        produto: nomeProduto,
        descricao: descricaoProduto,
        preco: precoProduto,
        loja: uid
    }).then(() => {
        console.log("produto cadastrado com sucesso na coleção de produto");
        console.log("Adicionando relação do produto com a loja");
        alert("Produto cadastrado com Sucesso")
    }).catch((e) => {
        var errorCode = e.code;
        var errorMessage = e.message;

        console.log(errorMessage);
        console.log("Codigo de erro: ", errorCode);
    })



}