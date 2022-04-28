function firstLetterName(name) {

    var firstletter = name.charAt(0);
   
    alert("The name " + name + " starts with the letter " + firstletter); 
   
   } 
   
function divisibleByTwo(number) { 
   
if (number % 2 === 0) {
   
return true;
   
} else {
   
    return false;
}
   
}
function largestNum(arr) {

    var largest = arr[0]; 
       
    for (var i = 0; i < arr.length; i++) {
       
    if (arr[i] > largest) {
       
    largest = arr[i];
     }
       
    }
       
return largest;
       
}

firstLetterName("Fernanda");

divisibleByTwo(4); 

largestNum([1, 2, 3, 4, 5]); 
