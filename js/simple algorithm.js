//Example
//Remove duplicate 
// 1. [2,4,5,2,6,3,5]=>[2,4,5,6,3]
// function dupl(arr){
//     let newArr = [];

//     for(let i=0; i<arr.length; i++){
//         let val = arr[i]
//         //console.log(val)
//         if(newArr.includes(val)===true){
//             continue
//         }else{
//             newArr.push(val)
//         }
//     }
//     return newArr;
// }
// arr = [2,4,5,2,6,3,5];
// console.log(dupl(arr));

//OR

// function dupl(arr){
//     // in assending order
//     arr.sort()

//     let newArr = [];

//     for(let i=0; i<arr.length; i++){
//         let val = arr[i]
//         if(newArr.indexOf(val) === -1){
//             newArr.push(val)
//         }
//     }
//     return newArr;
// }
// arr = [2,4,5,2,6,3,5];
// console.log(dupl(arr));



//Questions 1
// Given an array of different numbers, remove 
// all duplicated numbers, and return the numbers
// with out duplicate as seen below.
// 1. [2,4,5,2,6,3,5]=>[4,3,6]
// 2. [1,3,2,1,3,2]=>[]
// 3. [2,8,10,7,8,2,7]=>[10]
// 4. [6,4,5,6,4,3]=>[5,3]
// 5. [4,5,1,5,4,2]=>[1,2]

function dup(arrNo) {
    let ans = [];

    for (let i = 0; i < arrNo.length; i++) {

        if (ans.includes(arrNo[i])) {
            ans = ans.filter(aa => aa !== arrNo[i])
        } else {
            
            ans.push(arrNo[i])
        }
    }

    return ans;
}
// arrNo = [2,4,5,2,6,3,5];
// arrNo = [1,3,2,1,3,2]
// console.log(dup(arrNo))
console.log(dup([1,3,2,1,3,2]))
console.log(dup([2,4,5,2,6,3,5]))
console.log(dup([2,8,10,7,8,2,7]))
console.log(dup([6,4,5,6,4,3]))
console.log(dup([4,5,1,5,4,2]))


// Question2)
// Display the highest character in a given 
// string as seen below;
// 1. Look{L=1,o=2,k=1}
//let kk = prompt("Enter a word");
//console.log(kk.split(""));

//"Look";
console.log("Look".split(""))

function dupStr(str){
    let newStr = [];

    for(let p=0; p<str.length; p++){
        let st = str[p];
        
        if(newStr.includes(st)===true){

        }else{
            newStr.push[st]
        }
        return newStr
    }
}


// 2. Drill{D=1,r=1,i=1,l=2}



//Question3)
// Given an array of numbers, return the second smallest
// and second largest numbers in an array
// [2,3,4,9,7]=>[3,7]