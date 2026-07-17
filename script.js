const formulario = document.querySelector("#imc-form");
const resultado = document.querySelector("#resultado");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = inputPeso.value;
    const altura = inputAltura.value;

    if (peso === "" || altura === "") {
        resultado.textContent = "Preencha todos os campos!";
        return;
    }

    const pesoNumero = Number(peso);
    const alturaNumero = Number(altura);

    if (pesoNumero <= 0 || alturaNumero <= 0) {
        resultado.textContent = "Digite valores válidos!";
        return;
    }

    const imc = pesoNumero / (alturaNumero * alturaNumero);

    if (imc < 18.5) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - Abaixo do peso`;
    }
    else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - Peso normal`;
    }
    else if (imc >= 25 && imc < 30) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - Sobrepeso`;
    }
    else if (imc >= 30 && imc < 35) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - Obesidade Grau I`;
    }
    else if (imc >= 35 && imc < 40) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - Obesidade Grau II`;
    }
    else {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - Obesidade Grau III (Mórbida)`;
    }

    inputPeso.value = "";
    inputAltura.value = "";

    inputPeso.focus();
});