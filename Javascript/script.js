$(document).ready(function () {


    let user = $('#Username');
    let pass = $('#Password');


    let photos = [];

    function add_Photo() {
        let photo = $('#Photo').val();
        photos.push(photo);
    }

    $('#Donatebtn').click(function () {
        add_Photo();
        $('#Photek').append("<img src=" + photos + " alt='Photo'>");

    });


    $('#Loginbtn').click(function () {

        if (user.val() == "Rider" && pass.val() == "123") {
            user_Type = "Rider";
            window.location.href = "E:/Files/New Web/Pages/Delivery.html";

        } else if (user.val() == "" && pass.val() == "") {
            alert("Please fill input feilds");
            $('#Username').focus();
        }
        else if (user.val() == "Admin" && pass.val() == "123") {
            window.location.href = "E:/Files/New Web/Pages/Admin.html";
            user_Type = "Admin";
        } else if (user.val() == "User" && pass.val() == "123") {
            window.location.href = "";
            user_Type = "User";
        } else {
            alert("Wrong Email & Password");
            $('#Username').val("");
            $('#Password').val("");
        }

        return user_Type;

    });

    $('#UserType input:checkbox').change(function () {
        $('#UserType input:checkbox').not(this).prop('checked', false);
    });

    // $('#Register').click(function(){
    //     let acoount = 0 ;

    //     if($('#Rider').is(':checked')) acoount = 1;
    //     else if ($('#Admin').is(':checked')) acoount =2 ;
    //     else if ($('#Receiver').is(':checked')) acoount =3 ;

    //     let User = $('#Username').val();
    //     let Pass = $('#Password').val();

    //     if(!User || !Pass){
    //         alert("Please fill in Username and Password");
    //         return;
    //     }

    //     if(acoount == 1){
    //         rider_User.push(User);
    //         rider_Pass.push(Pass);
    //         alert("Register Succesfully");
    //     }
    //     else if(acoount == 2){
    //         admin_User.push(User);
    //         admin_Pass.push(Pass);
    //         alert("Register Succesfully");

    //     }
    //     else if(acoount == 3){
    //         receiver_User.push(User);
    //         receiver_Pass.push(Pass);
    //         alert("Register Succesfully");
    //     }else{
    //         alert("Please Choose a UserType");
    //     }



    // });

  
    $('#Donate').click(function () {
        alert("Create an account to donate spare parts!");
        window.location.href = "E:/Files/New Web/Pages/Signup.html";
        
    });
    function Donate() {
        alert("Create an account to donate spare parts!");
        window.location.href = "E:/Files/New Web/Pages/Signup.html";
    }






});

