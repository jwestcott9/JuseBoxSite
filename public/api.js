
let database;


// warning for this kind of call if there are ever two of the same addresses inputed it will throw an error and likely crash the server
// to fix this issue one will have to make a call on the front end to see if the address already exists in the database... if so 
// the call should be to update a current address information
// a check needs to be made on the front end that checks to see if the address inputed has ".", "#", "$", "[", or "]" it cannot.
function addNewVendor (vendorInfo){
    let firebaseConfig = {
        apiKey: "AIzaSyDaQOoyguuNsFWelJ_Y6MXTpm_vk7Mn6Wg",
        authDomain: "jusebox-ad0be.firebaseapp.com",
        databaseURL: "https://jusebox-ad0be.firebaseio.com",
        projectId: "jusebox-ad0be",
        storageBucket: "jusebox-ad0be.appspot.com",
        messagingSenderId: "171439509082",
        appId: "1:171439509082:web:a7cd50665b50b2b38d5263",
        measurementId: "G-LS8YGM7CLS"
      };
      // Initialize Firebase
    
firebase.initializeApp(firebaseConfig);
database = firebase.database();
    console.log("ApI call" +vendorInfo.email)
    database.ref('vendors/' + vendorInfo.address).push(vendorInfo).then(function(){
        location.reload();
    })

   
}

function checkUsers (email){
    let firebaseConfig = {
        apiKey: "AIzaSyDaQOoyguuNsFWelJ_Y6MXTpm_vk7Mn6Wg",
        authDomain: "jusebox-ad0be.firebaseapp.com",
        databaseURL: "https://jusebox-ad0be.firebaseio.com",
        projectId: "jusebox-ad0be",
        storageBucket: "jusebox-ad0be.appspot.com",
        messagingSenderId: "171439509082",
        appId: "1:171439509082:web:a7cd50665b50b2b38d5263",
        measurementId: "G-LS8YGM7CLS"
      };
      firebase.initializeApp(firebaseConfig); 
      database = firebase.database()
      database.ref('/users').once('value').then(function(snapshot){
          console.log(snapshot);
      })

}

function addNewUser (userInfo){
    let firebaseConfig = {
        apiKey: "AIzaSyDaQOoyguuNsFWelJ_Y6MXTpm_vk7Mn6Wg",
        authDomain: "jusebox-ad0be.firebaseapp.com",
        databaseURL: "https://jusebox-ad0be.firebaseio.com",
        projectId: "jusebox-ad0be",
        storageBucket: "jusebox-ad0be.appspot.com",
        messagingSenderId: "171439509082",
        appId: "1:171439509082:web:a7cd50665b50b2b38d5263",
        measurementId: "G-LS8YGM7CLS"
      };

      firebase.initializeApp(firebaseConfig); 
      database = firebase.database()
      console.log("printing new user info to firebase" + userInfo);
      database.ref('users/'+ userInfo.name).push(userInfo).then(function(){
          console.log(userInfo);
          location.reload();
      })
}
// Authentication will become more and more neccesary for this company website. 
