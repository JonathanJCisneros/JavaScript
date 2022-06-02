var count = 1;

function counter(element) {
    count++;
    console.log(count);
    element.innerText = count + " likes";
}

function specialCounter() {
    console.log(count);
    document.querySelector("#number").innerText++;
}