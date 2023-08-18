let outputScreen= document.getElementById("output-screen");
function display(num){
    outputScreen.value+=num;
    
}

function calculate(){
    try{
        outputScreen.value= eval(outputScreen.value);
    }
    catch(err)
    {
        alert("invalid")
    }
}

function Clear(){
    outputScreen.value= "" ;
    
}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}

function enter(){
    addEventListener().keyup(Clear);
}

document.getElementById("output-screen").addEventListener('keydown',function(event){

if(!/[0-9+\-*/\b]/.test(event.key)){
    event.preventDefault();
}
});
