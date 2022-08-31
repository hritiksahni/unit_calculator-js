let inputElement = document.querySelector("input")
let input = 0
inputElement.addEventListener("blur",function()
{
input = document.querySelector("input").value
})


let lenR = document.getElementById("length_result")
let volR = document.getElementById("volume_result")
let massR = document.getElementById("mass_result")


function  lengthR()
{
mt = input / 3.28084
ft = input * 3.28084

    lenR.innerText = input + " meters = " + ft.toFixed(3) + " feet | " + input + " feet = " + mt.toFixed(3) + " meters"





}

function  volumeR()
{
    g = input / 4.54609
    l = input * 4.54609

    volR.innerText = input + " liters = " + g.toFixed(3) + " gallon | " + input + " gallon = " + l.toFixed(3) + " liters"





}


function  massR1()
{
    kg = input * 2.20462;
    p = input / 2.20462;

    massR.innerText = input + " kilograms = " + p.toFixed(3) + " pounds | " + input + " pounds = " + kg.toFixed(3) + " kilograms";





}










function execute() { 
   
    lengthR()    
    volumeR()    
    massR1()
}
