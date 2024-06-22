
const var_fun = (outer_var : number) => (inner_var : number ) => outer_var + inner_var;

const five = var_fun(5);
const six = var_fun(6);

console.log(five(100));
console.log(six(100));