let q1=document.querySelector('#q1');
let q2=document.querySelector('#q2');
let r=document.querySelector('#q1');

const wynik=document.querySelector('.wynik');
function oblicz(){
wynik.innerHTML=q1.value*q2.value/r.value*8.9875*1000000000+' C';
}