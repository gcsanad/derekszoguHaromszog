function szerkeszthetoseg(){
    if(Math.sqrt(Math.pow(parseFloat(document.getElementById("aBefogo").value), 2)+Math.pow(parseFloat(document.getElementById("bBefogo").value),2))==parseFloat(document.getElementById("atfogo").value)){
        alert("A háromszög megszerkeszthető!");
    }
    else{
        alert("A háromszög NEM megszerkeszthető!");
    }
    
}

function veletlen(){
    document.getElementById("aBefogo").value=Math.floor((Math.random()*100)+1);
    document.getElementById("bBefogo").value=Math.floor((Math.random()*100)+1);
    document.getElementById("atfogo").value=Math.floor((Math.random()*100)+1);
}

function atfogoSzamitas(){
    document.getElementById("atfogo").value=Math.sqrt(Math.pow(parseFloat(document.getElementById("aBefogo").value), 2)+Math.pow(parseFloat(document.getElementById("bBefogo").value), 2))
}