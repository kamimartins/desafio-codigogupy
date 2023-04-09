const fatMensal = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

//criando um novo vetor com os valores diarios apartir do objeto do faturamento mensal
let val_fatMensal = [];
for (let i = 0; i <= fatMensal.length - 1; i++) {
  val_fatMensal[i] = fatMensal[i].valor;
}
console.log('3) RE:');
//verificando o MENOR faturamento mensal
let menor_fatMensal = val_fatMensal[0];
let menorDia_fatMensal = 0;
for (let i = 1; i <= val_fatMensal.length; i++) {
  if (
    val_fatMensal[i] !== 0 &&
    (menor_fatMensal === val_fatMensal[0] || val_fatMensal[i] < menor_fatMensal)
  ) {
    menor_fatMensal = val_fatMensal[i];
    menorDia_fatMensal = fatMensal[i].dia;
  }
}
console.log(
  `Dia ${menorDia_fatMensal} teve o MENOR valor de faturamento: R$ ${menor_fatMensal}`
);
//verificando o MAIOR faturamento mensal
let maior_fatMensal = val_fatMensal[0];
let maiorDia_fatMensal = 0;
for (let i = 1; i <= val_fatMensal.length; i++) {
  if (val_fatMensal[i] > maior_fatMensal) {
    maior_fatMensal = val_fatMensal[i];
    maiorDia_fatMensal = fatMensal[i].dia;
  }
}
console.log(
  `Dia ${maiorDia_fatMensal} teve o MAIOR valor de faturamento: R$ ${maior_fatMensal}`
);

//calculando a media do faturamento mensal
let media_fatMensal = 0;
let sum_fatMensal = 0;
for (let i = 0; i < val_fatMensal.length; i++) {
  sum_fatMensal += val_fatMensal[i];
}
media_fatMensal = sum_fatMensal / val_fatMensal.length;
console.log(`A média do faturamento mensal é de: R$ ${media_fatMensal}`);

//comparando e verificando quais dias possuem valor do faturamento superior a media do faturamento mensal
let listaDiasMaiorFat = [];
for (let i = 0; i < val_fatMensal.length; i++) {
  if (val_fatMensal[i] !== 0 && val_fatMensal[i] > media_fatMensal) {
    listaDiasMaiorFat[listaDiasMaiorFat.length] = fatMensal[i].dia;
  }
}
//listar os dias com maior faturamento em uma string
let strg_listarDias = '';
for (let i = 0; i < listaDiasMaiorFat.length; i++) {
  strg_listarDias += listaDiasMaiorFat[i].toString();
  if (i < listaDiasMaiorFat.length - 1) {
    strg_listarDias += ', ';
  }
}
console.log(
  `Dias em que o valor de faturamento diário foi superior à média mensal: ${strg_listarDias}`
);
console.log('');
console.log('4) RE:');
//representação em porcetagem que cada estado teve de contruibuição valor no total mensal da distribuidora
const estados = [
  {
    estado: 'SP',
    faturamento: 67836.43,
  },
  {
    estado: 'RJ',
    faturamento: 36678.66,
  },
  {
    estado: 'MG',
    faturamento: 29229.88,
  },
  {
    estado: 'ES',
    faturamento: 27165.48,
  },
  {
    estado: 'Outros',
    faturamento: 19849.53,
  },
];
let porcEstado = [];
for (let i = 0; i < estados.length; i++) {
  //calculando a porcetagem e iterando ao vetor
  porcEstado[porcEstado.length] =
    (estados[i].faturamento / sum_fatMensal) * 100;
}
console.log(
  `Representação em porcentagem de cada estado teve ao faturamento mensal:`
);
for (let i = 0; i < estados.length; i++) {
  console.log(
    `Estado: ${estados[i].estado} \n Faturamento: ${porcEstado[i].toFixed(2)}%`
  );
}
console.log('');
console.log('5) RE:');
//Invertento os caracteres de um string
const word = 'TARGET';
for (let i = word.length; i--; i <= 0) {
  console.log(word[i]);
}
