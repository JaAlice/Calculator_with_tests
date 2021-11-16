let output = "0";
let lastInput = "";
document.getElementById("output").innerHTML=output



document.getElementById("C").addEventListener("click", function(){
    output="0"
    document.getElementById("output").innerHTML=output
    lastInput = ""
})

document.getElementById("%").addEventListener("click", function(){})

document.getElementById("/").addEventListener("click", function(){
    addOperation("/")
})

document.getElementById("1").addEventListener("click", function(){
    addNumber("1")
})

document.getElementById("2").addEventListener("click", function(){
    addNumber("2")
})

document.getElementById("3").addEventListener("click", function(){
    addNumber("3")
})

document.getElementById("4").addEventListener("click", function(){
    addNumber("4")
})

document.getElementById("5").addEventListener("click", function(){
    addNumber("5")
})

document.getElementById("6").addEventListener("click", function(){
    addNumber("6")
})

document.getElementById("7").addEventListener("click", function(){
    addNumber("7")
})

document.getElementById("8").addEventListener("click", function(){
    addNumber("8")
})

document.getElementById("9").addEventListener("click", function(){
    addNumber("9")
})

document.getElementById("0").addEventListener("click", function(){
    addNumber("0")
})

document.getElementById("+").addEventListener("click", function(){
    addOperation("+")
})

document.getElementById("-").addEventListener("click", function(){
    addOperation("-")
})
//funkcja by nie dzielić przez zero - dodając alert
document.getElementById("=").addEventListener("click", function(){
    if(eval(output)=="Infinity"){
        alert("nie dziel przez 0")
        output=output.slice(0,output.length-1)
        document.getElementById("output").innerHTML=output

    }
    else{
        //eval odpowiada za znak "="
    console.log(eval(output))
    output=eval(output)
    document.getElementById("output").innerHTML=output
    lastInput="number"}

})

document.getElementById("x").addEventListener("click", function(){
    addOperation("*")
})

document.getElementById(".").addEventListener("click", function(){
    addNumber(".")
})
//funkcja dodająca cyferki i przecinki
function addNumber(number){
    if (output=="0" && number!=".") {
        output= number

    }
    else (output= output+number)
    document.getElementById("output").innerHTML=output
    lastInput="number"
}
//funkcja dodająca operacje 
function addOperation(op){
    if (lastInput=="operation"){
        output=output.slice(0,output.length-1)+op
    }
    else {output=output+op}
    lastInput="operation"
    document.getElementById("output").innerHTML=output
}


