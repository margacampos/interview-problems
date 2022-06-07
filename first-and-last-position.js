const arr = [ 1, 2, 2, 2, 4, 7, 7, 9, 10, 10, 10, 11 ];
const target = 5;

const firstLastPosition = ( arr, target ) => {
    let start = arr.indexOf(target);
    if(start === -1)return [-1, -1];
    let end = start;

    // O(n)
    for ( let i = start; i < arr.length; i++ ){
        if( arr[i] !== target )break;
        if(i>end)end=i;
    }

    return [ start, end ];
};

console.log(firstLastPosition(arr, target));