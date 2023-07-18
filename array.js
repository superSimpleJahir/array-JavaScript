const NamE = 'My name is: ';
console.log(NamE);

let fullName = 'Md Jahirul Islam.';
console.log(Name + fullName);

let total = 'Total cost: $' + (5 + 3);
console.log(total);

let templateString = `Total cost: $${5 + 3}`;
console.log(templateString);

alert(templateString);

total = 'Total cost: $' + (599 + 295) / 100;
console.log(total);

total = `Total cost: $${(599 + 295) / 100}`;
console.log(total);

alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again`);


let items = `Items (${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`;
console.log(items);

let shippingCost = `Shipping & handling: $${(499 * 2) / 100}`;
console.log(shippingCost);

let totalBeforeTax = `Total before tax: $${((2095 * 2 + 799 * 2) + (499 * 2)) / 100}`;
console.log(totalBeforeTax);

let tax = `Estimated tax (10%): $${Math.round((2095 * 2 + 799 * 2 + 499 * 2) * .1) / 100}`;
console.log(tax);


document.write('Md Jahirul ' + 'Islam <br><br>');
document.write('Md Jahirul ' + 'Islam ' + '(Jahir)');

let firstName = 'Md Jahirul';
let lastName = 'Islam';
let fullName1 = firstName + lastName;
document.write('<br><br>' + fullName + '<br><br>');
document.write('My Name is ' + fullName + '<br><br>');


//string method length
let texT = 'Bangladesh';
let len = texT.length;
document.write('Number of character ' + len + '<br><br>');


//string method length
let naMe = prompt('Enter your name: ');
let nameLen = naMe.length;
document.write('Number of Charecter ' + nameLen);


// string method slice
let text1 = "Bangladesh";
let part = text.slice(3, 10);
document.write(part + "<br><br>");


// string method toUpperCase toLowerCase charAt
let text2 = "Bangladesh";
document.write(text2.toUpperCase() + '<br><br>');
document.write(text2.toLowerCase() + '<br><br>');
text2 = text2.charAt(9);
document.write(text2 + '<br><br>');


// striing method concat
text2 = "Bangladesh";
let text3 = ' is a beautiful counrty';
document.write(text2.concat(text3));


// task1  string method
let input1User = prompt('Enter your first name:');
let input2User = prompt('Enter your last name:');
let FullName = input1User + input2User;
document.write(FullName + '<br><br>');
let totalLen = FullName.length;
document.write(totalLen + '<br><br>');
document.write(FullName.toUpperCase() + '<br><br>');
document.write(FullName.charAt(1));



let num = new Array();

for (let i = 0; i <= 10; i++) {
  num[i] = parseInt(prompt('Enter your number: '));
}
let sum = 0;

for (let i = 0; i <= 10; i++) {
  console.log(num[i]);
  sum = sum + num[i];
}
console.log(sum);


let fruits = ["Banana", "Orange", "Apple", "Mango"];
let lfruts = fruits.length;

let text = '<ul>'
for (let i = 0; i < lfruts; i++) {
  text += '<ul>' + fruits[i] + '</ul>';
}
text += '</ul>';
document.getElementById('damo').innerHTML = text;

let type = typeof (fruits);
console.log(type)


let Name = ['jahir', 'mijan', 'jahid'];
console.log(Name.join('^'));


