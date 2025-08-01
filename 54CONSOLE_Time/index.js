// console.time() = tool that allows you to measure the time it takes
//                               for a section of code or process to execute
//                               Great for identifying performance "bottlenecks"

/*
console.time("test");
for( let i=0; i < 100000; i ++){
    //console.log(`${i}. adım`);
}
console.timeEnd("test");
*/

function loadData() {
    
    console.time("loadData")

    for (let i = 0; i < 10000000; i++) {
        //burada geçen zaman hesaplanacak
        
    }
    console.timeEnd("loadData");
}

function processData() {
    console.time("processData");
    for(let i=0; i< 1000000000; i++){
        //zaman ile data bilgileri çekileceği for döngüsü
    }
    console.timeEnd("processData");
}
loadData();
processData();