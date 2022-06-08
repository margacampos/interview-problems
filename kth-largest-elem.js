const arr = [1,6,5,9,3,6,7,13,10];

const kthNum = ( arr, n ) => {
    // arr.sort(( a, b ) => a - b );
    const newArr = quickSort(arr);

    return newArr[arr.length - n];
};

const quickSort = ( arr ) => {
    if( arr.length === 1 )return arr;

    const pivot = Math.floor( arr.length / 2 );
    let start = 0;
    let end = arr.length - 1;

    while (start !== end){

        while( arr[start] < arr[pivot] ) {
            start++;
        }
        
        while( arr[end] > arr[pivot] ) {
            end--;
        }

        const temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
    }

    const leftSide = quickSort( arr.slice( 0,pivot ) );
    const rightSide = quickSort( arr.slice( pivot, arr.length ) );
    return [...leftSide, ...rightSide];
};
console.log(kthNum(arr, 6));

// console.log(quickSort(arr));