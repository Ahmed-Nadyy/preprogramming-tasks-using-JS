function doo(n){
    if(n==1)return 1;
    return n*doo(n-1);
}

console.log(doo(5));