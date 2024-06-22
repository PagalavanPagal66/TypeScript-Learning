var var_fun = function (outer_var) { return function (inner_var) { return outer_var + inner_var; }; };
var five = var_fun(5);
var six = var_fun(6);
console.log(five(100));
console.log(six(100));
