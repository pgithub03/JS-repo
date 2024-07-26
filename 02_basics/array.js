//array

//const arr = [2,3,1,4,true, "parijat"]

//shallow copy => changes made is reflected in original variables
// deepcopy => changes made is not reflected in original
// in array.copy() shallow copy is done


// arr.slice(i,j) => shows the elements between [i,j)
//arr.splice() =>shows the elements between [i,j) and also removes them from original array 

// arr1
// arr2
// arr3 = arr1.concat(arr2) 
// arr3 = [...arr1, ...arr2]
// arr4 = [1,2,[2,3],[1,2,3]]
// arr5 = arr4.flat(Infinity)

console.log(Array.isArray("parijat"));//=> false
console.log(Array.from("parijat"));//returns => [p,a,r,i,j,a,t]
console.log(Array.from({name:"parijat"}));// returns => []

let s1=100
let s2=200
let s3=300

Array.of(s1,s2,s3) // => returns [100,200,300]