function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

let str="goooob";
console.log(solution(str));