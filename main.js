// setting the value of myAge to 34
var myAge = 34;
// setting value of earlYears to 2
var earlyYears =2;
// assigning earlyYears a new value of itself time 10.5
earlyYears = (earlyYears * 10.5);
// assigning the variable laterYears a result of myAge minus 2 years
laterYears = (myAge - 2);

// multiplying laterYears by 4 and reassigning the value to the variable
laterYears= (laterYears * 4);

// calculates age in dog years and assigns it to a new variable
var myAgeInDogYears = (earlyYears + laterYears);
// assigns my name to display in all lower case
var myName = ('Julian'.toLowerCase());

console.log('My name is '+ myName + '. I am ' + myAge +' years old '+ 'in human years which is '
+ myAgeInDogYears + ' years old in dog years');
