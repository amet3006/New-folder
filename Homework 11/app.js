function myCars(Benz, Audi, Bmw) {
    if (Benz === Audi || Benz === Bmw || Audi === Bmw) {
        return true;
    } else {
        return false;
    }
}

console.log(myCars(1, 2, 3));
console.log(myCars(1, 2, 2));
console.log(myCars('Zdravo', '6','Zdravo' ));


function myCars(Benz, Audi, Bmw) {
    if ((Benz === Audi || Benz === Bmw || Audi === Bmw) ||
        (typeof Benz === 'string' && (Benz == Audi || Benz == Audi)) ||
        (typeof Audi === 'string' && Audi == Bmw)) {
      return true;
    } else {
      return false;
    }
  }

console.log(myCars(9, 4, "4")); // true
console.log(myCars(1, 2, 3)); // false
console.log(myCars(1, "1", "hello")); // true
console.log(myCars("foo", "bar", "baz")); // false



const daysInMonth = {
  January: 31,
  February: "Enter a year to determine the number of days",
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

const monthName = prompt();

const days = daysInMonth[monthName];

if (typeof days === "string") {
  const year = parseInt(prompt("Enter a year:"));

  const febDays = new Date(year, 1, 29).getDate() === 29 ? 29 : 28;
  console.log(`There are ${febDays} days in February ${year}.`);
} else {
  prompt(`There are ${days} days in ${monthName}.`);
}
