function soloution(s){
    let answer="";
    for(let x of s){
        if(x===x.toLowerCase()) answer+=x.toUpperCase();
        else answer+=x;
        // //아스키 코드로 해보기 
        // let num=x.charCodeAt();
        // if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
        // else answer+=x;   
    }
    return answer;
}

let str="ItisTimeTostudy";
console.log(soloution(str));