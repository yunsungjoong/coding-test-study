function solution(arr) {
    // 배열 길이 중 중앙값 (중간 index) 찾기
    const mid_num = Math.floor(arr.length / 2);
  
    // 오름차순으로 정렬하기 - sort() 메서드 사용
    const asc_arr = arr.sort((a, b) => a - b);
  
    // 오름차순된 새로운 배열 중 중간 index 반환하기
    return asc_arr[mid_num];
}


function solution(arr){
    return arr.sort((a , b) => a - b)[parseInt(array.length / 2)];    
}


const solution = arr => [...arr].sort((a,b) => a - b)[Math.floor(arr.length / 2)];
