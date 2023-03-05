//HomeWork 13/first
const books = [
{author: " Bill Gates", title: "The Road Ahead", libraryID: 1254},
{author: "Steve Jobs", title: "Walther Isaccson", libraryID: 4264},
{author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245},
{author: "Napoleon Hill", title: "Think and Grow Rich", libraryID: 1254},
];
function sortByTitle(arr) {
    return arr.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
}

const sortedBooks = sortByTitle(books);
console.log(sortedBooks);


const authors = books.map((book) => book.author);
console.log(authors);

function findBooksByLibraryId(libraryId, books) {
    return books.filter((book) => book.libraryID === libraryId);
}
const result = findBooksByLibraryId(1245, books);
console.log(result);




``
class Car {
    constructor(brand, year, horsepower) {
        this.brand = brand;
        this.year = year;
        this.horsepower = horsepower;
    }
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
    canDrive(userAge) {
        if (userAge >= 25) {
            return true;
        } else {
            return this.horsepower <= 105;
        }
    }
}


const users = [
    { fullName: "Amet Ameti", age: 34},
    { fullName: "Vann Dame", age: 22},
    { fullName: "Criss Costa", age: 15},
];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const car = new Car("Audi", 2010, 120);
    const canDrive = car.canDrive(user.age);
    console.log(user.fullName + 'can drive' + canDrive ? "any" : "some" + "cars.");
}