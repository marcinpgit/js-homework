// - stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users. (mamy!)
//
// A.
// - Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
// ma wyświetlić w konsoli ID danego użytkownika
// - Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
// - rząd powinien zawierać klasę table-row
// - komórka powinna zawierać klasę table-cell
// - najechanie na rząd ma go podświetlić
//
// B.
// - nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
// - formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
// - przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery


const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr>
            <td><input type="checkbox" class="checkbox" data-id = ${user.id}></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
            <td class="remove-icon">X</td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

const getUserId = function () {
    if($(this).prop('checked')) {
        console.log('user id: ', $(this).data('id'));
    }
};

$(document).on('change', '.checkbox', getUserId);


const removeRow = function () {
    $(this).closest('tr').remove();
};

$(document).on('click', '.remove-icon', removeRow);


$('tr').addClass('table-row');
$('td').addClass('table-cell');


const $highlight = function () {
    $(this).toggleClass('bg-warning');
};

$(document).on('mouseenter', 'tr', $highlight);
$(document).on('mouseleave', 'tr', $highlight);



const $userForm = $(`<form class="col-sm-5">
                        <h4>Formularz dodający użytkownika</h4>
                        
                        <div class="form-group">
                            <label for="firstName">Imię</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Wpisz swoje imię">
                        </div>
                        
                        <div class="form-group">
                            <label for="lastName">Nazwisko</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Wpisz swoje nazwisko">
                        </div>
                        
                        <div class="form-group">
                            <label for="age">Wiek</label>
                            <input type="number" class="form-control" id="age" >
                        </div>
                        
                         <div class="form-group">
                            <label for="city">Wybierz miasto</label>
                            <select class="form-group" id="city">
                                  <option>Gdańsk</option>
                                  <option>Sopot</option>
                                  <option>Zakopane</option>
                                  <option>Wrocław</option>
                                  <option>Kraków</option>
                            </select>
                        </div>
                        
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="veryfication">
                            <label class="form-check-label" for="veryfication">Mam 18 lat</label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" id="submitButton" disabled>Dodaj użytkownika</button>
                        
                     </form>`);

$userForm.prependTo('body');

const $formFirstName = $('#firstName');
const $formLastName = $('#lastName');
const $formAge = $('#age');
const $formCity = $('#city');
const $formCheckbox = $('#veryfication');
const $formAddUserBtn = $('#submitButton');


const $checkBoxCheck = function () {

    const $nameMinLength = 3;
    const $minAge = 18;
    const $nameValue = $formFirstName.val();
    const $ageValue = $formAge.val();

    if($(this).prop('checked') && $ageValue > $minAge && $nameValue.length > $nameMinLength) {
        $formAddUserBtn.prop('disabled', false);
    } else {
        $formAddUserBtn.prop('disabled', true);
    }
};


$formCheckbox.on('change', $checkBoxCheck);


function addNewUserToTable() {
    event.preventDefault();
    users.push({
        firstName: $formFirstName.val(),
        lastName: $formLastName.val(),
        age: $formAge.val(),
        city: $formCity.val(),
        id: users.length + 1
    });
    $table.html(getRowsWithUsers());
}

$formAddUserBtn.on('click', addNewUserToTable);

