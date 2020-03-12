// Initializa o Firebase
function onLoadFunction(){
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore()
}