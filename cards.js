function oddSumBelowN(num) {
    // Write code here
    let sum=0;
    for(i=0;i<=num;i++){
        if(i%2!==0){
            sum+=i;
        }
          
    }
    console.log(sum)
}
