// for mobile elements

const phnMinus = document.getElementById("phnMinus");
phnMinus.addEventListener("click" , function(){
    // const phnText = document.getElementById("phnText").value;
    // const phnTextNumber = parseFloat(phnText);
    // document.getElementById("phnText").value = phnTextNumber -1 ;
    // const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    // document.getElementById("subTotal").innerText = subTotal - 1219;

    // const total = parseFloat(document.getElementById("total").innerText);
    // document.getElementById("total").innerText = total - 1219;

    minus("phnText" , 1219);
})

phnPlus.addEventListener("click" , function(){
    // const phnText = parseInt(document.getElementById("phnText").value) ;
    // document.getElementById("phnText").value = phnText + 1 ;
    // const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    // document.getElementById("subTotal").innerText = subTotal + 1219;

    // const total = parseFloat(document.getElementById("total").innerText);
    // document.getElementById("total").innerText = total + 1219;

    adding("phnText" , 1219);
})

// for cover element

covMinus = document.getElementById("covMinus");
covMinus.addEventListener("click" , function(){
    minus("covText" , 59)
})

covPlus.addEventListener("click" , function(){
    adding("covText" , 59);
})

// for check-out button

const checkOut= document.getElementById("checkOut");
 checkOut.addEventListener("click", function(){
    const checkOutDisplay = document.getElementById("checkOutDisplay");
    checkOutDisplay.style.display = "block";
 })

// functions

function calculateTotalSubtotal( amount ){
    const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    document.getElementById("subTotal").innerText = subTotal + amount;

    const total = parseFloat(document.getElementById("total").innerText);
    document.getElementById("total").innerText = total + amount;
}


function adding(id , amount){
    const textValue = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = textValue + 1 ;

    // const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    // document.getElementById("subTotal").innerText = subTotal + amount;

    // const total = parseFloat(document.getElementById("total").innerText);
    // document.getElementById("total").innerText = total + amount;
    
    //these  4 line codes are in this function
    calculateTotalSubtotal(amount);
}

function minus(id , amount){
    const textValue = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = textValue - 1 ;
    // const subTotal =parseFloat(document.getElementById("subTotal").innerText) ;
    // document.getElementById("subTotal").innerText = subTotal - amount;

    // const total = parseFloat(document.getElementById("total").innerText);
    // document.getElementById("total").innerText = total - amount;

     //these  4 line codes are in this function
    calculateTotalSubtotal(-1*amount);
}

