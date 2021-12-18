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


