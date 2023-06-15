// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBk2qp6QQ1Yrh6J_lXo75ehjF6SoALi-dc",

    authDomain: "admin-login-cbb49.firebaseapp.com",
  
    projectId: "admin-login-cbb49",
  
    storageBucket: "admin-login-cbb49.appspot.com",
  
    messagingSenderId: "738121297913",
  
    appId: "1:738121297913:web:68be53bef06ec77bc6d728"
  
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Added to databse" )
            // console.log(result)
            // ...
        })
        .catch((error) => {
           
            alert("Error" )
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            // document.write("You are Signed In" )
            window.location.assign("./auth.html");

            // console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert("Error")
        });
}