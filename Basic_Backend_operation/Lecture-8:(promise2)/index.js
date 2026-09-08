function add(a,b){
    let p=Promise((resolve, reject)=>{
        return resolve(a+b);
    })
    resolve()
}