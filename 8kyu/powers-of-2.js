function powersOfTwo(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    answer.push(2 ** i);
  }
  return answer;
}
