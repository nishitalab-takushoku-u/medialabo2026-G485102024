function greeting() {
    let l = document.querySelector('input[name="left"]');
    let r = document.querySelector('input[name="right"]');
    l1 = Number(l.value); 
    r1 = Number(r.value); 
    let i = (l1 + r1);

    let n = document.querySelector('#answer');
    n.textContent = i; 
} 
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting); 