const func1 = () => {
    console.log("func1");
};
const func2 = () => {
    console.log("func2");
};

class Unshakable {
    method1() {
        console.log("method1");
    }
    method2() {
        console.log("method2");
    }
    method3() {
        console.log("method3");
    }
}

const un = new Unshakable();
un.method1();
func1();
func2();
(async () => {
    const m = await import('./Dog-38550b67.js')
        .then(m => m.default);
    const dog = new m();
    dog.bark();
})();
console.log("ts");
console.log("ts");
//# sourceMappingURL=app.js.map
