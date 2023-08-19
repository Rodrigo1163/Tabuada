const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');
const limpar = document.querySelector('#limpar');

limpar.addEventListener('click', limparResultado);

form.addEventListener('submit', function(e){
    e.preventDefault();
    resultado.innerHTML = '';
    const inputNumero = e.target.querySelector('#numero');
    const numero = Number(inputNumero.value);
    if(!isNaN(numero)){

        for(i=1;i <=12;i++){
            const calc = String(i) + ' x ' +numero+ '=' + i * Number(numero); //FORMULA 
            criaP(calc)
            
             
        }
        

    } else{
        const frase = 'por favoer'
        criaP(frase)
        
    }
function criaP(msg){
    const p = document.createElement('p');
    p.innerText = msg;
    resultado.appendChild(p);
}})
function limparResultado(){
    resultado.innerHTML = '';
}

