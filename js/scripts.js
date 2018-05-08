var a = prompt('wpisz pierwsza dowolna liczbe');
var b = prompt('wpisz druga dowolna liczbe');
var value = (a * a) - (2 * a * b) - (b * b);
alert('Gratulacje! Twój wynik to: ' + value);
console.log('Twoj wynik ze zmnienna a: ' + a + ' i zmienna b: ' + b + ' rowna sie: ' + value);
function estimateValue() {
	if (value > 0) {
    		return 'wynik dodatni';
	} else if (value < 0) {
    		return 'wynik ujemny';
	} else {
    		return 'Aha sprawdzasz liczbe ' + value;
	}
}
console.log('Twoj wynik ze zmnienna a: ' + a + ' i zmienna b: ' + b + ' rowna sie: ' + estimateValue());
