// 메뉴 선택

let btnOrigin = document.getElementById('btn_origin');
let countOrigin =0;
let moneyBuy = 0;

btnOrigin.addEventListener('click', function add() {
    if (countOrigin == 0) {
        $('.staged-origin').css('display','block');
        countOrigin += 1;
        moneyBuy += 1000;
    }
    else {
        countOrigin += 1;
        moneyBuy += 1000;
    }
    document.getElementById('count-origin').innerText = countOrigin;
    document.getElementById('count-origin1').innerText = countOrigin;
    document.getElementById('moneyBuy').innerText = '총금액:' + moneyBuy + '원';
})

let btnYellow = document.getElementById('btn_yellow');
let countYellow =0;

btnYellow.addEventListener('click', function addYellow() {
    if (countYellow == 0) {
        $('.staged-yellow').css('display','block');
        countYellow += 1;
        moneyBuy += 1200;
    }
    else {
        countYellow += 1;
        moneyBuy += 1200;
    }
    document.getElementById('count-yellow').innerText = countYellow;
    document.getElementById('count-yellow1').innerText = countYellow;
    document.getElementById('moneyBuy').innerText = '총금액:' + moneyBuy + '원';
})

let btnCool = document.getElementById('btn_cool');
let countCool =0;

btnCool.addEventListener('click', function addCool() {
    if (countCool == 0) {
        $('.staged-cool').css('display','block');
        countCool += 1;
        moneyBuy += 1500;
    }
    else {
        countCool += 1;
        moneyBuy += 1500;
    }
    document.getElementById('count-cool').innerText = countCool;
    document.getElementById('count-cool1').innerText = countCool;
    document.getElementById('moneyBuy').innerText = '총금액:' + moneyBuy + '원';
})

let btnGreen = document.getElementById('btn_green');
let countGreen =0;

btnGreen.addEventListener('click', function addGreen() {
    if (countGreen == 0) {
        $('.staged-green').css('display','block');
        countGreen += 1;
        moneyBuy += 900;
    }
    else {
        countGreen += 1;
        moneyBuy += 900;
    }
    document.getElementById('count-green').innerText = countGreen;
    document.getElementById('count-green1').innerText = countGreen;
    document.getElementById('moneyBuy').innerText = '총금액:' + moneyBuy + '원';
})

let btnOrange = document.getElementById('btn_orange');
let countOrange =0;

btnOrange.addEventListener('click', function addOrange() {
    if (countOrange == 0) {
        $('.staged-orange').css('display','block');
        countOrange += 1;
        moneyBuy += 1800;
    }
    else {
        countOrange += 1;
        moneyBuy += 1800;
    }
    document.getElementById('count-orange').innerText = countOrange;
    document.getElementById('count-orange1').innerText = countOrange;
    document.getElementById('moneyBuy').innerText = '총금액:' + moneyBuy + '원';
})



//  입금
let btnIn = document.getElementById('btnIn');
let totalMoney = 25000;

btnIn.addEventListener('click',() => {
    let moneyIn = parseInt(document.getElementById('moneyIn').value);
    totalMoney = totalMoney + moneyIn;
    document.getElementById('totalMoney').innerText = totalMoney + '원';
})

let btnGet = document.getElementById('btnGet');

btnGet.addEventListener('click', function payment(){
    if(totalMoney >= moneyBuy) {
        totalMoney = totalMoney - moneyBuy;
        document.getElementById('totalMoney').innerText = totalMoney + '원';
        $('.staged-orange').css('display','none');
        countOrange =0;
        $('.staged-origin').css('display','none');
        countOrigin = 0;
        $('.staged-yellow').css('display','none');
        countYellow = 0;
        $('.staged-cool').css('display','none');
        countCool = 0;
        $('.staged-green').css('display','none');
        countGreen = 0;
        moneyBuy = 0;
        document.getElementById('moneyBuy').innerText = '총금액:' + moneyBuy + '원';
    }
    else {
        alert('잔액이 부족합니다.')
    }  
})






//  잔돈 받기

let btnReturn = document.getElementById('btnReturn');
let change = false;

btnReturn.addEventListener('click',function refund () {
    if (change == false) {
        document.getElementById('textBalance').innerText = totalMoney +'원';
        change =true;
    }
    else {
        totalMoney = 0;
        document.getElementById('textBalance').innerText = totalMoney +'원';
        document.getElementById('totalMoney').innerText = totalMoney +'원';
        change = true;
    }

})