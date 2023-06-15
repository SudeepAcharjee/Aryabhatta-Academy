// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBumj6j7jBrkGcj20obWFMvAEVpa1RiT98",

authDomain: "crud-student-87b1c.firebaseapp.com",

databaseURL: "https://crud-student-87b1c-default-rtdb.firebaseio.com",

projectId: "crud-student-87b1c",

storageBucket: "crud-student-87b1c.appspot.com",

messagingSenderId: "465440359250",

appId: "1:465440359250:web:33e32b886c6bb69704f08b"
  
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
            window.location.assign("../onlineschool/class.html");

            // console.log(result)
        })
        .catch((error) => {
            alert("Error")
        });
}
