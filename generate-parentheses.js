const parethesesValid = ( n ) => {
    let open = 0;
    for ( par of n ){
        if(par === '(')open++;
        else if(open === 0)return false;
        else open--;
    }
    return open === 0;
};

const generate = ( n ) => {
    let combs = [];
    gen(2*n, 0, [], combs );
    return combs;
};

const gen = ( n, diff, comb, combs ) => {
    if (diff < 0 || diff > n)return;
    if ( n === 0 && diff === 0)combs.push(comb.join(''));

    comb.push('(');
    gen(n-1, diff+1, comb, combs);
    comb.pop();
    comb.push(')');
    gen(n-1, diff-1, comb, combs);
    comb.pop();
};

console.log(generate(5));