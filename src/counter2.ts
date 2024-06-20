type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let initial : number = init;
    return {
        increment(){
            init++;
            return init;
        },
        decrement(){
            init--;
            return init;
        },
        reset(){
            init = initial;
            return initial;
        }
    }
};