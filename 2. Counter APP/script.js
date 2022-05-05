var count = document.getElementById('start');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');

var value = 0;

const plus=()=>{
    value++;
    count.innerHTML=value;
}
increase.addEventListener('click',()=>{
    plus();
})
const minus=()=>{
    value--;
    count.innerHTML=value;
}
decrease.addEventListener('click',()=>{
    minus();
})
const recount=()=>{
    value=0;
    count.innerHTML=value;
}
reset.addEventListener('click', ()=>{
    recount();
})