//импорт модуля
import { sum , multiply} from './math.js';

console.log('a * PI:',multiply(6));
console.log('Sum:', sum(1,2));

//переопределяем название функции
import { multiply as myFn } from './math.js';
console.log('MyFn', myFn(4) );

//предоставляем все пространство имен
import * as math from './math.js';
console.log( math.multiply(5) );   
console.log( math.sum(1,2) );