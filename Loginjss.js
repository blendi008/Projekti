function submit (){
    var name = document.getElementById("emri").value;
    var pass = document.getElementById("password").value;
    
    
    var number = /[0-9]/;
    var upper  =/[A-Z]/;

    if(name.length<3){
        alert("Emri duhet te jete me i gjat se 3 karaktere");
        return;
    }
    else if(!upper.test(name)){
        alert("Emri duhet te ket nje shkronj te madhe");
        return;
    }
   
    else if(pass.length<6){
        alert("Pasi duhet te jete me i gjat se 6 karaktere");
        return;

    }
    else if(!number.test(pass)){
        alert("Passwordi duhet te kete se paku nje numer");
        return;
    } 
    else if(!upper.test(pass)){
        alert("Pasi duhet te permbaj se paku nje Shronje te madhe");
        return;

    }
  else{
    alert("Qasja ishte e sukseshme")
  }

}