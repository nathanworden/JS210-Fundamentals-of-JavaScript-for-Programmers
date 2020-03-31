function fibonacci(n) {
  let fibs = [1, 1];
  for (let i = 0; i < n; i += 1) {
    fibs.push(fibs[i] + fibs[i + 1]);
  }

  return fibs[n - 1];
}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);