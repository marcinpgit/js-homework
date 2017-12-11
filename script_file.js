// 1. Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver) a następnie zwraca stringa w następującym formacie:
//
//     "(FROM: sender) (TO: receiver) (MESSAGE: sms)"
//
// UWAGA: - Zwróć uwagę na wielkość liter w imionach oraz brak whitespaces dla sms
//
// Przykładowy wynik dla następujących zmiennych:
//     var sender = 'mikey';
// var sms = '   Hello Jane, i am really tired today, i will call you tommorrow.         ';
// var receiver = 'JANE';
//
// WYNIK = "(FROM: Mikey) (TO: Jane) (MESSAGE: Hello Jane, i am really tired today, i will call you tommorrow.)";


// 2. Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName, a następnie zwraca inicjały rozdzielone kropką,
// zwrócony string powinien składać się z wielkich liter. Przykładowy wynik dla następujących zmiennych: var firstName = 'john'; var lastName = 'doe';
//
// WYNIK = 'J.D';


// 3. Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku a następnie zwraca stringa
// "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA"


// 4. Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa. Funkcja powinna zwrocić sumę tip i price
//
// Function get_dinner_price {
//     tip: '20';
//     tip + price;
//     var price = 100;
// }
// get_dinner_price();  musi zwrócić liczbę o wartości 120 (100 + 20)


// --------------------------------------------------------------------------------------

console.log('ZADANIE_1');

function smsSender (sender, sms, reciver) {

    var sender_front = sender.substring(0, 1).toUpperCase();
    var sender_back = sender.substring(1, sender.length).toLocaleLowerCase();
    var sender_fb = sender_front + sender_back;

    var reciver_front = reciver.substring(0, 1).toUpperCase();
    var reciver_back = reciver.substring(1, reciver.length).toLowerCase();
    var reciver_fb = reciver_front + reciver_back;

    return '(FROM: ' + sender_fb + ') ' + '(TO: ' + reciver_fb + ' )' + '(MESSAGE: ' + sms.trim() + ')';

}

console.log(smsSender('aleksAndra', '   zadanie domowe nr 1   ', 'aliCJA'));

// --------------------------------------------------------------------------------------

console.log('ZADANIE_2');

function firstLastName (firstName, lastName) {
    var firstInit = firstName.substring(0,1).toUpperCase() + '.';
    var lastInit = lastName.substring(0,1).toUpperCase() + '.';
    return 'Twoje inicjaly to: ' + firstInit + lastInit;
}

console.log(firstLastName('ola', 'nowak'));

// --------------------------------------------------------------------------------------

console.log('ZADANIE_3');

function randomNum () {
    return Math.random().toFixed(2);
}

console.log('Twoja szczesliwa liczba to: ' + randomNum());

// --------------------------------------------------------------------------------------

console.log('ZADANIE_4');

function getDinnerPrice () {
    var tip = 20;
    var price = 100;
    console.log(tip + price);
}

getDinnerPrice();

