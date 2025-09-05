const btn = document.getElementById("btn");
const container = document.getElementById("result");

btn.addEventListener("click", () => {
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    
    const bmi = Math.round((weight / Math.pow(height,2)) * 100) / 100;

    if(bmi > 0 && bmi < 16){
        container.innerHTML = `You are: Súlyos soványság\n(BMI:${bmi})`;
    }
    else if(bmi >= 16 && bmi < 17){
        container.innerHTML = `You are: Mérsékelt soványság\n(BMI:${bmi})`;
    }
    else if(bmi >= 17 && bmi < 18,5){
        container.innerHTML = `You are: Enyhe soványság\n(BMI:${bmi})`;
    }
    else if(bmi >= 18,5 && bmi < 25){
        container.innerHTML = `You are: Normál testsúly\n(BMI:${bmi})`;
    }
    else if(bmi >= 25 && bmi < 30){
        container.innerHTML = `You are: Túlsúlyos\n(BMI:${bmi})`;
    }
    else if(bmi >= 30 && bmi < 35){
        container.innerHTML = `You are: Elhízott (I. fokú)\n(BMI:${bmi})`;
    }
    else if(bmi >= 35 && bmi < 40){
        container.innerHTML = `You are: Elhízott (II. fokú)\n(BMI:${bmi})`;
    }
    else{
        container.innerHTML = `You are: Súlyosan elhízott (III. fokú)\n(BMI:${bmi})`;
    }
});