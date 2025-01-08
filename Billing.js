let totalpercentage= 0


function calculator(percent) {


    const bill=parseFloat(document.getElementById("userinput").value)
    
    // const percent=document.getElementsByClassName(".btn-p").value=p
    
    const percentage=bill*percent
    totalpercentage=percentage
    total()

    if (bill>0) {
        document.getElementById("tipamount").innerText="$"+percentage.toFixed(2)
       
        
        
        
    }else{
        // alert("enter valid number")
        
    }    

}
// function total(amount) {
function total() {
    const np=parseFloat(document.getElementById("np").value)
   
    
    
    let totalamount=parseFloat(document.getElementById("userinput").value)/np+ totalpercentage/np
    
    
    if (np>0) {
        document.getElementById("totalbill").innerText="$"+totalamount.toFixed(2) 
        
    }else{
        // alert("enter valid number of peoples")
    }
}

function custom() {
    calculator(document.getElementById("custom").value/100);
    total();
    console.log(document.getElementById("custom").value);
    
    
}

function reset() {
    document.getElementById("userinput").value=""
    document.getElementById("np").value=""
    document.getElementById("totalbill").innerText="$"+"0.00"
    document.getElementById("tipamount").innerText="$"+"0.00"
    
}


