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
calculateBonus( employees[i] );
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

function calculateBonus( employee ) {
  console.log( employee.reviewRating );
  let bonus = 0;
if( employee.reviewRating < 2 ){
bonus = 0;
console.log(employee.name + ' ' + 'bonus,' + '' + bonus);
}// end rating less than 2
else if( employee.reviewRating === 3 ){
bonus = employee.annualSalary * .04;
  console.log(employee.name + ' ' + 'bonus,' + '' + bonus);
}// end rating of 3
else if( employee.reviewRating === 4 ){
  bonus = employee.annualSalary * .06;
  console.log(employee.name + ' ' + 'bonus,' + '' + bonus);
}// end rating of 4
else{
  bonus = employee.annualSalary * .1;
  console.log(employee.name + ' ' + 'bonus,' + '' + bonus);
}// end rating of 5
}// end calculateBonus

console.log(calculateBonus(robert));
console.log(calculateBonus(scout));


 /*Those who have a rating of a 2 or below should not receive a bonus.
  Those who have a rating of a 3 should receive a base bonus of 4 % of their base annual income.
  Those who have a rating of a 4 should receive a base bonus of 6 % of their base annual income.
  Those who have a rating of a 5 should receive a base bonus of 10 % of their base annual income.
  If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5 %.
    However, if their annual income is greater than $65, 000, they should have their bonus adjusted down 1 %.
  No bonus can be above 13 % or below 0 % total.
    NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.
*/

/*function newEmployee( name, employeeNumber, annualSalary, reviewRating ){
  employees.push(new Employee( name, employeeNumber, annualSalary, reviewRating) );
  console.log( name + ' ' + 'added to employees' );
}// end newEmployee

console.log( newEmployee( 'John', '1947', '64000', 1 ));
console.log(employeeInfo());
*/

