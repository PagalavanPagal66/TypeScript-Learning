
const var_fun = (outer_var : number) => (inner_var : number ) => outer_var + inner_var;

const five = var_fun(5);
const six = var_fun(6);

console.log(five(100));
console.log(six(100));

interface X {
    a : string;
    b : number;
}

type Y = X & {
    c : string,
    d : number
}

const val : Y = {c: "Get", b:123, d:123}

