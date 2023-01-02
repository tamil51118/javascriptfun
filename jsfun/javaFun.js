 
 
 const markMass=78;
const johnMass=92;
const markHeight=1.69;
const johnHeight=1.95;

const markBmi=markMass/markHeight**2;
const johnBmi=johnMass/johnHeight**2;
const markHigherBMI=markBmi>johnBmi;
console.log(markBmi,johnBmi);
if(markBmi>johnBmi)
{
    console.log("Mark's BMI "+markBmi+"is higher than John's"+johnBmi+"!")
}
else{

}console.log("John's BMI is higher than Mark's!")

const age=19;

if(age>=18){
    console.log(`can get driving license`)
}
else
{
    console.log(`can't not get the driving license ${18-age}`)
}


const scoreDolphins=(96+108+89)/3;
const scoreKoalas=(88+91+110)/3;
console.log(scoreDolphins);
console.log(scoreKoalas);
if(scoreDolphins>scoreKoalas){
    console.log("winner is Dolphins....!")
}
else if(scoreDolphins<scoreKoalas){
    console.log("winner is Koalas......!")
}
else if(scoreDolphins === scoreKoalas){
    console.log("match is draw...!")
}



console.log(scoreDolphins);
console.log(scoreKoalas);
if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
    console.log("winner is Dolphins....!")
}
else if(scoreDolphins<scoreKoalas && scoreKoalas>=100){
    console.log("winner is Koalas......!")
}
else if(scoreDolphins === scoreKoalas &&scoreDolphins>=100 && scoreKoalas>=100){
    console.log("match is draw...!")
}

const value=90;
let tip=value>= 50&&value<=300?value*0.15:value*0.2;
console.log(tip )


'use strict';

function logger(){
    console.log("tamilselvan")
}
//calling function/running/invoking function
logger();
logger();

function fruitProcessor( apples,mango){
    console.log(apples,mango)
    
    const juice=`juices with ${apples} apples and ${mango}`;
    return juice

}
 let jus=fruitProcessor(5,6)
 console.log(jus)


const calcAverage=(score1,score2,score3)=>{

return (score1+score2+score3)/3;
}
let avgDolhins=calcAverage(85,54,41);
 let avaKoalas=calcAverage(23,34,27);

function chechWinner(avgDolhins,avaKoalas){

 console.log(avaKoalas,avgDolhins)

if(avgDolhins>=2*avaKoalas){
    console.log(`Dolhins wins...!(${avgDolhins}vs.${avaKoalas})`)
}
else if(avaKoalas>=2*avgDolhins){
    console.log(`kolas wins ...!${avaKoalas}vs.${avgDolhins}`)
}
else{
    console.log(`match draws...!`)
}



}
chechWinner(avgDolhins,avaKoalas);


const tips=[125,555,44]
function calcTip(x){
 
   let tip= x>=50&&x<=300?x*0.15:x*0.2
   let total=tip+x;

   return total
}
const totalArray=[calcTip(tips[0]),calcTip(tips[1]),calcTip(tips[2])]

console.log(totalArray);

const tamil={
    firstname:'rarts',
    lastname:'errt',
    job:'tees',
    friend:["tamil","hgjhb","jgfjgi"],
    birthYear:1991,
    hasDriverlicense:true,
    calAge:function(){
        this.age=2030-this.birthYear
        return this.age
    },
    getSummary: function(){
        return `${this.firstname} is a ${this.calAge()} old teacher , and he has ${this.hasDriverlicense?'a':'no'} driver license`
    }
}
console.log(`${tamil.firstname} has ${tamil.friend.length} ,and his best friend is called ${tamil.friend[0]}`)

console.log(tamil.getSummary())


const Miller={
    firstname:"Mark",
    lastname:"Miller",
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI
    }

}
const Smith={
    firstname:"John",
    lastname:"smith",
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI
    }

}
Miller.calcBMI()
Smith.calcBMI()
console.log(Smith.BMI);


if(Smith.BMI>Miller.BMI){
 console.log(`${Smith.firstname} BMI${Smith.BMI} is higher than ${Miller.firstname}  ${Miller.BMI}`)
}
else if(Smith.BMI<Miller.BMI)
{
    console.log(`${Miller.firstname} BMI${Miller.BMI} is higher than ${Smith.firstname}  ${Smith.BMI}`)
}

let bills=[22,295,176,440,37,105,10,1100,86,52]
let total=[]

function calTip( bills){
    let tip=bills>=50&&bills<=300?bills*0.15:bills*0.2
    let totals=tip+bills;
    return totals
}

for(let i=0;i<bills.length;i++){
    total.push(calTip(bills[i]))

}
console.log(total)


let arr=[1,2,3,4,5,6]








function calcAverage(arr){
    let totalsum=0;
    for(let i=0;i<arr.length;i++){
   
        totalsum=totalsum+arr[i];
       
       }
       console.log(totalsum)
       return totalsum
}

function total1(){
    let total2=calcAverage(arr)/arr.length;
    console.log(arr.length)

return total2
}

const avg=total1();
console.log(avg)



