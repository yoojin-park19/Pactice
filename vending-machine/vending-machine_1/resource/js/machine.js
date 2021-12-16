let btnPut = document.getElementById('btnPut');
let moneyPut = document.getElementById('moneyPut').value;
let moneyIn = parseInt(moneyPut);

btnPut.addEventListener('click', function addMoney(){
    let totalMoney = 25000;
    totalMoney = totalMoney + moneyIn;
    document.getElementById('totalMoney').innerHTML = totalMoney + '원';
});

