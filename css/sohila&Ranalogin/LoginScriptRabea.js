const firebaseConfig = {
  apiKey: "AIzaSyDRHBxvzw47yYlknguhe8EM05K4NjmhZCs",
  authDomain: "prof-gym.firebaseapp.com",
  databaseURL: "https://prof-gym-default-rtdb.firebaseio.com",
  projectId: "prof-gym",
  storageBucket: "prof-gym.appspot.com",
  messagingSenderId: "367385144562",
  appId: "1:367385144562:web:9dc920e68af582ce6cb46b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

//Sign up
//Create an account Log in
$("#sign-btn")
  .click(function (e) {
    e.preventDefault();
    var user = $("#user").value;
    var Email = $("#Email").val();
    var password = $("#password").val();
    firebase
      .createUserWithEmailAndPassword(Email, password)
      .auth()
      .then((userCredential) => {
        // User data storage
        var user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: user,
          })
          .then(function () {
            // Update successful.
          })
          .catch(function (error) {
            // An error happened.
          });
      });


      
    // Signed in
    var user = userCredential.user;
    database
      .ref("user/" + user.uid).set(user_data)
      .set({ user: user, Email: Email, password: password });
    alert("User created successfully");
    $("#user").val("");
    window.location.href = "../webPages/LoginSo.html";
    $("#user").val("");
    // Entry generation
    $("#Email").val("");
    $("#password").val("");
  })
  .catch((error) => {
    var errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage);
    alert(errorMessage);
  });

//Login process

$("login-btn").click(function (e) {
  e.preventDefault();
  var Email = $("Email").val();
  var password = $("password").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(Email, password)
    .then((userCredential) => {
      //You have successfully logged in
      var user = userCredential.user;
      alert("done");
      //Data Silver
      $("Email").val("");
      $("password").val("");
      window.location.href = "../webPages/home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorMessage);
      alert(errorMessage);
    });
});