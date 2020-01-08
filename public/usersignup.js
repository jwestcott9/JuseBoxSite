
function checkdatabase(email, name){

    console.log('I was hit');
    console.log(email);
    $.get("/checkdatabase/"+email, function(data, status){
        console.log(data, status);

        if(data === true){
            alert("this email exists already")
            return true 
            
        }else{
            alert("Thank you " +name +"!")
            posttodatabase(email, name)
            $('#defaultSubscriptionFormName').val('');
            $('#defaultSubscriptionFormEmail').val('');
           
            
           
        }
    })
}



function posttodatabase(email, name){
    console.log('posting to database');
    let newuser = {
        email: email, 
        name: name}
  
    $.post("/postUser", {
        name: name,
        email: email
    }, function(data, status){
        // reload();
        console.log( data, status);
      
    }).then(function(){
    
    })
}


$('#subscribe').on("click", function(){

   var name = $('#defaultSubscriptionFormName').val()
   var email = $('#defaultSubscriptionFormEmail').val();    
   checkdatabase(email, name);
   
})

$("#getusers").on("click", function(){

    $.get('getall').then(function(users){
       users.forEach((element)=>{
           console.log(element);
           $("#printhere").append(
           "<div>"+"name:  "+element.name+ "           email:"+ element.email+"</div>"
           )
       })
    })

})


