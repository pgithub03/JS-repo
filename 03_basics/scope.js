//scope of windows browser and scope of code editor is different

console.log(func1(2))// returns 3
function func1(num){
    return num + 1
}

console.log(func2(2))// returns cannot find func2
const func2 = function (num) {
    return num + 1

}

console.log(func2(2))// returns 3


