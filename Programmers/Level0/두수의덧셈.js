const solution = (denum1, num1, denum2, num2) => {
    const answer = [];
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;

    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

    answer[0] = denum / gcd(denum, num);
    answer[1] = num / gcd(denum, num);

    return answer;
};