// Za pomoca wylacznie biblioteki jQuery, utworz nastepujacy kod html:
//
//     http://jsfiddle.net/h6gp9jnt/
//
// <div class="container">
//     <div class="row">
//        <div class="col-sm-4"><p class="description">Jeden</p></div>
//        <div class="col-sm-4"><p class="description">Dwa</p></div>
//        <div class="col-sm-4"><p class="description">Trzy</p></div>
//     </div>
//
//     <div class="row">
//        <div class="col-xs-6"><p class="description">Cztery</p></div>
//        <div class="col-xs-6"><p class="description">Piec</p></div>
//     </div>
//
//     <div class="row">
//         <div class="col-md-3"><p class="description">Szesc</p></div>
//         <div class="col-md-3"><p class="description">Siedem</p></div>
//         <div class="col-md-3"><p class="description">Osiem</p></div>
//     </div>
// </div>
//
// Przydatne funkcje: addClass, text, append...
//     Powodzenia!



let $container = $('<div>').addClass('container').css('background-color', 'grey');

$container.prependTo('body');


let createRow = () => $('<div>').addClass('row');
let createCol = (size, number) => $('<div>').addClass('col-' + size + '-' + number);
let createText = (string) => $('<p>').addClass('description').text(string);

let $firstRow = createRow().append(createCol('sm', '4').append(createText('Jeden')),
                    createCol('sm', '4').append(createText('Dwa')),
                    createCol('sm', '4').append(createText('Trzy')));

let $secondRow = createRow().append(createCol('xs', '6').append(createText('Cztery')),
                    createCol('xs', '6').append(createText('Piec')));

let $thirdRow = createRow().append(createCol('md', '3').append(createText('Szesc')),
                    createCol('md', '3').append(createText('Siedem')),
                    createCol('md', '3').append(createText('Osiem')));

$container.append($firstRow, $secondRow, $thirdRow);





