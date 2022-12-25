function register (){
    var name = document.getElementById("emri").value;
    var email=document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
    
    var number = /[0-9]/;
    var upper  =/[A-Z]/;

    if(name.length<3){
        alert("Emri duhet te jete me i gjat se 3 karaktere");
        return;
    }
    else if(!upper.test(name)){
        alert("Emri duhet te ket se paku nje shkronj te madhe");
        return;
    }
    else if(email.length<6 ){
        alert("Email duhet te jete me i gjat se 6 karatere");
        return ;
    }
    else if(pass.length<6){
        alert("Pasi duhet te jete me i gjat se 6 karaktere");
        return ;

    }
    else if(!number.test(pass)){
        alert("Pasi duhet te permbaj se paku nje numer");
        return ;
    } 
    else if(!upper.test(pass)){
        alert("Pasi duhet te permbaj se paku nje Shronje te madhe");
        return ;

    }
    else{
        alert("Regjistrimi me Sukses");
    }
   

}