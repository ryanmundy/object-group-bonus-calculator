class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function employeeInfo() {
  for( let i=0; i<employees.length; i++ ){
console.log( employees[i] );
  } // end of for loop
} // end employeeInfo

console.log( employeeInfo ());

class Bonus{
  constructor(name, bonusPercentage, totalCompensation, totalBonus){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  }//end constructor
}// end Bonus class

function calculateBonus(params) {
  
}

/*function newEmployee( name, employeeNumber, annualSalary, reviewRating ){
  employees.push(new Employee( name, employeeNumber, annualSalary, reviewRating) );
  console.log( name + ' ' + 'added to employees' );
}// end newEmployee

console.log( newEmployee( 'John', '1947', '64000', 1 ));
console.log(employeeInfo());
*/

