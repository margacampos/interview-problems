const wordTrue1 = 'nameless';
const wordTrue2 = 'salesmen';
const wordFalse1 = 'nameless';
const wordFalse2 = 'salesman';


const isAnagram = ( word1, word2 ) => {
    if( word1.length !== word2.length )return false;

    let value1 = {};
    let value2 = {};

    for ( let letter of word1 ){
        if(letter in value1) value1[letter]++;
        else value1[letter] = 1;
    }

    for ( let letter of word2 ){
        if(letter in value2) value2[letter]++;
        else value2[letter] = 1;
    }

    return checkFrequency(value1, value2);
};

const checkFrequency = ( value1, value2 ) => {
    for (key in value1){
        if( value1[key] !== value2[key] )return false;
    }
    return true;
};

console.log(isAnagram( wordTrue1, wordTrue2 ));
console.log(isAnagram( wordFalse1, wordFalse2 ));
