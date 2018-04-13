let offices = [
    { id: "GD", name: "Gdańsk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

let workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];

let company = {};

//przygotowanie struktury firmy

const addOfficesToCompany = () => {
    company.offices = offices.map(office => {
        office.workers = workers.filter(worker => office.id === worker.office);
        office.headquarter = office.headquarter || false;
        return office;
    });
};

// exercise 1

const getAvgSalaryInOffice = workers => {
    return workers.reduce((acc, next) => acc + next.salary, 0) / workers.length;
};

const getOfficeInformation = officeId => {
    const office = company.offices.find(({ id }) => id === officeId);
    return {
        localization: office.name,
        numberOfWorkers: office.workers.length,
        avgSalary: getAvgSalaryInOffice(office.workers)
    }
};

// exercise 2

const addNewOffice = (office, headquarter = false, workers = []) => {
    company.offices.push(Object.assign(office, {headquarter, workers}));
};

// exercise 3

const addNewWorker = worker => {
    company.offices
        .find(office => office.id === worker.office)
        .workers.push(worker);
};

// exercise 5

const getAvgSalaryInCompany = () => {
    return comapny.offices
        .reduce((acc, next) => acc + getAvgSalaryInOffice(next.workers), 0) / company.offices.length;
};

// exercise 5

