const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const celsius = Number(document.getElementById("celsius").value);
    let kelvin = celsius + 273.15;
    let fahreinheit = (celsius * 1.8) + 32;
    
    document.getElementById("result").innerHTML = `<h2>${celsius}&deg;C = ${kelvin}&deg;K<h2><h2>${celsius}&deg;C = ${fahreinheit}&deg;F<h2>`
});