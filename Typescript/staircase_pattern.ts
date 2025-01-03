
const staircasePattern=(n:number)=>{
    
for(let i=1;i<=n;i++){
    for(let j=0;j<n-i;j++){
        process.stdout.write(" ");  
    }

    for(let j=0;j<i;j++){
        process.stdout.write("#")
    }
    console.log("");
    
}
}

staircasePattern(5)