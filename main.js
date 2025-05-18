let message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nulla mauris. Quisque ut morbi.";
console.log(message.length);
Math.ceil(message.length / 100);
let cost = Math.ceil(message.length / 100);
console.log(cost);

let tax = cost * 0.1;
let finalPrice = cost + tax;
console.log(finalPrice);

let summary = 'Your message: "' + message + '" costs '  + cost +  ' cents before tax and ' + finalPrice + ' cents after tax.';
console.log(summary);

let isLong = message.length > 200;
console.log(isLong);


