document.getElementById('formIMC').addEventListener('submit', function(event) {
    event.preventDefault(); 


const peso = parseFloat(document.getElementById('peso').value);
const alturaCm = parseFloat(document.getElementById('altura').value);
const alturaM = alturaCm / 100; 


  const imc = peso / (alturaM * alturaM);

    let categoria;
    if (imc < 18.5) {
    categoria = "Bajo peso";
    } 
    else if (imc < 25) {
    categoria = "Peso normal";
    } 
    else if (imc < 30) {
    categoria = "Sobrepeso";
    } 
    else {
    categoria = "Obesidad";
    }



document.getElementById('valorIMC').textContent = imc.toFixed(2);
document.getElementById('categoriaIMC').textContent = categoria;

document.getElementById('resultado').classList.remove('oculto');
});