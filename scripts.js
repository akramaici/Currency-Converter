function CurencyConvertisseur(){
    let amount=document.getElementById("input-amount").value;
    let container=document.querySelector(".container .resultat-container");
    let option1=document.getElementById("option1").value;
    let option2=document.getElementById("option2").value;
    let mssg=document.createElement("p");
    container.innerHTML="";
    if(amount===""){
        mssg.textContent="Veuiller entrer une valuer"
    }
    else if(option1==="DzOption" && option2==="FrOption2"){
      let result=amount/225;
      mssg.textContent=amount+"DZ: "+result.toFixed(2)+ " EUR";
    }
    else if(option1==="FrOption" && option2==="DzOption2"){
        let result=amount*225;
        mssg.textContent=amount+"FR: "+result.toFixed(2)+ " DZ";
      }
     else if(option1==="FrOption" && option2==="USDOption2"){
        let result=amount*1.11;
        mssg.textContent=amount+"FR: "+result.toFixed(2)+ " USD";
      }
      container.appendChild(mssg);
}