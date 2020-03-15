function adicionandoDados() {
    var usuario = firebase.auth().currentUser;

    var nome = document.querySelector("#nome").value;
    var email = usuario.email;
    var endereco = document.querySelector("#endereco").value;
    var dataDeNacimento = document.querySelector("#data").value;
    var cpf = document.querySelector("#cpf").value;
    var uid = usuario.uid;
    var login = document.querySelector("#login").value;

    usuario.updateProfile({
        displayName: nome

    }).then(function () {

        console.log("Usuario atualizado");
        console.log(usuario.displayName);

        adicionarDocumento(nome, email, endereco, dataDeNacimento, cpf, uid, login);

    }).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        console.error(errorMessage + " Code: " + errorCode);
    })

}