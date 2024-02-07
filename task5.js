
function doo(n,o){
for(let i=o ; i>=n ; i--){
    if(i%15==0){
        console.log("face & buz");
        continue;
    }
    if(i%3==0){
      
        console.log("buz");
      continue;
    }
    if(i%5==0){
        console.log("face");
      continue;
    }
    console.log(i);
    
}
}

doo(1,10);
// console.log("ww");