
// Using process.nextTick to log on the next tick of the event loop
console.log("A");  
process.nextTick(() => {
    console.log("Habiba (Next tick)");
});

console.log("B");
