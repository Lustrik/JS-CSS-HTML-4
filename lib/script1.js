button.addEventListener("click", Calculate);

function Calculate(button) {
    let divSearch = button.closest('div');
    let field = divSearch.querySelector('.field');
    let total = field.value * 3;
    field.value = total;
}
function Summ() {
    let x = document.querySelector('#input1').value;
    let y = document.querySelector('#input2').value;
    if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        ttl = x * y;
        let button1 = document.querySelector('.button1');
        button1.innerHTML = ttl;
    }  else {
        ttl = x + y;
        console.log(ttl);
    }
}          