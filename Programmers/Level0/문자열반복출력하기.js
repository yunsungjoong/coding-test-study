function solution(my_string, n) {
    let answer = '';
    for(let i = 0; i < my_string,length; i++){
        for(let j = 0; j < n; j++){
            answer += my_string[i]
        }
    }
    return answer;
}


const solution = (my_string, n) => [...my_string].map(a => a.repeat(n)).join("")