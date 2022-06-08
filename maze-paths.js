const map = [
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'L', 'W', 'W', 'W'],
    ['L', 'W', 'L', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'L', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W', 'L', 'W'],
    ['W', 'L', 'W', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
];

const countPaths = ( map, start ) => {
    const visited = new Set();
    const memo = {};
    let [r, c] = start;
    let paths = [];
    comb = [];
    gen( map, r, c, visited, comb, paths );
    return paths;
};
const gen = ( map, r, c, visited, comb, combs ) => {
    const rowInBounds = ( 0 <= r && r < map.length );
    const colInBounds = ( 0 <= c && c < map[0].length );
    if( !rowInBounds || !colInBounds ) return;
    if( map[r][c] === 'E')return combs.push(comb); 
    const pos = `${r},${c}`;
    if( visited.has(pos) )return;
    visited.add(pos);
    if( map[r][c] === 'L')return;
    // if ( n === 0 && diff === 0)combs.push(comb.join(''));
    
    comb.push(`${r + 1},${c}`);
    gen( map, r + 1, c, comb, combs );
    comb.pop(`${r + 1},${c}`);
    comb.push(`${r},${c + 1}`);
    gen( map, r , c + 1, comb, combs );
    comb.pop(`${r},${c + 1}`);
    comb.push(`${r - 1},${c}`);
    gen( map, r - 1, c, comb, combs );
    comb.pop(`${r - 1},${c}`);
    comb.push(`${r},${c - 1}`);
    gen( map, r, c - 1, comb, combs );
    comb.pop(`${r},${c - 1}`);
    // gen(n-1, diff+1, comb, combs);
    // comb.pop();
    // comb.push(')');
    // gen(n-1, diff-1, comb, combs);
    // comb.pop();
};

const explore = ( map, r, c, visited, paths ) => {
    // console.log(visited)
    let tempPath = 0;
    const rowInBounds = ( 0 <= r && r < map.length );
    const colInBounds = ( 0 <= c && c < map[0].length );
    if( !rowInBounds || !colInBounds ) return 0;
    if( map[r][c] === 'E')return 1; 
    const pos = `${r},${c}`;
    if( visited.has(pos) )return 0;
    visited.add(pos);
    if( map[r][c] === 'L')return 0;
    
    
    const up = explore( map, r - 1, c, visited, paths );
    const down = explore( map, r + 1, c, visited, paths );
    const right = explore( map, r, c + 1, visited, paths );
    const left = explore( map, r, c - 1, visited, paths );

    if(up !== 0)tempPath++;
    if(down !== 0)tempPath++;
    if(left !== 0)tempPath++;
    if(right !== 0)tempPath++;
    if(tempPath in paths)paths[tempPath]++;
    else paths[tempPath] = 1;
    return paths;
};


const explore2 = ( map, start, visited ) => {
    let queue = [start];
    let numberOfPaths = 0;
    while( queue.length !== 0 ){
        let [r, c] = queue.shift();
        const rowInBounds = ( 0 <= r && r < map.length );
        const colInBounds = ( 0 <= c && c < map[0].length );
        if( rowInBounds && colInBounds ){
            if( map[r][c] === 'E')numberOfPaths++;
            const pos = `${r},${c}`;
            if( map[r][c] !== 'L' && !visited.has(pos) ){
                visited.add(pos);
                queue.push([r-1, c]);
                queue.push([r+1, c]);
                queue.push([r, c+1]);
                queue.push([r, c-1]);
            };
        }
    }    
    return numberOfPaths;
};

const visited = new Set();
console.log(countPaths(map, [ 0, 0 ]));