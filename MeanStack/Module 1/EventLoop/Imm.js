// Using setImmediate to log after current event loop phase
console.log("A");

setImmediate(() => {
    console.log("Habiba (immediately)");
});

console.log("B");
