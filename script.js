let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let tree = document.getElementById('tree');
let hi1 = document.getElementById('hi1');
let hi2 = document.getElementById('hi2');
let hi3 = document.getElementById('hi3');
let hi4 = document.getElementById('hi4');
let hi5 = document.getElementById('hi5');



window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.Top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    // tree.style.left = value * 1.5 + 'px';
    hi1.style.top = value * .7 + 'px';
    // hi2.style.left = value * -1.5 + 'px';
    // hi3.style.left = value * 1.5 + 'px';
    hi4.style.left = value * -1.5 + 'px';
    hi5.style.left = value * 1.5 + 'px';
})