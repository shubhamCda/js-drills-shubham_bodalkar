export function counterFactory() {
    let counter = 0;

    function increment() {
        return counter++;
    }

    function decrement() {
        return counter--;
    }

    return {increment, decrement};
}
// const count = counterFactory();
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
