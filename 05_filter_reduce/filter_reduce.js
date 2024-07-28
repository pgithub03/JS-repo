// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// userBooks = books.filter((bk)=>{
//     return bk.publish>=1995 && bk.genre==="History"
// })

// console.log(userBooks);

// const nums = [1,2,4,5,6,7,3]

//const newnums = nums.map((num)=> {return num+10})
//console.log(newnums);


// chaining with maps 

// const newnums = nums
//             .map((num)=> num*10)
//             .map((num)=>num+1)
//             .filter((num)=>num>40)

// console.log(newnums);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// reduce 

const nums = [1,2,3]

// const total = nums.reduce(function (acc,curr) {
//     console.log(`acc:${acc} and curr:${curr}`);
//     return acc + curr
// },0)

//reduce with arrow function
const total = nums.reduce((acc,curr)=>{
    return acc + curr
},0)

console.log(total);

const shop = [
    {
        itemName:"js",
        price : 1200
    },
    {
        itemName:"py",
        price : 8200
    },
    {
        itemName:"cpp",
        price : 9200
    }
]

const price = shop.reduce((acc,item)=>{
    return item.price+acc
},0)

console.log(price);