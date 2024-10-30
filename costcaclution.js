
/*2.Shipping Cost Based on Weight and Destination

 Problem:
 Write a program that calculates the shipping cost for a parcel based on its weight and destination:

 Weight <= 1kg:
 Local: 5rs
 National: 8rs
 International: 15rs
 Weight > 1kg and <= 5kg:
 Local: 10rs
 National: 15rs
 International: 30rs
 Weight > 5kg and <= 10kg:
 Local: 20rs
 National: 25rs
 International: 50rs
 Weight > 10kg:
 Local: 30rs
 National: 35rs
 International: 70rs
 Requirements:
 Input: Two variables for weight and destination
 Output: The total shipping cost  */


const weight=prompt("enter the Kilograms: ")
let Local,National,International

if (weight<=1){
    Local=5,National=8,International=15
    console.log(`Your Local Cost is ${weight*Local} Rs`)
    console.log(`Your Natioanl Cost is ${weight*National} Rs`)
    console.log(`Your Internatioanl Cost is ${weight*International} Rs`)
}
else if (weight>1 && weight<=5){
    Local=10,National=15,International=30
    console.log(`Your Local Cost is ${weight*Local} Rs`)
    console.log(`Your Natioanl Cost is ${weight*National} Rs`)
    console.log(`Your Internatioanl Cost is ${weight*International} Rs`)
}
else {
    if (weight>5 && weight<=10){
        Local=20,National=25,International=50
        console.log(`Your Local Cost is ${weight*Local} Rs`)
        console.log(`Your Natioanl Cost is ${weight*National} Rs`)
        console.log(`Your Internatioanl Cost is ${weight*International} Rs`)
    }
    else {
        Local=30,National=35,International=70
        console.log(`Your Local Cost is ${weight*Local} Rs`)
        console.log(`Your Natioanl Cost is ${weight*National} Rs`)
        console.log(`Your Internatioanl Cost is ${weight*International} Rs`)
    }
}
