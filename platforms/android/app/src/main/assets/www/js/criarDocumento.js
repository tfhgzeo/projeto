function adicionarDocumento(nome, email, endereco, dataDeNacimento, cpf, uid, login) {
    
    var db = firebase.firestore();

    db.collection("users").doc(uid).set({
        nome: nome,
        email: email,
        endereco: endereco,
        dataDeNacimento: dataDeNacimento,
        cpf: cpf,
        id: uid,
        login: login

        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}