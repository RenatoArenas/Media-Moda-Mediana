document.getElementById("numbers-area").addEventListener('keyup', ordenarArray);

let num = [];
const numbers_area = document.getElementById("numbers-area");
const average = document.getElementById("average");
const median = document.getElementById("median");
const mode_number = document.getElementById("mode-number")
const mode_amount = document.getElementById("mode-amount")
const mode = document.getElementById("mode");
const numbers = document.getElementById("numbers");
const numbers_amount = document.getElementById("numbers-amount");
    
//Ordenar números de menor a mayor  

let mediaNum = 0;
let medianaNum = 0;
let modaNum = 0;
let modas = [];
let modaArray = [];
let key;

function validarNumeros(e) {
    key = e.keyCode || e.which;

    keyboard = String.fromCharCode(key);
    number = "0123456789";
    especials = [8, 32, 44]
    especial_keyboard = false;

    for(var i in especials) {
        if(key == especials[i]) {
            especial_keyboard = true;
        }
    }

    if (number.indexOf(keyboard) == -1 && !especial_keyboard) {
        return false;
    }
}
function ordenarArray() {
    num = numbers_area.value.split(', ');
    num = num.map(element => Number(element));
    num.sort((a, b) => a-b);  
    console.log(num);
    mostrarResultados();
}
function mostrarResultados() {
    calculosMedia();
    calculosMediana();
    calculosModa();
    average.innerText = "Media: " + mediaNum;
    median.innerHTML = "Mediana: " + medianaNum;
    mode_number.innerHTML = "Cantidad de modas: " + modas.length;
    mode.innerHTML = "Moda: [" + modas + "]";
    mode_amount.innerHTML = "Cantidad de la moda: " + modaNum;
    numbers.innerText = "Numeros (menor a mayor): [" + num + "]";
    numbers_amount.innerText = "Cantidad de números: " + num.length;
    
}
function calculosMedia() {

    //Hallar media
    const acumuladorSum = (acumulador, numero) => {
        return acumulador + numero;
    };
    const sumaNum = num.reduce(acumuladorSum, 0);
    mediaNum = sumaNum/num.length;
    console.log(mediaNum);
    
};

function calculosMediana() {

    //Hallar mediana
    medianaNum = num[(num.length - 1)/2];
    if (num.length%2 == 0) {
        const numM1 = num[num.length/2];
        const numM2 = num[(num.length/2) - 1];
        medianaNum = (numM1 + numM2)/2;
    }
    console.log(medianaNum);

}

function calculosModa() {

    //Hallar moda
    const numList = {};
    num.map(function(e){
        if (numList[e]) {
            numList[e] += 1;
        }
        else {
            numList[e] = 1;
        }
    });
    const numArray = Object.entries(numList).sort((a,b) => a[1]-b[1]);
    console.log(numArray);
    modaNum = numArray[numArray.length - 1][1];
    console.log(modaNum);
    modaArray = numArray.filter(moda => moda[1] == modaNum);
    modas = modaArray.map(moda => moda[0]);
    console.log(modas);

}
