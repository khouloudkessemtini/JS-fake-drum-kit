//Question 1: 
var Person = { name : 'Moez', profession : 'teacher', age:25 };
Person.name
"Moez"
Person['name']
"Moez"

//Question 2:
var Person ;
Person.name = 'khouloud';
Person.profession  = 'ingenieur';
Person.age = 27
//resultat => {name: "khouloud", profession: "ingenieur", age: 27}

//Question 3: 
var peaks = ["Tallac", "Ralston", "Rose"] 
    var canyons = ["Ward", "Blackwood"] 
    var tahoe = [...peaks, ...canyons]
//result =>  ["Tallac", "Ralston", "Rose", "Ward", "Blackwood"]

