// function solution(s){
//     let answer="";
//     // console.log(s.indexOf('k', 3));
//     for(let i=0; i<s.length; i++){
//         // console.log(s[i], i, s.indexOf(s[i]));
//         if(s.indexOf(s[i])===i) answer+=s[i]
//     }
//     return answer;
// }

// console.log(solution("ksekkset"));




function solution(s){
    let answer=0;
    let pos=s.indexOf('k');
    while(pos!==-1){
        answer++;
        pos=s.indexOf('k', pos+1);
    }
    
    return answer;
}

console.log(solution("ksekkset"));