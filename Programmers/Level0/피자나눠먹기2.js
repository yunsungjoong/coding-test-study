function solution(n) {
    for(let i = 1; i < 6 * n; i++) {
        if ((6 * i) % n === 0){
            return i
        }
    }
}


/* 
i가 1부터 시작하여 6의 배수로 증가하는 반복문이 있습니다. (for(let i = 1; i < 6 * n; i++))

반복문 안에서는 (6 * i) % n이 0이 되는 첫 번째 i 값을 찾습니다.

찾았다면 그 값을 반환합니다. (return i)
*/