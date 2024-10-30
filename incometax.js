
/* Income Tax Calculation Based on Income Slabs
 Problem:
 Write a program to calculate income tax based on the following slabs:
 Income <= 2,50,000: No tax

Income > 2,50,000 and <= 5,00,000: 5% of the amount exceeding 2,50,000
 Income > 5,00,000 and <= 10,00,000: 12,500 + 20% of the amount exceeding 5,00,000

Income > 10,00,000: 1,12,500 + 30% of the amount exceeding 10,00,000
 Requirements:

 Input: A variable representing income

 Output: Total tax payable*/


const Income=prompt("enter the Amount")
let Tax_percent,Income_tax

if (Income<=250000){
    console.log(`Your Have No Tax`)
}
else if (250000< Income <= 500000 ){
    Tax_percent=5/100
    Income_tax=Income*Tax_percent
    console.log(`Your Tax Amount is ${Income_tax}Rs`)
}
else {
    if (500000< Income <=1000000){
        Tax_percent=20/100
         Income_tax=(Income*Tax_percent)+12500
         console.log(`Your Tax Amount is ${Income_tax}Rs`)
    }
    else {
        Tax_percent=30/100
        Income_tax=(Income*Tax_percent)+112500
        console.log(`Your Tax Amount is ${Income_tax}Rs`)

    }
}
