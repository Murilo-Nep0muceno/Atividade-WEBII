import { somar } from './somar.js';
import { subtrair } from './subtrair.js';
import { multiplicar } from './multiplicar.js';
import { dividir } from './dividir.js';

const sinal = '+';
const a = 10, b = 5;
let resultado;

if (sinal === '+') {
    resultado = somar(a, b);
} else if (sinal === '-') {
    resultado = subtrair(a, b);
} else if (sinal === '*') {
    resultado = multiplicar(a, b);
} else if (sinal === '/') {
    resultado = dividir(a, b);
} else {
    resultado = 'Operação inválida';
}

console.log(resultado);
