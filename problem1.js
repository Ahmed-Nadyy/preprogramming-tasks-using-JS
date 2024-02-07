function doo(n){
   
for(let i =1;i<=n;i++){

    if(i%3==0 || i%5==0)continue;
    else console.log(i);
}
}
doo(10);