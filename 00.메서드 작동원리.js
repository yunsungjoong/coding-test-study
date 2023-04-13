


/*
고차함수 : 매게변수에 함수를 전달 받는 것
forEach , map, filter, reduce 

*/
 
/*
1. forEach

// ex 01)
 function forEach(predicate, thisArg) {
     for(let i=0; i<a.length; i++){
         predicate(a[i], i)
     }
}
// ex 02)
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`😃 ${index} is ${number}`);
});
*/



/*
2. map 맵은 원본 배열과 같은 길이에 배열을 생성한다. 
원본 배열 요소들을 이용해 새로운 배열을 생성하는 것 

// ex 01 ) 
function map(predicate, thisArg) { 
    let list=[];
    for(let i=0; i<a.length; i++){
        list.push(predicate(a[i], i));
    }
    return list
}

// ex 02 )
a = [10, 11, 12, 13, 14, 15];
let answer=a.map(function(v,i){
    return v*v;
    }, [1,2])
console.log(answer);

ex 03 )
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
*/


/* 
Filter :  원본배열 안에서 필터링 하는 것 맵과의 차이점은 길이가 다르다는 것이다. 

//  ex 01 )
function filter(predicate, thisArg) { 
    let list=[];
    for(let i=0; i<a.length; i++){
        if(predicate(a[i], i)) list.push(a[i]);
    }
    return list;
}

// ex 02 )
a = [10, 11, 12, 13, 14, 15];
answer = a.filter(function(v,i) { 
    return v%2==0;
}, [1,2])
console.log(answer)

*/

/*
reduce : 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하여 하나의 결과 값을 만든다. 이때 이전 요소의 결과 값을 다음 요소의 인수로 전달한다

보통 원본배열에 합을 구할때 reduce를 주로 쓴다.
*/

// ex 01 )
// function reduce(predicate, val) {
//     let result= val;
//     for(let i=0 i<a.length; i++) { 
//         result=predicate(result, a[i]);
//     }
//     return result;
// }

a = [1,2,3,4,5];
answer = a.reduce(function(acc, v){
    return acc + v ; 
}, 0);
console.log(answer);