function checkValidity() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var streetAddress = document.getElementById("streetAddress");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var postalCode = document.getElementById("postalCode");
    var phone = document.getElementById("phone");
    var firstName2 = document.getElementById("firstName2");
    var lastName2 = document.getElementById("lastName2");
    var streetAddress2 = document.getElementById("streetAddress2");
    var city2 = document.getElementById("city2");
    var province2 = document.getElementById("province2");
    var postalCode2 = document.getElementById("postalCode2");
    var phone2 = document.getElementById("phone2");
    if (!firstName.checkValidity()) {
        firstName.setCustomValidity("The First name field can not be empty");
        firstName.reportValidity();
    } else if (!lastName.checkValidity()) {
        lastName.setCustomValidity("The Last name field can not be empty");
        lastName.reportValidity();
    }
}

function checkingSame() {
    var checkBox = document.getElementById("checksame");

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var streetAddress = document.getElementById("streetAddress");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var postalCode = document.getElementById("postalCode");
    var phone = document.getElementById("phone");
    var firstName2 = document.getElementById("firstName2");
    var lastName2 = document.getElementById("lastName2");
    var streetAddress2 = document.getElementById("streetAddress2");
    var city2 = document.getElementById("city2");
    var province2 = document.getElementById("province2");
    var postalCode2 = document.getElementById("postalCode2");
    var phone2 = document.getElementById("phone2");

    if (checkBox.checked == true) {
        firstName2.value = firstName.value;
        lastName2.value = lastName.value;
        streetAddress2.value = streetAddress.value;
        city2.value = city.value;
        province2.value = province.value;
        postalCode2.value = postalCode.value;
        phone2.value = phone.value;
    } else {
        firstName.value = "";
        lastName.value = "";
        streetAddress.value = "";
        city.value = "";
        province.value = "";
        postalCode.value = "";
        phone.value = "";
    }
}
var checkBox = document.getElementById("checksame");
checkBox.addEventListener("click", checkingSame, false);



//function checkValidity() {
//    if (document.getElementById("checksame").checked) {
//        document.getElementById("firstName2").value = document.getElementById("firstName").value;
//        document.getElementById("lastName2").value = document.getElementById("lastName").value;
//        document.getElementById("streetAddress2").value = document.getElementById("streetAddress").value;
//        document.getElementById("city2").value = document.getElementById("city").value;
//        document.getElementById("province2").value = document.getElementById("province").value;
//        document.getElementById("postalCode2").value = document.getElementById("postalCode").value;
//        document.getElementById("phone2").value = document.getElementById("phone").value;
//    } else {
//        document.getElementById("firstName2").value = "";
//        document.getElementById("lastName2").value = "";
//        document.getElementById("streetAddress2").value = "";
//        document.getElementById("city2").value = "";
//        document.getElementById("province2").value = "";
//        document.getElementById("postalCode2").value = "";
//        document.getElementById("phone2").value = "";
//    }
//}

//function checkValidity(info){
//    if (info.checkBox.checked == true) {
//        info.firstName2.value = info.firstName.value;
//        info.lastName2.value = info.lastName.value;
//        info.streetAddress2.value = info.streetAddress.value;
//        info.city2.value = info.city.value;
//        info.province2.value = info.province.value;
//        info.postalCode2.value = info.postalCode.value;
//        info.phone2.value = info.phone.value;
//    }
//    else {
//        info.firstName2.value = "";
//        info.lastName2.value = "";
//        info.streetAddress2.value = "";
//        info.city2.value = "";
//        info.province2.value = "";
//        info.postalCode2.value = "";
//        info.phone2.value = "";
//    }
//}