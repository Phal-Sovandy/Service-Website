
const texBox = document.getElementById("textBox");
const CtoFahrenheit = document.getElementById("CtoFahrenheit");
const CtoKelvin = document.getElementById("CtoKelvin");
const FtoCelsius = document.getElementById("FtoCelsius");
const FtoKelvin = document.getElementById("FtoKelvin");
const KtoCelsius = document.getElementById("KtoCelsius");
const KtoFahrenheit = document.getElementById("KtoFahrenheit");
const result = document.getElementById("result");

let temp;

function convert(){

    if(CtoFahrenheit.checked){
        temp = Number(texBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(2) + "°F"; // .toFixed(_) is the digit behind the decimal point
    }
    else if(CtoKelvin.checked){
        temp = Number(texBox.value);
        temp = temp + 273.15;
        result.textContent = temp.toFixed(2) + "K";
    }
    else if(FtoCelsius.checked){
        temp = Number(texBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if(FtoKelvin.checked){
        temp = Number(texBox.value);
        temp = (temp - 32) * 5/9 + 273.15;
        result.textContent = temp.toFixed(2) + "K";
    }   
    else if(KtoCelsius.checked){
        temp = Number(texBox.value);
        temp = temp - 273.15;
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if(KtoFahrenheit.checked){
        temp = Number(texBox.value);
        temp = (temp - 273.15) * 9/5 + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else{
        result.textContent = "Please Select An Unit";
    }

}