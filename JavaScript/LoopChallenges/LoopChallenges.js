// Print odds 1-20

for(var i=1; i<=20; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// Decreasing Multiples of 3

for(var i=100; i>=0; i--) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

// Print the sequence

var arr = [4,2.5,1,-0.5,-2,-3.5]

for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// Sigma

var sum = 0

for(var i=1; i<=100; i++) {
    sum = sum + i;
}

console.log(sum);

// Factorial

var product = 1;

for(var i=1; i<=12; i++) {
    product = product * i;
}

console.log(product);