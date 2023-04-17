// 예 1)

/*
function solution(s){
    let answer="";
    for(let x of s){
        if(x==='A') answer+='#';
        else answer+=x;
    }
    return answer;
}
let str="BANANA";
console.log(solution(str));

*/


function solution(s){
    let answer=s;
    s=s.replace(/A/g, '#');
    console.log(s);
    return answer;
}

let str="BANANA";
console.log(solution(str));