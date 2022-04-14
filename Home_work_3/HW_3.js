function change(mat){
    let j=sum_max_col(mat);
    let p=sum_min_col(mat);
    for(i=0;i<mat.length;i++){

        [mat[i][j],mat[i][p]]=[mat[i][p],mat[i][j]];
    }
    return mat;
}

function sum_max_col(mat){
    var indicemax=0;
    var maxcol=0;
    for(let j=0;j<mat[0].length;j++){
        var sumcol=0;
        for(let i=0;i<mat.length;i++){
            sumcol+=mat[i][j];
        }
        if(sumcol>maxcol || j==0){
            indicemax=j;
        }
    }
        return indicemax;
}

function sum_min_col(mat){
    var indicemin=0;
    var mincol=0;
    for(let j=0;j<mat[0].length;j++){
        var sumcol=0;
        for(let i=0;i<mat.length;i++){
            sumcol+=mat[i][j];
        }
        if(sumcol<mincol || j==0){
            indicemin=j;
        }
    }
        return indicemin;
}

var mat=[[1,-3,4, 0 ,9],
[0,-9,7, 10,11],
 [2, 5,8,-11,45],
 [7, 4,12,-6,-5]];

console.log(change(mat));