const arr = [ 1, 2, 2, 2, 4, 7, 7, 9, 10, 10, 10, 11 ];
const target = 10;

// Without binary :
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

// With binary

const findFirstTarget = ( arr, start, end, target ) => {
    const mid = Math.floor( ( start + end ) / 2 );
    
    if( arr[mid] === target ) {
        if (!arr[mid-1] || arr[mid-1] < arr[mid])return mid;
    };

    if( end - start === 0 ) return -1;

    if( arr[mid] >= target ) return findFirstTarget( arr, start, mid - 1, target );
    else return findFirstTarget( arr, mid + 1, end, target );
    
};

const findLastTarget = ( arr, start, end, target ) => {
    const mid = Math.floor( ( start + end ) / 2 );
    
    if( arr[mid] === target ) {
        if (!arr[mid + 1] || arr[mid + 1] > arr[mid])return mid;
    };

    if( end - start === 0 ) return -1;

    if( arr[mid] > target ) return findLastTarget( arr, start, mid - 1, target );
    else return findLastTarget( arr, mid + 1, end, target );
    
};

const firstLastPositionBinary = ( arr, target ) => {
    let start = findFirstTarget( arr, 0, arr.length - 1, target );
    let last = findLastTarget( arr, 0, arr.length - 1, target );

    return [ start, last ];
};


console.log(firstLastPositionBinary( arr, target ));