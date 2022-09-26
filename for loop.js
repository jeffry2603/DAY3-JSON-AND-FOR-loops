//let object=[
//   {"person":"John","age":30,"company":"Google"},
//   {"person":"Mohn","age":37,"company":"Flipkart"},
//  {"person":"Sohan","age":40,"company":"Myntra"},
//  {"person":"Jenny","age":70,"company":"Apple"},]

//iterating using for loop

let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
for(let i=0;i<object.length;i++)
//using template literal method
{
    console.log(`
    person: ${object[i].person}
    age: ${object[i].age}
    company: ${object[i].company}
    `)
}



//now iterating using for each loop
object.forEach((object)=>{
    console.log(object);
})




//now iterating using for in loop
for(let data in object){
    console.log(object[data])
}




//iterating using for of loop

for(let key of object){
    console.log(object);
}

// output of each loop statements


//for loop 

//person: John
//age: 30
//company: Google

//person: Mohn
//age: 37
//company: Flipkart

//person: Kohn
//age: 38
//company: Amazon
 
//person: Sohan
//age: 40
//company: Myntra

//person: Jenny
//age: 70
//company: Apple



//output of for each loop

 
//{person: 'John', age: 30, company: 'Google'}
//{person: 'Mohn', age: 37, company: 'Flipkart'}
//{person: 'Kohn', age: 38, company: 'Amazon'}
//{person: 'Sohan', age: 40, company: 'Myntra'}
//{person: 'Jenny', age: 70, company: 'Apple'}


//output of for in loop
 
//{person: 'John', age: 30, company: 'Google'}
//{person: 'Mohn', age: 37, company: 'Flipkart'}
//{person: 'Kohn', age: 38, company: 'Amazon'}
//{person: 'Sohan', age: 40, company: 'Myntra'}
//{person: 'Jenny', age: 70, company: 'Apple'}


//output of for of loop

//(5) [{…}, {…}, {…}, {…}, {…}]
//0: {person: 'John', age: 30, company: 'Google'}
//1: {person: 'Mohn', age: 37, company: 'Flipkart'}
//2: {person: 'Kohn', age: 38, company: 'Amazon'}
//3: {person: 'Sohan', age: 40, company: 'Myntra'}
//4: {person: 'Jenny', age: 70, company: 'Apple'}
//length: 5