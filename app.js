const phnMinus = document.getElementById("phnMinus");
phnMinus.addEventListener("click" , function(){
    const phnText = document.getElementById("phnText").value;
    const phnTextNumber = parseFloat(phnText);
    document.getElementById("phnText").value = phnTextNumber -1 ;
    const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    document.getElementById("subTotal").innerText = subTotal - 1219;

    const total = parseFloat(document.getElementById("total").innerText);
    document.getElementById("total").innerText = total - 1219;
})
phnPlus.addEventListener("click" , function(){
    const phnText = parseInt(document.getElementById("phnText").value) ;
    document.getElementById("phnText").value = phnText + 1 ;
    const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    document.getElementById("subTotal").innerText = subTotal + 1219;

    const total = parseFloat(document.getElementById("total").innerText);
    document.getElementById("total").innerText = total + 1219;
})

covMinus = document.getElementById("covMinus");
covMinus.addEventListener("click" , function(){
    const covText = parseInt(document.getElementById("covText").value) ;
    document.getElementById("covText").value = covText - 1 ;
    const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    document.getElementById("subTotal").innerText = subTotal - 59;

    const total = parseFloat(document.getElementById("total").innerText);
    document.getElementById("total").innerText = total - 59;
})

covPlus.addEventListener("click" , function(){
    const covText = parseInt(document.getElementById("covText").value) ;
    document.getElementById("covText").value = covText + 1 ;
    const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    document.getElementById("subTotal").innerText = subTotal + 59;

    const total = parseFloat(document.getElementById("total").innerText);
    document.getElementById("total").innerText = total + 59;
})

function adding(id , number){
    
}
