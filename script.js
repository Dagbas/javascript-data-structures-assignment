//START OF REVIEW

// As discussed in class, 2 of the most common and important
// data structures native to javascript: Arrays and Objects

//To review, an array is an ordered collection of data where each item is assigned
//an index starting from 0
//e.g.
let mySampleArray = ["Index 0", "Index 1", "Index 2"];

//An object, is used to store collections of data in a key-value pair format,
//where each key is a string (although quotes are optional for keys without spaces in them) and
//the values can be any data type

let mySampleObject = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};

//END OF REVIEW

//START OF ASSIGNMENT
//Given what we just learned, your assignment is to create an array of objects!
//Set the myZooAnimals variable underneath this text to an array of objects that have the
//following keys:
//1. animalType
//2. name
//3. age
//4. pictureURl

//Hint: go to https://unsplash.com for some great, high-res pics and search up whatever animal you want!

//Make sure to make at least 3 animal objects with these keys inside of the myZooAnimals array!

const myZooAnimals =
    [ 
        {
            animalType: "Crocodile",
            name: "Smiley",
            age: 55,
            pictureURL:"https://plus.unsplash.com/premium_photo-1661963625984-6bb1c3a70aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2820&q=80" 
        },
        {
            animalType: "California Condor",
            name: "Spread",
            age: 9,
            pictureURL:"https://images.unsplash.com/photo-1615935877994-6548a6142e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
         },
        {
            animalType: "Ibex",
            name: "Tackle" ,
            age: 6,
            pictureURL: "https://images.unsplash.com/photo-1623692747804-45f4d300a8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        } ,
    ]


//END OF ASSIGNMENT


