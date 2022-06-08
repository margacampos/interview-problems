const map = [
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'L', 'W', 'W', 'W'],
    ['L', 'W', 'L', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'L', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W', 'L', 'W'],
    ['W', 'L', 'W', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'E'],
];
const small3pathMap = [
    ['W', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W'],
    ['W', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'E']
]

const countPaths = ( map, start ) => {
    const visited = new Set();
    // const memo = {};
    let [r, c] = start;
    let paths = [];
    comb = [];
    return gen( map, r, c, visited, comb, paths ).length;
};
const gen = ( map, r, c, visited, comb, combs ) => {
    const rowInBounds = ( 0 <= r && r < map.length );
    const colInBounds = ( 0 <= c && c < map[0].length );
    if( !rowInBounds || !colInBounds ) return;

    if( map[r][c] === 'L')return;

    const len = comb.length;

    const pos = `${r},${c}`;
    if( comb.includes(pos) )return;
    comb.push(pos);

    if( map[r][c] === 'E')return combs.push(comb); // If you console.log(comb) here, you can see the paths.
    else{
        gen( map, r + 1, c, visited, comb, combs );
        gen( map, r , c + 1, visited, comb, combs );
        gen( map, r - 1, c, visited, comb, combs );
        gen( map, r, c - 1, visited, comb, combs );
    }

    comb.splice(len);
    return combs;
};


console.log(countPaths(small3pathMap, [ 0, 0 ]));