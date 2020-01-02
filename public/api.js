
let database;


// warning for this kind of call if there are ever two of the same addresses inputed it will throw an error and likely crash the server
// to fix this issue one will have to make a call on the front end to see if the address already exists in the database... if so 
// the call should be to update a current address information
function addNewVendor (vendorInfo){
    const firebaseConfig = {
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
// Authentication will become more and more neccesary for this company website. 
