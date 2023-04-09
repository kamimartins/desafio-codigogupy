console.log(
  '1) RE: A repetição do laço, o valor SOMA é incrementado com o seu valor atual e o valor atual de k, o laço termina quando o valor de k for maior ou igual ao INDICE 13'
);
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log(`RE: SOMA = ${SOMA}`);
console.log('');

function checkFibonacci(num) {
  let term1 = 0,
    term2 = 1,
    sumTerm;

  while (term2 < num) {
    sumTerm = term1 + term2;
    term1 = term2;
    term2 = sumTerm;
  }
  let checkNum =
    num === term2 || num === 0
      ? `O número ${num} pertence a sequência de Fibonacci`
      : `O número ${num} NÃO pertence a sequência de Fibonacci`;
  return checkNum;
}
console.log('2) RE:');
console.log(checkFibonacci(55));
console.log('');
