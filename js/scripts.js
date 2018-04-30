
var a = prompt('wpisz pierwsza dowolna liczbe');
var b = prompt('wpisz druga dowolna liczbe');
var value = (a * a) - (2 * a * b) - (b * b);
alert('Gratulacje! Twój wynik to: ' + value);
console.log('Twoj wynik ze zmnienna a: ' + a + ' i zmienna b: ' + b + ' rowna sie: ' + value);
console.log('Twoj wynik ze zmnienna a: ' + a + ' i zmienna b: ' + b + ' rowna sie: ' + document.write);
if (value > 0) {
    document.write('wynik dodatni');
} else if (value < 0) {
    document.write('wynik ujemny');
} else {
    document.write('Aha sprawdzasz liczbe ' + value);
}
