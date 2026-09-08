// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function mul(a,b){
//     return a*b;
// }

// let dog="bark";
// let cat="meuw";

// module.exports.addFn=add;
// module.exports.subFn=sub;
// module.exports.mulFun=mul;
// module.exports.dogFn=dog;
// module.exports.catFn=cat;

// module.exports={
//     dogFn:dog,
//     catFn:cat,
//     addfn:add,
//     subFn:sub,
//     mulFn:mul
// }

// function add(a,b){
//     return a+b;
// }

// module.exports=add; 




//Learning Es Module

function add(a,b){
    return a+b;
}

export function sub(a,b){      //isko named export bolte haii,function ko inline export kr dete hai
    return a-b;
}

// export default sub; //ye nahi kar skte kyuki ek hi default hoga bar bar nhi export kr skte
export default add;