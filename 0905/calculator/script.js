const btn = document.getElementById("btn");
const container = document.getElementById("result");

btn.addEventListener("click", () => {
    const operation = document.getElementById("select").value;
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    
    if(operation === "+"){
        container.innerHTML = `Result is: ${number1 + number2}`;
    }
    else if(operation === "-"){
        container.innerHTML = `Result is: ${number1 - number2}`;
    }
    else if(operation === "*"){
        container.innerHTML = `Result is: ${number1 * number2}`;
    }
    else{
        container.innerHTML = `Result is: ${number1 / number2}`;
    }
});