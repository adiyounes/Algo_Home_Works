function inverLongSeq(arr){
    if(arr.length<2){
        return arr;
    }
    let i=0;
    let seq=0;
    let j=0;
    while(i<arr.length-1){
        let s=0;
        while(arr[i]<arr[i+1]){
            s++;
            i++;
        }
        if(s>seq){
            seq=s;
            j=i-s;
        }
        i++;
    }
    return inverse(arr,j,j+seq);
}
function inverse(arr,p,q){
    var mid =Math.ceil((p+q)/2);
    for(;p<mid;p++,q--){
        [arr[p],arr[q]]=[arr[q],arr[p]];
    }
    return arr;
}

var array=[2,3,4,15,16,17,19,20,0,0,-4,5,6,7,8,9,10,1,2];
var array2=[1,2]
var array3=[];
console.log(inverLongSeq(array));