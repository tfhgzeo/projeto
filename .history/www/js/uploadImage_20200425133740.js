//listen for file selection
/* fileButton.addEventListener('change', function(e) {

    //obter arquivos
    var file = e.target.files[0];

    //essa variavel vai refenciar a imagem gerando um link no firebase
    var storageRef = firebase.storage().ref('produtosImg/' + "id");

    //metodo put serve pra fazer upload do arquivo
    var task = storageRef.put(file);
    //A variavel task foi usada para ter informações sobre o envio


    task.on('state_changed',
        function progress(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("o envio do arquivo está em " + progress + "%");
        },

        function error(err) {

        },


        function complete() {
            alert("Envio concluido");

        }
    );
}); */

function uplodadImg(produto) {

    var produtoObject = produto;

    var fieldImg = document.querySelector("#fotos");

    var file = fieldImg.files[0];

    var metadata = { contentType: file.type }

    var storageRef = firebase.storage().ref('produtosImg/' + file.name);

    var task = storageRef.put(file, metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            produto.image = url;

            console.log(obj);

            cadastraProduto(produtoObject);

        }).catch((error) => console.log(error));


}

function produtoObject() {
    const produto = {
        nome: "Iphone 11",
        preco: "5.000,00",
        descricao: "Uma descrição",
        endereco: "Rua catleias 13",
        image: ""
    }

    uplodadImg(produto);

}