function calculate(N){
    let U=[0,1,2];
    for(let i=3;i<=N;i++){
        let x=U.push(U[i]=2*U[i-1]+3*U[i-3]);    
    }
    return U[N];
}

console.log(calculate(5));