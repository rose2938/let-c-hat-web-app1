// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAwYmw8qK2VnLWiUB2-sAUd7B_z_4Q4uAQ",
    authDomain: "lets-chat-web-app-8232b.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-8232b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-8232b",
    storageBucket: "lets-chat-web-app-8232b.appspot.com",
    messagingSenderId: "767695017853",
    appId: "1:767695017853:web:613c1fca4c8f33adbb1e14"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";

}



