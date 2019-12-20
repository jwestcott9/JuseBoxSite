

$('#subscribe').on("click", function(){
    console.log('javascript works');

   var name = $('#defaultSubscriptionFormName').val()
   var email = $('#defaultSubscriptionFormEmail').val();

   let user = {};

   user.name = name
   user.email = email;
    
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