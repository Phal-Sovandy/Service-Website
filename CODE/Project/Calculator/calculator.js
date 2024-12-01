const textdisplay = document.getElementById("text-display");
let result = "";

// textdisplay.textContent = eval(result);
function display(result){
    textdisplay.value = result;
}

function calculate(resultIn){
    console.log(resultIn);
    result = eval(resultIn);
    display(result);
}

function clearAll(){
    result = "";
    display('0');
}

function appearence(){
    const show = document.querySelector('.calculator');
    show.classList.toggle("dark-app");

}

function textInput(event){
    result = eval(textdisplay.value);
    if(event.key === 'Enter'){
        textdisplay.value = result;
    }
}




