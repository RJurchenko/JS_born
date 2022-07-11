// hoisted

// f definicija 
// ar apg. palidzibu
function square_statement (number){
    return number * number;
}
const x = square_statement(4); // x gets the value 16
console.log(x);

// f definesana ar 
// izteiksmes pal.
const square_expression = function (number) {
    return number * number;
  }
const y = square_expression(4); // x gets the value 16
console.log(y);

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log(factorial(3))

  
  
  // piemers ar funkciju, kuras arguments (viens no)
  // arī ir funkcija

  function map(f, a) {
    const result = [];
    //i = 1;
    for (const v of a) {
      //result[i] = f(v);
      //i++;
      result.push(f(v));
    }
    return result;
  }
  
const square_for_array_each_element = function (xs) {
    console.log(x);
    return xs * xs;
  }

  xs;
  
const cube_for_array_each_element = function (x) {
  return x * x * x;
}

  const numbers = [0, 1, 2, 5, 10];

  const squares = map(square_for_array_each_element, numbers);
  console.log(squares);

  const cubes = map(cube_for_array_each_element, numbers);
  console.log(cubes);

