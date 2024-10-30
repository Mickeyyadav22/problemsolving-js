
/*3 Electricity Bill Calculation Based on Usage

 Problem:
 Write a program to calculate the electricity bill based on the number of units consumed:

 Units <= 100: 1rs per unit

 Units > 100 and <= 300: 1rs per unit for the first 100 units + 1.5rs per unit for the next 200 units

 Units > 300: 1rs per unit for the first 100 units + 1.5rs per unit for the next 200 units + 2rs per unit beyond 300

 Requirements:

 Input: A variable representing the number of units consumed

 Output: Total electricity bill amount */


const units=prompt("enter the units: ")

if (units<=100){
    bill1=units*1
    console.log(`Total Bill is ${bill1} rs`)
}
else if (units >100 && units <=300){
    bill2=100+(units-100)*1.5
    console.log(`Total Bill is ${bill2} rs`)
}
else {
    bill3=100*1+200*1.5+(units-300)*2
    console.log(`Total Bill is ${bill3} rs`)
}
