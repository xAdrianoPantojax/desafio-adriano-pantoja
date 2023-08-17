import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js"



const exeum = new CaixaDaLanchonete()
                 .calcularValorDaCompra('debito', ['chantily,1'])

const exumdois = new CaixaDaLanchonete()
                      .calcularValorDaCompra('dinheiro', ['cafe,1','chantily,1']);

const exumtres = new CaixaDaLanchonete()
                      .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);

console.log(exeum)
console.log(exumdois)
console.log(exumtres)