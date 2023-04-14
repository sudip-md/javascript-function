let firstName = "Sudip"
let lastName = "Dadhaniya"
let age = "33"
let gender = "Male"

document.write("Hello!!")
document.write(firstName , lastName)
console.log(firstName , lastName )
document.write("<br>")
document.write("*****************************************")
document.write("<br>")
/*** If Statement ***/

if(age <= 13){

    document.write("You are Child!!")
}
else if(age >= 18){

    document.write("You are Adult ")
}
else{

    document.write("You are Teenager!!")
}

/*** If Statement BMI Calculator ***/

document.write("<br>")
let val=bmiCalculator(74,175); //Enter Weight in Kg and Height in cm

if(val < 18.5){
    document.write("Your BMI is "+val+": You are Underweight");
} else {
    if ( val >= 18.5 && val <= 24.9) {
        document.write("Your BMI is "+val+": You have a Normal Weight");
    } else {
      if ( val > 24.9) {
        document.write("Your BMI is "+val+": You are Overweight");
      }
    }
}

function bmiCalculator (weight, height) {
     return ( Math.round((weight/(height*height))*10000));
}
document.write("<br>")
/*** Switch Statement ***/

    switch (true) {
        
        case (age >= 0 && age <=10):
            document.write("Your Age is NOT between 0 and 10 <br />");
        break;
        case age >= 0 && age <= 10:
            document.write("Your Age is between 0 and 10 ");
            break;

        case age >=80 && age <=10:
            document.write("Your Age is 80 or above or 10 or below ");
            break;

        case age >= 30 && age <=39:
            document.write("Your Age is between 30 and 39 ");              
            break;

        case age >= 80 && age <= 89:
            document.write("Your Age is between 80 and 89 ");
            break;
        default:
            document.write("Enter Valid age");
        }
        document.write("<br>")

  /*** For Loop ***/

  document.write("Numbers :")
  for (i=1; i<=10; i++){
    document.write(+i, ",");
  }

  document.write("<br>")

  let hobbies = ['Playing Cricket','Watching Movie','Travelling'];
  let x;

  document.write("Hobbies :")
  for (x of hobbies){
    document.write(x,",");
  }
  document.write("<br>")

  /*** While Loop ***/

  let counter = 1;

  document.write("Counter Numbers :")
  while(counter <=10){
    document.write(+counter, ",");
    counter=counter+1;
  }

  document.write("<br>")
  
  /*** Array ***/

  let numbers = [1, 2, 3, 4, 5, 6, 7];
  document.write("Array Numbers :", numbers, "<br>" )

  let fruits = ['Apple', 'Banana', 'Grapes'];
  let cars = new Array('Ford', 'Toyota', 'Jeep');
  document.write("Array length of Fruits is :", fruits.length, "</br>")

  cars[1] = 'Honda';

  document.write("Fruits :", fruits, "</br>")

  fruits.push('Cherry');
  document.write("Add Cherry in Fruits :", fruits, "<br>")

  document.write("<br>","Cars :", cars, "<br>")
 
  cars.pop();
  document.write("Remove Last Car Company :", cars, "</br>")

  cars.shift();
  document.write("Remove First Car Company :", cars, "</br>")

  cars.unshift('BMW');
  document.write("Add BMW at First Car Company :", cars, "</br>")

  delete cars[1];
  document.write("Remove Car Company from Position 1 :", cars, "</br>")

  cars[1] = 'Audi';
  document.write("Add Car Company at Position 1 :", cars, "</br>")

  cars.splice(1,0, 'Ferrari', 'Lexus', 'Skoda')
  document.write("Add Car Companies from possition 1 :", cars, "</br>")

  cars.splice(0,3);
  document.write("Remove Car Company from Position 0 to 2 :", cars, "</br>")



