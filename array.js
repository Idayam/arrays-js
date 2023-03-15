//Find the last element of the following array.

arr1=[3,7,34,90,12]
var y=arr1.slice(-1)
console.log(y);

arr2=[true,"green","where",12,56]
var w=arr2.slice(-1)
console.log(w);

//Write a js program that will join the following array of elements into a string
myPets=["Cow","Birds","Snake","Dog"]

const animals=["Cow","Birds","Snake","Dog"]
console.log(animals.join(''));

//write a js script to sort the following array of items
 var arr3=[-5,9,5,3,2,-3,6,8,4,1]

 const numbers=[-5,9,5,3,2,-3,6,8,4,1]
 console.log(numbers.sort());

 //Write a program to remove duplicates from the following array.console the array without duplicate and console another array that only contains the duplicates
 var arr=["apple","mango","apple","orange","mango","mango"]

 const fruits=["apple","mango","apple","orange","mango","mango"]
 function removeDuplicates(fruits){
    return [...new Set(fruits)];
 }
 console.log(removeDuplicates(fruits));

const fruit=["apple","mango","apple","mango","mango"]
 function removeDuplicates(fruit){
    return [...new Set(fruit)];
 }
 console.log(removeDuplicates(fruit));
 //Write a script to search the word "way" in the arrayy.If the word is present,console it else console "the search word was not found"
 let arr5=["the","way","x",4]
   if(arr5=>"way"){
    console.log("way");
   }
   else{
    console.log("the search word was not found")
   }


 //Write a script to sort the following word
let word="sevink"
let textString=(string) => {
    return string.split("").sort().join("")
};
console.log(textString("sevink"))