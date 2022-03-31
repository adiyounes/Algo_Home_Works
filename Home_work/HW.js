function calculate(N){
    let U=[0,1,2];
    for(let i=3;i<=N;i++){
        let x=U.push(U[i]=2*U[i-1]+3*U[i-3]);    
    }
    return U[N];
}

function cal_rec(N){
    if(N==0){
        return 0;
    }else if(N==1){
        return 1;
    }else if(N==2){
        return 2;
    }else{
        return 2*cal_rec(N-1)+3*cal_rec(N-3);
    }
}

console.log(calculate(5));
console.log(cal_rec(5));