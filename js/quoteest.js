

function calculate(){

    var field1=document.getElementById("squareft").value;
    var dollarperft=.0025;

    var result=parseFloat(field1)*(dollarperft);

    var est = result.toFixed(2);

    if(!isNaN(est)) 
        {
            document.getElementById("answer").innerHTML="Your quote estimate is $"+est;
        }
}

