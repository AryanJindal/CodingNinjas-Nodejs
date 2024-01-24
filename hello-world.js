const compute = ()=>{
    let sum = 0;
    for(let i=1; i<=1000000000; i++){
        sum += i;
    }
    console.log(sum);
}
setTimeout(compute, 0);
console.log("done")
