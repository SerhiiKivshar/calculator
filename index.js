const buttonCifr = document.querySelectorAll('.btn');
const outPut = document.querySelector ('.okno-vivoda');
const resetBtn = document.querySelector ('.reset');
const itogBtn = document.querySelector ('.knopka-itog');
const mathBtn = document.querySelectorAll('.knopka-mat');
const outZnach = document.querySelector('.okno-znacheni')
// const testBt = document.querySelector ('.testBtn');
let konCifra = '';
let argOne = 0;
let rezSum = 0;
let znak = 'sum';
let cisKonCifra;

// формирование числа из набираемых цифр
const vivodRez = function (event){
    const result = event.target.dataset.num;
    konCifra  = konCifra  + result;
    if (konCifra.length > 12) {
        outPut.innerText = 'Error ';
    }
    else {
        cisKonCifra = parseFloat (konCifra);
        outPut.innerText = cisKonCifra;
        // tekZnach ();
        }
   }

buttonCifr.forEach (buttonNode => {
    buttonNode.addEventListener('click', vivodRez);
 } );


 //математика

 function matematik (a, b){
    let rez = 0;
    if (znak === 'del' & b === 0) {b = 1}
    if (znak === 'umn' & b === 0) {b = 1}
    switch (znak) {
   
    case 'sum': rez = a + b;
    break;
    case 'vich': rez = a - b;
    break;
    case 'umn': rez = a * b;
    break;
    case 'del': rez = a / b;
    break;
    }
    return rez;
}

 
 const pidrahunok = function (coto){
    
    if (argOne === 0) {
        rezSum = matematik(cisKonCifra, argOne);
    }
    else {
        rezSum = matematik(argOne, cisKonCifra);}
        
    argOne = rezSum;
    if (!isNaN(rezSum)){
        outPut.innerText = String(rezSum).substring(0, 13);
    }   
    // else {   outPut.innerText = rezSum;
    // }
    // cisKonCifra = rezSum;
    znak = coto.target.dataset.num;
    // tekZnach();
    konCifra = '';
    
    };

mathBtn.forEach (buttonM => {
    buttonM.addEventListener('click', pidrahunok);
});

function summTwoArg () {
    
   
    rezSum = matematik(argOne, cisKonCifra);
    cisKonCifra = rezSum;
    if (!isNaN(rezSum)){
        outPut.innerText = String(rezSum).substring(0, 13);}
    // tekZnach();
    // argOne = 0;
 }

 itogBtn.addEventListener('click', summTwoArg);

//  testBt.addEventListener ('keydown', e => {
//     console.log (e)
//  })

 // кнопка сброса
 function clearRez (){
    konCifra = '';
    argOne = 0;
    rezSum = 0;
    cisKonCifra= 0;
    // tekZnach();
    outPut.innerText = '0';
}
 resetBtn.addEventListener('click', clearRez);

 //функция вывода текущих значений

//  function tekZnach (){
//     outZnach.innerText = `kC=${konCifra} znak=${znak} aO=${argOne} rZ=${rezSum} cKS=${cisKonCifra}`;

//  }
 
