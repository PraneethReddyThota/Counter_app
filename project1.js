let textel = document.getElementById("hh1");
let b1 = document.getElementById("bt1");
let b2 = document.getElementById("bt2");
let b3 = document.getElementById("bt3");
let c = 0;

function b11() {
    let p1 = textel.textContent;
    let up1 = parseInt(p1) + 1;

    textel.textContent = up1;

}

function b12() {
    let p1 = textel.textContent;
    let up1 = parseInt(p1) - 1;

    textel.textContent = up1;

}

function b13() {

    textel.textContent = 0;
}