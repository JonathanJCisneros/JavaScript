console.log("page loaded...");

function replace() {
    document.querySelector("#name").innerText = "John Smith"; 
}

function accept1() {
    document.querySelector("#yc").innerText++;
    document.querySelector("#cra").remove();
    document.querySelector("#cr").innerText--;
}

function accept2() {
    document.querySelector("#yc").innerText++;
    document.querySelector("#crb").remove();
    document.querySelector("#cr").innerText--;
}

function decline1() {
    document.querySelector("#cra").remove();
    document.querySelector("#cr").innerText--;
}

function decline2() {
    document.querySelector("#crb").remove();
    document.querySelector("#cr").innerText--;
}