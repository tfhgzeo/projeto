onLoadFunction();

//barra
var uploader = document.getElementById('uploader');

//botão
var fileButton = document.getElementById('fileButton');

//listen for file selection
fileButton.addEventListener('change', function (e) {

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
            uploader.value = progress;
            console.log("o envio do arquivo está em " + progress + "%");
        },

        function error(err) {

        },


        function complete() {
            alert("Envio concluido");

        }
    );
});

function pegaUrldaImg () {
    var id = "vkPrCG9t5yZ8zo5fHTphiC9mxiK2.jpeg"
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef.child('produtosImg/' + id).getDownloadURL().then(function(url) {
        console.log(url);
        
    })

}