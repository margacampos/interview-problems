let memo = {};

// O(2^n)
const fib = ( n ) => {
    if( n === 0 )return 0;
    if( n === 1 )return 1;

    return fib(n-1)+fib(n-2);
};

// O(n)
const fibMemo = ( n, memo ) => {
    if( n === 0 )return 0;
    if( n === 1 )return 1;
    if( memo[n] )return memo[n];

    memo[n] = fib(n-1)+fib(n-2); 
    return memo[n];
};

console.log(fib(6));
console.log(fibMemo(6, memo));