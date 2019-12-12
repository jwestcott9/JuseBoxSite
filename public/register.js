let email = document.getElementById("email").value
let businessName = document.getElementById("businessName").value ;
function check (){
    event.preventDefault()


    let email = document.getElementById("email").value
    let businessName = document.getElementById("businessName").value ;
    let address = document.getElementById("address").value;
    let numberOfUnits = document.getElementById('numberOfUnits').value;
    let description = document.getElementById('description').value;

    let vendorInfo = {};

    vendorInfo.email = email;
    vendorInfo.businessName = businessName;
    vendorInfo.address = address;
    vendorInfo.numberOfUnits = numberOfUnits;
    vendorInfo.description = description;

    console.log(vendorInfo);

    addNewVendor(vendorInfo)
}



