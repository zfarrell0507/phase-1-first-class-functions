function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function fn() {
        console.log("returns a named function");
    };
}
function returnsAnAnonymousFunction() {
    return () => console.log("returns and anonymous function.")
}