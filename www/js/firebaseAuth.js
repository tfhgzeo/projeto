function createUser(email, password, user) {

    var db = firebase.firestore();

    db.collection("users").where("login", "==", name)
        .get()
        .then(function (snapshot) {
            if (snapshot.empty) {
                console.log("Nome de Usuario disponivel");
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(data => {
                        const uid = data.user.uid;

                        const users = firebase.firestore().collection('users');
                        users.doc(uid).set({
                            email: email, name: user, uid
                        });

                        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                            .then(function () {

                                firebase.auth().signInWithEmailAndPassword(email, password)
                                    .then(function () {

                                        adicionandoDados();

                                    })
                                    .catch(function (error) {

                                        // Mensagens de Erro
                                        var errorCode = error.code;
                                        var errorMessage = error.message;
                                        console.log(errorMessage + " Code: " + errorCode);

                                    });
                            })
                            .catch(function (error) {

                                // Mensagens de Erro
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log(errorMessage + " Code: " + errorCode);

                            });
                    })
                    .catch(function (error) {

                        // Mensagens de Erro
                        var errorCode = error.code;
                        var errorMessage = error.message;

                        console.log(errorMessage + " Code: " + errorCode);

                    });

            } else {
                console.log("Nome de usuario ja em uso");

            }
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage + " Code: " + errorCode);
        });


}

function login(email, senha) {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {

            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then(function () {

                    console.log("login realizado com sucesso");

                    window.location.href = "index.html";

                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.error(errorMessage + " Code: " + errorCode);

                    if (errorCode == "auth/invalid-email") {

                        verificaLogin(email)

                    }

                });

        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.error(errorMessage + " Code: " + errorCode);

        });
}

function sair() {
    firebase.auth().signOut().then(function () {
        console.log("usuario deslogado");
        window.location.reload();
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorMessage + " Code: " + errorCode);
    });
}

function verificaLogin(user) {

    let db = firebase.firestore();

    db.collection("users").where("login", "==", user)
        .get()
        .then((snapshot) => {
            var doc = snapshot.docs[0];
            console.log(doc);
            let email = doc.data().email;
            let senha = document.querySelector("#senha").value;
            console.log(email);

            login(email, senha);
        })
}

function usuarioLogado() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Usuario logado");
        } else {
            window.location.href = "login.html"
        }
    });
}