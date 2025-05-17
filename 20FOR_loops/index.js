// Burada for döngüsünün mantığını inceleyeceğiz

/*
for( let i = 0; i <= 10; i+=2){
    console.log(`Seni ${i} kere çok seviyorum!`);
}
    */

for(let i = 1; i <= 20 ; i ++) {
   if (i == 13) {
        continue;
   } else if(i == 17){
        break;
   } 
   else{
        console.log(i);
   }
    
}