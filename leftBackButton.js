function buttonClick() {
    // if (document.referrer == "") {
    //     window.close()
    // } else {
    //     history.back()
    // }
    window.history.back();
    window.close(); 
    
}

function addDiv() {
    var div = document.createElement('div');
    div.id = "AmuBackDiv";
    div.onclick=buttonClick;
    document.body.appendChild(div);
}
var div = document.createElement('div');
    div.id = "AmuBackDiv";
    div.onclick=buttonClick;
    document.body.appendChild(div);
    
div.style.width = "120px";
div.style.height = "120px";

