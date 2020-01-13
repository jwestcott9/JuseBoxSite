

    $('#subscribe').on("click", function(){
        event.preventDefault();
        var name = $('#defaultSubscriptionFormName').val()
        var email = $('#defaultSubscriptionFormEmail').val();    
        postUserToDatabase(email, name);
       
     })


function postUserToDatabase(email, name){
   
    console.log(email, name)
    let newUser = 
    {
        email: email,
        name: name
    }
    // checkUsers();
    addNewUser(newUser);
}

